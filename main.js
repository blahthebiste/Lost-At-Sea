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

var roomIndex = 0;
//Weapon library, stores weapon data in this format:
//name: [damage, attack_delay (ms), projectile_type (or melee for melee weapons), melee range (in tileSizes)]
var weapon_library = function(name){
	switch (name){
	case "sword": 
		return [ 15, 17, "melee", 1];
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
//keys.testSwapRoom = 32;
keys.esc = 27;

//player stats (affected by items)
var swimAcceleration = 0.9;
var swimMaxSpeed = 5;
var breathLoss = 0.035;

var floodRate = -0.2;

//watch for keys being pressed
for (var i in keys)
	watchKey(keys[i]);

var obstacles = [];
var obstaclesOnscreen = [];

function obstacle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.bb = new boundingBox(width, height, 0, 0);
	this.bb.update(x, y);
	
	this.draw = function() {
	  	context.fillStyle = 'green';
	  	context.fillRect(this.x-camera.x, this.y-camera.y, this.bb.width, this.bb.height);
	};
}

function weapon(spr, width, height, name) {
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
		movePlayer(spawnPoint.x, spawnPoint.y);
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
}

var applyDamage = function(damage, aoe, x, y){
	//tbi
};

var spawn_projectile = function(damage, projectileName, x, y){
	//tbi
};

//obstacles.push(new obstacle(0, canvas.height-200, 400, 64));

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
  	this.dmgTickMax = 30;
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
		this.weapon.fire(this.x, this.y);
		this.weapon.attack_cooldown = this.weapon.attack_delay;		
	};
	
  	this.update = function() {
  		if (this.dmgTick > 0) this.dmgTick -= 1;
		if (this.weapon.attack_cooldown > 0) this.weapon.attack_cooldown -= 1;
		//Attack now takes mouse1
  		if ((this.weapon.attack_cooldown < 1) && input.down) this.performAttack();
  			else this.weapon.reset_animation();
  		
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
	  		if (this.breath == 0) this.takeDamage(0.5);
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
		if (input[keys.up]) {
			if (this.standing) this.vspeed = -15; else //jump
			if (this.swimming && this.vspeed > -this.speedCap)
			{
				if(this.y+this.bb.height/2<waterLevel+8)
				{this.vspeed=-15; this.swimming=0; this.y=waterLevel-this.bb.height/2+8;} //jump out of water
				else
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
		if(collisionCircleRect(exit.x, exit.y, 32, Math.floor(this.x), Math.floor(this.y), this.bb.width, this.bb.height)){
			swapRoom();
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
  	};
  	
  	this.takeDamage = function(amt) {
  		if (this.dmgTick == 0) {
			shake=amt*4;
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

function spawnPoint() {
	this.x = 0;
	this.y = 0;
}

function exit() {
	this.x = 9999;
	this.y = 9999;
	this.width = 32;
	this.height = 32;
}

function decodeLevel(str) {
	var lev = str.split("/");
	for (var i in lev) {
		lev[i] = lev[i].split(",");
		for (var j in lev[i])
			lev[i][j] = createObject(j*tileSize, i*tileSize, lev[i][j]);
	}
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
	floodRate += 0.2;
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

function gameWindow() {
	player = new playerObject();
	player.x = 64;
	player.y = canvas.height/2;
	camera = new cameraObject(0, 0, player, 50, 100);
	swapRoom();
	camera.reset = function() {
		obstaclesOnscreen = [];
		var tileY = this.y/tileSize;
		var tileX = this.x/tileSize;
		for (var i = Math.floor(tileY); i < Math.min(tileY+tilesV, level.length); i++) {
			for (var j = Math.floor(tileX); j < Math.min(tileX+tilesH, level[i].length); j++)
				if (level[i][j] != null) obstaclesOnscreen.push(level[i][j]);
		}
	};
	camera.reset();
				
	this.update = function() {
		if (input[keys.esc]) {
			windows.push(menuPause);
			return;
		}
		
		player.update();
		camera.update();
	};
	
	this.draw = function() {
		for (var i in obstaclesOnscreen)
			obstaclesOnscreen[i].draw();
			
		player.draw();
		
		context.globalAlpha = 0.4;
	  	context.fillStyle = 'blue';
	  	var dy = waterLevel-camera.y;
	  	if (dy < 0) dy = 0;
	  	context.fillRect(0, dy, canvas.width, canvas.height-dy);
	  	context.globalAlpha = 1;
	  	
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

windows.push(new gameWindow());

var menuPause = new menuWindow("menu_losed_clean", true);
menuPause.addButton(new backButton("btn_play_sheet", 252, 41), 66, 243);
//menuPause.bg = getImg("menu_losed_clean", canvas.width, canvas.height);

function updateWater(){
	waterLevel -= floodRate;
}

function update() {
	updateWindows();
	updateWater();
}

function draw() {
	drawWindows();
}

function game_loop() {
	update();
  	draw();
}

setInterval(game_loop, 15);
