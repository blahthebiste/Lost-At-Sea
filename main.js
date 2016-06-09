var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//var domain = "http://files.whatevercorp.net/running/"; //for online version
var domain = "images/"; //for local version
var gravity = 0.6;
var tileSize = 64;
var tilesH = Math.ceil(canvas.width/tileSize);
var tilesV = Math.ceil(canvas.height/tileSize);
var waterLevel, levelWidth, levelHeight, level, camera, player;
var shake=0;
var level;
var backgroundImg = getImg("caveBackground", 960, 540, false);
var blockImg = getImg("blockTexture", 64, 64, false);
var exitImg = new sprite("Portal", 64, 70, 0, 0);
var waterMin = 900;
var time = 0;
//danger is a measure of how likely enemies will spawn in the water.
var danger = 1000;
var displayWinScreen = false;
var displayLoseScreen = false;
var gameOver = false;
var waterTarget = -1;
var singCooldown = 0;

var roomIndex;
//Weapon library, stores weapon data in this format:
//name: [damage, attack_delay (ms), projectile_type (or melee for melee weapons), melee range (in tileSizes)]
var weapon_library = function(name){
	switch (name){
	case "sword": 
		return [ 15, 17, "melee", 1.5];
	case "hatchet": 
		return [15, 11, "melee", 0.65];
	}
};

//user input
var keys = {};
keys.up = 'W'.charCodeAt(0);
keys.left = 'A'.charCodeAt(0);
keys.down = 'S'.charCodeAt(0);
keys.right = 'D'.charCodeAt(0);
keys.sing = 'E'.charCodeAt(0);
//keys.testSwapRoom = 32;
keys.esc = 27;
keys.space=32;

//player stats (affected by items)
var swimAcceleration = 0.9;
var swimMaxSpeed = 5;
var breathLoss = 0.035;

var floodRate;
var floodRateIncrease = 0.2;
var waterColor = "#0060BB";

var enemies = [];
var enemiesOnscreen = [];

//watch for keys being pressed
for (var i in keys)
	watchKey(keys[i]);

var obstacles = [];
var obstaclesOnscreen = [];

var levelObjects = [];
var levelObjectsOnscreen = [];
function obstacle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.bb = new boundingBox(width+4, height, 0, 0);
	this.bb.update(x, y);
	this.spr = getImg("blockTexture", 64, 64, false);
	
	function setImage(){
		this.spr = getImg("blockTexture", 64, 64, false);
		for (var i in obstaclesOnscreen) {
			var other = obstaclesOnscreen[i].bb;
			var dir = this.bb.checkCollision(other);
			if (dir ==left){
				rng = Math.random()
			if(rng<.25)
				this.spr = getImg("blockLeft", 64, 64, false);
			}
		}
	}
	
	this.draw = function() {
	  	//context.fillStyle = 'green';
	  	//context.fillRect(this.x-camera.x, this.y-camera.y, this.bb.width, this.bb.height);
		context.drawImage(this.spr, this.x-camera.x, this.y-camera.y, this.bb.width, this.bb.height);
	};
}

function weapon(spr, width, height, name) {
	this.activeFrames = 0;
	this.firing = false;
	this.spr = new imageStrip(spr, width, height);
	this.spr.row(20, 72, 1);
	this.spr.row(0, height-72, 1, true);
	this.spr.setImage(0, 0);
	var weaponStatArray = weapon_library(name);

	this.damage = weaponStatArray[0];
	this.attack_delay = weaponStatArray[1];
	this.attack_cooldown = weaponStatArray[1];
	this.projectile = weaponStatArray[2];
	this.range = weaponStatArray[3];
	
	this.draw = function(x, y, xScale) {
		this.spr.draw(x, y, xScale);
	};
	
	this.fire = function(x, y){
		//REPLACE FOLLOWING LINE WITH ANIMATION CODE
			this.spr.setImage(0, 1);
			if(this.projectile == "melee")
			{
				applyDamage(this.damage, this.range*tileSize, x, y);
			}
			else {
				spawn_projectile(this.damage, this.projectile, x, y);
			}
	};
	
	//TBI
	this.reset_animation = function(){
		this.spr.setImage(0, 0);
	};
	
	this.update = function(x,y){
		if(this.firing) {
			this.fire(x,y);
			this.activeFrames--;
		}
		if(this.activeFrames == 0){
			this.firing = false;
			this.reset_animation();
		}
	}
}

var applyDamage = function(damage, aoe, x, y){	
	var damageBox = new boundingBox(aoe, aoe, x, y);
	//displayedHitBox.x = x;
	damageBox.x = x;
	//displayedHitBox.y = y; 
	damageBox.y = y;
	//displayedHitBox.size = aoe;
	for (var i in enemiesOnscreen) {
			var other = enemiesOnscreen[i].bb;
			var dir = damageBox.checkCollision(other);
  			if (dir != null) { //hit an enemy
			console.log("Hit an enemy!");
				console.log("applying "+damage+" damage to "+x+" "+y+" with aoe "+aoe);
				enemiesOnscreen[i].takeDamage(damage);
			}
		}
	for (var i in levelObjectsOnscreen){
		var other = levelObjectsOnscreen[i].bb;
			var dir = damageBox.checkCollision(other);
  			if (dir != null) { //hit an enemy
			console.log("Hit a level object!");
				levelObjectsOnscreen[i].activate();
			}
	}
};

var spawn_projectile = function(damage, projectileName, x, y){
	//tbi
};

//For debuging purposes
var displayedHitBox = {
	x: 9999,
	y: 9999,
	size: 46,
	draw: function(){
		context.fillStyle = "#FF0000"
		context.fillRect(this.x-camera.x, this.y-camera.y, this.size, this.size);
	}
}

function playerObject() {
	this.x = canvas.width/2; //mostly self explanitory variables
  	this.y = canvas.height/2/*-98*/;
  	this.moveSpeed = 2.5;
  	this.vspeed = 2;
  	this.hspeed = 0;
  	this.xScale = 1;
  	this.hp = this.hpMax = 10;
  	this.breath = this.breathMax = 10;
  	this.dmgTick = 0; //how long until player can be damaged again
  	this.dmgTickMax = 70;
  	this.standing = false;
  	this.swimming = false;
  	this.baseHeight = 98;
  	this.bb = new boundingBox(20, 98, 0, 0); //define bounding box
  	this.spr = new imageStrip("neckstrip2", 121, 377, 15); //define sprite
  	this.spr.row(85, 99, 2, false); //walking animation
  	this.spr.row(85, 120, 2, true); //jumping animation
  	this.spr.row(120, 59, 2, false); //crouching animation
  	this.spr.row(85, 98, 2, false); //standing still
  	this.spr.setImage(0, 0);
  	this.weapon = new weapon("sword", 64, 107, "sword");
  	this.weaponX = 22;
  	this.weaponY = -21;
	this.fallSpeed = 9;
	this.jumpAdd=0;
	this.jumpMax=10;
  	
	this.performAttack = function(){
		//apply damage based on weapon
		this.weapon.activeFrames = 25;
		this.weapon.firing = true;
		if(this.xScale == -1) this.weapon.fire(this.x-this.weapon.range*tileSize+this.bb.width, this.y);
		else this.weapon.fire(this.x, this.y);
		this.weapon.attack_cooldown = this.weapon.attack_delay;
	};
	
  	this.update = function() {
		if(this.weapon.firing){
			if(this.xScale == -1) this.weapon.update(this.x-this.weapon.range*tileSize+this.bb.width, this.y);
			else this.weapon.update(this.x, this.y);
		}
		if(this.hp < 1){
			setGameOver("lose");
		}
		if(singCooldown>0)
		{
			singCooldown-=.01;
			if(singCooldown>this.hp*(128/this.hpMax))
				singCooldown=this.hp*(128/this.hpMax);
			if(singCooldown<0)
				singCooldown=0;
		}
  		if (this.dmgTick > 0) this.dmgTick -= 1;
		if (this.weapon.attack_cooldown > 0) this.weapon.attack_cooldown -= 1;
		//Attack now takes mouse1
  		if ((this.weapon.attack_cooldown < 1) && input.down) this.performAttack();
  			//else this.weapon.reset_animation();
  		
  		//check if the player is in water
  		if (this.y+this.bb.height/2 > waterLevel) {
  			if (!this.swimming) {
  				this.swimming = true;
  				this.bDir = false;
  			}
  		}else {
  			if (this.swimming) {
	  			this.swimming = false;
	  			if (input[keys.up]) this.vspeed = -7;
	  		}
  		}
  		if (this.swimming) this.standing = false;
  		
  		//check if the player's head is underwater
	  	if (this.y+8 >= waterLevel) {
	  		this.breath -= breathLoss;
	  		if (this.breath < 0) this.breath = 0;
	  		if (this.breath == 0) this.takeDamage(1);
	  	}else {
	  		this.breath += 0.2;
	  		if (this.breath > this.breathMax) this.breath = this.breathMax;
	  		
	  		//bob up and down a bit for effect
	  		if (this.swimming) {
	  			if (this.y+40 > waterLevel && !this.bDir) {
	  				this.y -= 0.05;
	  			}else {
	  				this.bDir = true;
		  			if (this.y+32 < waterLevel && this.bDir) {
		  				this.y += 0.05;
		  			}else this.bDir = false;
	  			}
	  		}
	  	}
  		
  		//player moves at different speed if walking, swimming or jumping
  		if (this.standing) {
  			this.speedCap = 6;
  			this.acceleration = 1.0; //was 3.2
  			this.friction = .3;
  		}else if (this.swimming) {
  			this.speedCap = swimMaxSpeed;
  			this.acceleration = swimAcceleration;
  			this.friction = 0.3;
  		}else {
  			this.acceleration = 0.8;//1.2;
  			this.friction = 0.2;
  		}
  		
  		//move according to user input
		/*if (input[keys.up]) {
			if (this.standing||(this.swimming && this.y>waterLevel+48&&this.y<waterLevel+52))
			{
				this.y=waterLevel-this.bb.height/2;
				this.swimming=false;
				this.vspeed = -15;
			}else //jump
			if (this.swimming && this.vspeed > -this.speedCap) this.vspeed -= this.acceleration; //swim up
		}*/
		
		if(input[keys.sing] && singCooldown==0)
		{
			this.vspeed=-50;
			singCooldown=this.hp;//-this.hp*(128/this.hpMax);
		}
		
		if (input[keys.up]||input[keys.space]) {
			if (this.standing) this.vspeed = -15; else //jump
			if (this.swimming)
			{
				if((this.y+this.bb.height/2<waterLevel+16) && (true))
				{this.vspeed=-15; this.swimming=0; console.log("jumped out of water"); }//this.y=waterLevel-this.bb.height/2+8;} //jump out of water
				else if (this.vspeed > -this.speedCap)
					this.vspeed -= this.acceleration; //swim up
			}
		}
		else if(!this.standing && !this.swimming && this.vspeed<0){
			this.vspeed+=1;//Math.ceil(this.vspeed/2);
		}
		
		if (input[keys.left] && this.hspeed > -this.speedCap) {this.hspeed -= this.acceleration; this.xScale = -1;} //move left
		if (input[keys.right] && this.hspeed < this.speedCap) {this.hspeed += this.acceleration; this.xScale = 1;} //move right
		
		if (input[keys.down] && this.swimming && this.vspeed < this.speedCap) this.vspeed += this.acceleration; //swim down
		
		if (/*!this.standing &&*/ !this.swimming && this.vspeed < this.fallSpeed) this.vspeed += gravity; //fall
		
		/*if (this.swimming) applyFriction(this, 4, 4, this.friction, this.friction, false); //friction
			else applyFriction(this, 6, 14, this.friction, 0, true);*/
		
		//apply friction
		if (this.swimming) {
			if (this.vspeed > 0) this.vspeed -= this.friction;
				else if (this.vspeed < 0) this.vspeed += this.friction;
			if (Math.abs(this.vspeed) < this.friction) this.vspeed = 0;
		}
		if (this.hspeed > 0) this.hspeed -= this.friction;
			else if (this.hspeed < 0) this.hspeed += this.friction;
		if (Math.abs(this.hspeed) < this.friction) this.hspeed = 0;
		
		//manage animations
		this.spr.update();
		if (this.standing) {
			if (this.hspeed != 0) this.spr.setImage(this.spr.index, 0);
				else this.spr.setImage(0, 3);
		}else if (this.swimming) {
			//insert swimming sprites
		}else {
			if (this.vspeed < 0) this.spr.setImage(0, 1);
			if (this.vspeed > gravity) this.spr.setImage(1, 1);
		}
			
		updateMotion(this);
		this.handleCollision();
  	};
  	
  	this.handleCollision = function() {
		this.bb.update(this.x, this.y);
		this.standing = false;
		//Check if player is touching the exit
		if(collisionCircleRect(exit.x, exit.y, 1, Math.floor(this.x), Math.floor(this.y), this.bb.width, this.bb.height)){
			if(roomIndex == roomList.length){
				//display win screen
				setGameOver("win");
			}
			else swapRoom();
		}
  		for (var i in obstaclesOnscreen) {
  			var other = obstaclesOnscreen[i].bb;
  			var dir = this.bb.checkCollision(other);
  			if (dir != null) { //found a collision
  				if (dir == "bottom" && this.vspeed >= 0) { //landed on an object
  					this.y = other.y-this.bb.height; //stand on it
  					this.standing = true;
  					this.vspeed = 0;
  				}else
  				if (dir == "top" && this.vspeed < 0) { //bumped into an object above
  					this.y = other.y+other.height; //adjust y
  					this.vspeed = 0;
  				}else
  				if (dir == "right") { //collided on the right
  					this.x = other.x-this.bb.width; //adjust x
  					this.hspeed = 0;
  				}else
  				if (dir == "left") { //collided on the left
  					this.x = other.x+other.width; //adjust x
  					this.hspeed = 0;
  				}
  			}
  		}
 		this.bb.update(this.x, this.y);
		for (var i in enemiesOnscreen) {
			var other = enemiesOnscreen[i].bb;
			var dir = this.bb.checkCollision(other);
  			if (dir != null) { //found a collision
				console.log("Collision with enemy detected!");
				this.takeDamage(enemiesOnscreen[i].contactDamage);
			}
		}
  	};
  	
  	this.takeDamage = function(amt) {
  		if (this.dmgTick == 0) {
			shake=amt*4;
			console.log(amt);
  			this.hp -= amt;
  			if (this.hp < 0) this.hp = 0;
  			this.dmgTick = this.dmgTickMax;
  		}
  	};
  	
  	this.draw = function() {
 	  	/*context.fillStyle = 'blue'; //draw collision box for debugging
	  	context.fillRect(this.x, this.y, this.bb.width, this.bb.height);*/
  		this.spr.draw(this.x-10-camera.x, this.y-camera.y, this.xScale);
  		if (this.xScale == 1) this.weapon.draw(this.x-camera.x+this.weaponX*this.xScale, this.y-camera.y-21, this.xScale);
  			else this.weapon.draw(this.x-camera.x+this.weapon.spr.curr.width*this.xScale, this.y-camera.y-21, this.xScale);
  	};
}

function enemy(x, y, type) {
	this.x = x; //mostly self explanitory variables
  	this.moveSpeed = 2.5;
  	this.hspeed = this.moveSpeed;
	this.xScale = 1;
  	this.xScale = 1;
  	this.dmgTick = 0; //how long until can be damaged again
  	this.dmgTickMax = 30;
  	this.baseHeight = 98;
    this.type = type;
	this.invulnerable=false;
	if(type == "fish"){
		this.spr = new imageStrip("anglerFish", 60, 28, 0);
		this.spr.row(-1, -1);
		this.spr.setImage(0, 0);
		this.bb = new boundingBox(60, 28, 0, 0); //define bounding box
			this.vspeed = -0.5;
		this.hp = this.hpMax = 10;
		this.contactDamage = 2;
	}
	else if(type=="spikePoke"){
		this.spr = new imageStrip("anglerFish", 60, 28, 0);
		this.spr.row(-1, -1, 1);
		this.spr.setImage(0, 0);
		this.bb = new boundingBox(60, 28, 0, 0); //define bounding box
		this.hp = this.hpMax = 1;
		this.invulnerable=true;
		this.contactDamage = 2;
	}
	else{
		this.spr = new imageStrip("EnemyWhite", 528, 104, 15);
		this.bb = new boundingBox(66, 104, 0, 0); //define bounding box
		this.spr.row(528, 104, 8, false);
		console.log(this.spr);
		this.spr.setImage(0, 0);
			this.vspeed = 0;
		this.hp = this.hpMax = 20;
		this.contactDamage = 2;
	}
  		this.y = y+64-this.bb.height;
	//this.spr = new imageStrip("neckstrip2", 121, 377, 15); //define sprite
  	//this.spr.row(85, 99, 2, false); //walking animation
  	//this.spr.setImage(0, 0);
  	this.weapon = new weapon("sword", 64, 107, "sword");
  	this.weaponX = 22;
  	this.weaponY = -21;
	this.jumpAdd=0;
	this.jumpMax=10;
	
	this.takeDamage = function(dmg){
		if(!this.invulnerable)
			this.hp -= dmg;
	}
	
	this.update = function() {
		this.spr.update();
		this.spr.setImage(this.spr.index, 0);
		//Special swimming mechanics for fish:
		if(this.type == "fish"){
			if(this.y < waterLevel) {
				this.vspeed += 0.3;
			}
			else{
				this.vspeed += Math.random() -0.5;
			}
		}
		if(this.hp < 1){
			console.log("An enemy has been slain!");
			this.die();
		}
		updateMotion(this);
		displayedHitBox.x = this.x;
		displayedHitBox.y = this.y;
		this.handleCollision();
	}
	
  	this.handleCollision = function() {
		this.bb.update(this.x, this.y);
		this.standing = false;
		
		var tileY = this.y/tileSize;
		var tileX = this.x/tileSize;
		var collidables = [];
		for (var i = Math.max(Math.floor(tileY)-1, 0); i < Math.min(tileY+1, level.length); i++) {
			for (var j = Math.max(Math.floor(tileX)-1, 0); j < Math.min(tileX+1, level[i].length); j++)
				if (level[i][j] != null) collidables.push(level[i][j]);
		}
		
  		for (var i in collidables) {
  			var other = collidables[i].bb;
  			var dir = this.bb.checkCollision(other);
  			if (dir != null) { //found a collision
  				if (dir == "bottom" && this.vspeed >= 0) { //landed on an object
  					this.y = other.y-this.bb.height; //stand on it
  					this.standing = true;
  					this.vspeed = 0;
					if ((this.hspeed < 0 && other.x >= this.x) || (this.hspeed > 0 && other.x+other.width <= this.x+this.bb.width))
						this.reverse();
  				}else
  				/*if (dir == "top" && this.vspeed < 0) { //bumped into an object above
  					this.y = other.y+other.height; //adjust y
  					this.vspeed = 0;
  				}else*/
  				if (dir == "right") { //collided on the right
  					this.x = other.x-this.bb.width; //adjust x
					if (this.hspeed > 0) this.reverse();
  				}else
  				if (dir == "left") { //collided on the left
  					this.x = other.x+other.width; //adjust x
					if (this.hspeed < 0) this.reverse();
  				}
				if (dir == "top") { //collided on the top, usually for fish
					this.y = other.y+other.height;
					this.vspeed *= -1; //Bounce downward
				}
  			}
  		}
 		this.bb.update(this.x, this.y);
  	};
	
	this.reverse = function() {
		if (this.hspeed > 0) {
  			this.hspeed = -this.moveSpeed;
			this.xScale = -1;			
		}else
		if (this.hspeed < 0) {
  			this.hspeed = this.moveSpeed;
			this.xScale = 1;			
		}
	}

  	this.draw = function() {
 	  	/*context.fillStyle = 'green'; //draw collision box for debugging
	  	context.fillRect(this.x-camera.x, this.y-camera.y, this.bb.width, this.bb.height);*/
  		//this.spr.drawScaled(this.x/*+46*/-camera.x, this.y-camera.y, this.xScale);
		this.spr.draw(this.x-10-camera.x, this.y-camera.y, this.xScale);
  		//if (this.xScale == 1) this.weapon.draw(this.x-camera.x+this.weaponX*this.xScale, this.y-camera.y-21, this.xScale);
  			//else this.weapon.draw(this.x-camera.x+this.weapon.spr.curr.width*this.xScale, this.y-camera.y-21, this.xScale);
  	};	
	
	this.die = function(){
		var index = enemies.indexOf(this);
		enemies.splice(index, 1);
		var index = enemiesOnscreen.indexOf(this);
		enemiesOnscreen.splice(index, 1);
	}
}

function levelObject(x, y, type){
	this.x=x;
	this.y=y;
	this.type=type;
	
	switch(type){
		case "waterSwitch":
			this.spr = new sprite("anglerFish", 60, 28, 0, 0);
			this.bb = new boundingBox(60, 28, 0, 0); //define bounding box
			this.vspeed = -0.5;
			break;
		case "spikes":
			this.y+=64;
			this.spr = new sprite("blockTexture", 64, 64, 0, 0);
			this.bb = new boundingBox(68, 64, 0, 0);
			this.poke= new enemy(x,y,"spikePoke");
			enemies.push(this.poke);
			if(Math.random()<.5){
				this.type="spikes1";//activate periodically
				this.timer=Math.round(Math.random()*120);
			}
			else{
				this.type="spikes2";//activate when player near
				this.timer=0;
			}
			this.state=0; //0=still, 1=rising, 2=falling, 4=up
			break;
		default: break;
	}
	this.bb.update(x, y);
	
	this.activate = function(){
		if(this.type=="waterSwitch"){
			this.xScale = -1;
			waterTarget = this.y+40;
		}
		else{//some kind of spikes
			this.activated=true;
		}
	}
	
	this.near = function(){//check if player is near
		if(Math.abs(this.x-player.x)<150&&Math.abs(this.y-player.y)<150)
			return true;
		else
			return false;
	}
	
	this.update = function(){//only called on spikes!
		switch(this.state)
		{
			case 0:
				if(this.timer==0){
					if(this.type=="spikes1"||(this.type=="spikes2"&&this.near()))
					{
						console.log("spikes at "+this.x+","+this.y+" activated");
						this.state=1;
						this.timer=4;
					}
				}
				else{
					this.timer--;
				}
				break;
			case 1://rising
				this.timer--;
				this.y-=16;
				if(this.timer==0){
					this.timer=20;
					this.state=4;
				}
				break;
			case 4:
				this.timer--;
				if(this.timer==0){
					this.timer=16;
					this.state=2;
				}
				break;
			case 2:
				this.timer--;
				this.y+=4;
				if(this.timer==0){
					this.timer=120;
					this.state=0;
				}
				break;
			
		}
		this.poke.x=this.x;
		this.poke.y=this.y;
	}
	
	this.draw = function() {
 	  	/*context.fillStyle = 'green'; //draw collision box for debugging
	  	context.fillRect(this.x-camera.x, this.y-camera.y, this.bb.width, this.bb.height);*/
  		this.spr.drawScaled(this.x/*+46*/-camera.x, this.y-camera.y, this.xScale);
  		//if (this.xScale == 1) this.weapon.draw(this.x-camera.x+this.weaponX*this.xScale, this.y-camera.y-21, this.xScale);
  			//else this.weapon.draw(this.x-camera.x+this.weapon.spr.curr.width*this.xScale, this.y-camera.y-21, this.xScale);
  	};	
}
function spawnPoint() {
	this.x = 0;
	this.y = 0;
}

var exit = {
	x: 9999,
	y: 9999,
	width: 32,
	height: 32,
	spr: exitImg
}

function decodeLevel(str) {
	enemies = [];
	obstacles = [];
	levelObjects = [];
	waterTarget = -1;
	var lev = str.split("/");
	for (var i in lev) {
		lev[i] = lev[i].split(",");
		for (var j in lev[i])
			lev[i][j] = createObject(j*tileSize, i*tileSize, lev[i][j]);
	}
	for (var i in obstacles)
		//obstacles[i].setImage(); //FIX THIS!
	return lev;
}

function createObject(x, y, type) {
	switch (type) {
		case '-':
			return null;
		break;
		case 'C':
			spawnPoint.x = x;
			spawnPoint.y = y;
			return null;
			break;
		case 'E':
			exit.x = x;
			exit.y = y;
			console.log("Exit: " + exit.x + " " + exit.y);
			return null;
			break;
		case 'M':
			enemies.push(new enemy(x, y, "ghost"));
			return null;
			break;
		case 'L':
			var n = new levelObject(x, y, "waterSwitch");
			levelObjects.push(n);
			return null;
		case 'S':
			if(Math.random()<.5){
				var n = new levelObject(x,y,"spikes");
				levelObjects.push(n);
			}
			return null;
		default:
			var n = new obstacle(x, y, tileSize, tileSize);
			obstacles.push(n);
			return n;
		break;
	}
}

function swapRoom(){
	console.log("New roomIndex: " + roomIndex + " RoomList.length: " + roomList.length);
	if(roomIndex == roomList.length){
		return;
	}
	level = decodeLevel(roomList[roomIndex]);
	if (roomIndex > 0 && floodRate < 0.8) {
		floodRate += floodRateIncrease;
		floodRateIncrease *= 0.9;
	}
	levelWidth = level[0].length*tileSize;
	levelHeight = level.length*tileSize;
	console.log(level[0].length);
	console.log(level.length);
	if(roomIndex < 2){
		waterLevel = levelHeight - 180;
	}
	else {
		waterLevel += levelHeight;
	}
	if(waterLevel>levelHeight+waterMin)
		waterLevel=levelHeight+waterMin;
	movePlayer(spawnPoint.x, spawnPoint.y);
	camera.reset();
	roomIndex++;
	}


function movePlayer(x, y){
	console.log("Moving player to " + x + ", " + y);
	player.x = Math.floor(x);
	player.y = Math.floor(y)+64-player.bb.height;
	player.bb.update(player.x, player.y);
}

function updateEnemySpawns(){
	//Limit number of enemies allowed alive at once
	var enemyCap = Math.max(10, (levelHeight/tileSize + levelWidth/tileSize)/2);
	if(enemies.length >= enemyCap) {
		return;
	}
	var randomNumber = Math.floor(Math.random()*1000 + +waterLevel);
	if(danger*(1+2*floodRate) >= randomNumber){
		spawnFish();
		danger = 0;
	}

	function Xypair(x, y){
			this.x = x;
			this.y = y;
	}
	
	function spawnFish(){
		//console.log("Spawning fish!");
		if(waterLevel > levelHeight){
			console.log("No water: fish spawn attempt was denied.");
			return;
		}
		var possibleTiles = [];
		//Add all areas under water, then remove ones occupied by obstacles
		for (var i = levelHeight-tileSize; i >= waterLevel; i-=tileSize){
			for (var j = 0; j < levelWidth; j+= tileSize){	
			    var newPoint = new Xypair(j, i);
				possibleTiles.push(newPoint);
			}
		}
		//console.log("possibleTiles.length before removal: ",possibleTiles.length);
		for (var i = 0; i < obstacles.length; i++){
			var tile = obstacles[i];
			for(var index = 0; index < possibleTiles.length; index++){
				//If tile contains an obstacle, remove its spot from possibleTiles
				if(tile.x == possibleTiles[index].x && tile.y == possibleTiles[index].y){
					//console.log("Tile coords: ",tile.x, tile.y);
					possibleTiles.splice(index, 1);
				}
				//else console.log(tile.x,possibleTiles[index].x,tile.y,possibleTiles[index].y );
			}			
		}
		//console.log("possibleTiles.length after removal: ",possibleTiles.length);
		if(possibleTiles.length < 1){
			return;
		}
		var randomTile = Math.ceil(Math.random()*possibleTiles.length-1);
		console.log("Randomtile: ",randomTile);
		console.log("Fish spawning at tile ",(possibleTiles[randomTile].x)/tileSize, (possibleTiles[randomTile].y)/tileSize);
		enemies.push(new enemy(possibleTiles[randomTile].x, possibleTiles[randomTile].y, "fish"));
		//Limit number of fish to water tiles
		enemyCap = Math.min(10, possibleTiles.length);
	}
}

function setGameOver(state){
	gameOver = true;
	if(state == "win"){
		displayWinScreen = true;
	}
	if(state == "lose"){
		windows.push(menuLose);
	}
}

function gameWindow() {
	player = new playerObject();
	player.x = 64;
	player.y = canvas.height/2;
	camera = new cameraObject(0, 0, player, 50, 100);
	roomIndex = 0;
	floodRate = 0;
	swapRoom();
	camera.reset = function() {
		obstaclesOnscreen = [];
		var tileY = this.y/tileSize;
		var tileX = this.x/tileSize;
		for (var i = Math.floor(tileY); i < Math.min(tileY+tilesV, level.length); i++) {
			for (var j = Math.floor(tileX); j < Math.min(tileX+tilesH, level[i].length); j++)
				if (level[i][j] != null) obstaclesOnscreen.push(level[i][j]);
		}
		// I see enemy updating has moved, I wonder if this wants to go down there too?
		levelObjectsOnscreen = [];
		for (var i in levelObjects){
			var lo = levelObjects[i];
			if (lo.x+lo.bb.width > camera.x && lo.x < camera.x+canvas.width && lo.y+lo.bb.height > camera.y && lo.y < camera.y+canvas.height){
				levelObjectsOnscreen.push(lo);
			}
		}
	};
	camera.reset();
				
	this.update = function() {
		if (input[keys.esc]) {
			windows.push(menuPause);
			return;
		}
		enemiesOnscreen = [];
		for (var i in enemies) {
			var e = enemies[i];
			if (e.x+e.bb.width > camera.x && e.x < camera.x+canvas.width && e.y+e.bb.height > camera.y && e.y < camera.y+canvas.height){
				enemiesOnscreen.push(e);
			}
		}
		for (var i in enemies)
			enemies[i].update();
		for (var i in levelObjects)
			if(levelObjects[i].type!="waterSwitch") levelObjects[i].update(); //update spikes
		player.update();
		camera.update();
		time++;
		danger++;
		updateWater();
		updateEnemySpawns();
	};
	
	this.draw = function() {
		context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
		for (var i in obstaclesOnscreen)
			obstaclesOnscreen[i].draw();

		for (var i in levelObjectsOnscreen)
			levelObjectsOnscreen[i].draw();
		
		for (var i in enemiesOnscreen)
			enemiesOnscreen[i].draw();
		
		//draw exit portal, then player
		exit.spr.draw(exit.x-10, exit.y-20, camera.x, camera.y);
		//displayedHitBox.draw();
		player.draw();
		
		context.globalAlpha = 0.55;
	  	context.fillStyle = waterColor;
	  	var dy = waterLevel-camera.y;
	  	if (dy < 0) dy = 0;
	  	context.fillRect(0, dy, canvas.width, canvas.height-dy);
	  	context.globalAlpha = 1;
	  	

	context.fillStyle = 'white';
	context.fillRect(7+singCooldown*(128/10),5,130-singCooldown*(128/10)-(128-player.hp*(128/player.hpMax)), 18);
   	context.fillStyle = 'red';
   	context.fillRect(8, 6, player.hp*(128/player.hpMax), 16); //draw player's hp bar
   	context.textAlign = "center";
   	context.font = "14px Arial";
   	var txt = Math.floor(player.hp) + "/" + player.hpMax; //draw player's hp values
	//for debugging, displays weapon firetime and current cooldown in health bar
	//var txt = Math.floor(player.weapon.attack_cooldown) + "/" + player.weapon.attack_delay;
   	context.fillStyle = 'black';
   	context.fillText(txt, 72, 19);
   	
   	context.fillStyle = 'blue';
   	context.fillRect(8, 28, player.breath*(128/player.breathMax), 16); //draw player's breath bar
	};
}

var menuMain = new menuWindow("titleScreen", true); //main menu
var buttonPlay = new button("playButton", 126, 41); //play button
buttonPlay.click = function() {
	windows.push(new gameWindow());
}
menuMain.addButton(buttonPlay, 66, 243);

var menuPause = new menuWindow("pauseScreen", true);
menuPause.addButton(new backButton("playButton", 126, 41), 66, 243);
//menuPause.bg = getImg("menu_losed_clean", canvas.width, canvas.height);

var menuLose = new menuWindow("loseScreen", true);
var buttonMain = new button("mainMenuButton", 126, 41); //return to main menu button
buttonMain.click = function() {
	windows.pop();
	windows.pop();
}
menuLose.addButton(buttonMain, 66, 243);

windows.push(menuMain);

function updateWater(){
	waterLevel -= floodRate;
	if(waterTarget>0 && waterLevel>waterTarget){
		var i = 0;
		while (i < (waterLevel-waterTarget)){
			i+=15;
			waterLevel-=1;
		}
		waterLevel-=2;
	}
}

function update() {
	updateWindows();
}

function draw() {
		drawWindows();
	if(displayWinScreen){ //remove these at some point
		context.fillStyle = 'green';
		context.font = "20px Arial";
		context.fillText("Congratulations! You completed the game in "+Math.round(time*2/300)+" seconds, with "+player.hp+ " health remaining.", 380, 300);
	}
	if(displayLoseScreen){
		context.fillStyle = 'red';
		context.font = "20px Arial";
		context.fillText("GAME OVER!", 380, 300);
	}
}

function game_loop() {
	update();
  	draw();
}

setInterval(game_loop, 15);
