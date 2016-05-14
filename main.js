var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//var domain = "http://files.whatevercorp.net/running/"; //for online version
var domain = "images/"; //for local version
var gravity = 0.4;
var tileSize = 64;
var tilesH = Math.ceil(canvas.width/tileSize);
var tilesV = Math.ceil(canvas.height/tileSize);
var waterLevel, levelWidth, levelHeight, level, camera, player;

//user input
var keys = {};
keys.up = 'W'.charCodeAt(0);
keys.left = 'A'.charCodeAt(0);
keys.down = 'S'.charCodeAt(0);
keys.right = 'D'.charCodeAt(0);
keys.attack = 32;
keys.esc = 27;

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

function weapon(spr, width, height) {
	this.spr = new imageStrip(spr, width, height);
	this.spr.row(20, 72, 1);
	this.spr.row(0, height-72, 1, true);
	this.spr.setImage(0, 0);
	
	this.draw = function(x, y, xScale) {
		this.spr.draw(x, y, xScale);
	};
}

//obstacles.push(new obstacle(0, canvas.height-200, 400, 64));

function playerObject() {
	this.x = canvas.width/2; //mostly self explanitory variables
  	this.y = canvas.height/2/*-98*/;
  	this.moveSpeed = 4;
  	this.vspeed = 2;
  	this.hspeed = 0;
  	this.xScale = 1;
  	this.hp = this.hpMax = 10;
  	this.breath = this.breathMax = 10;
  	this.dmgTick = 0; //how long until player can be damaged again
  	this.dmgTickMax = 15;
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
  	this.weapon = new weapon("sword", 64, 107);
  	this.weaponX = 22;
  	this.weaponY = -21;
  	
  	this.update = function() {
  		if (this.dmgTick > 0) this.dmgTick -= 1;
  		if (input[keys.attack]) this.weapon.spr.setImage(0, 1);
  			else this.weapon.spr.setImage(0, 0);
  		
  		//check if the player is in water
  		if (this.y+this.bb.height/2 > waterLevel) {
  			if (!this.swimming) {
  				this.swimming = true;
  				this.bDir = false;
  			}
  		}else {
  			if (this.swimming) {
	  			this.swimming = false;
	  			if (input[keys.up]) this.vspeed = -10;
	  		}
  		}
  		
  		//check if the player's head is underwater
	  	if (this.y+8 >= waterLevel) {
	  		this.breath -= 0.01;
	  		if (this.breath < 0) this.breath = 0;
	  		if (this.breath == 0) this.takeDamage(0.5);
	  	}else {
	  		this.breath += 0.1;
	  		if (this.breath > this.breathMax) this.breath = this.breathMax;
	  		
	  		//bob up and down a bit for effect
	  		if (this.swimming) {
	  			if (this.y+40 > waterLevel && !this.bDir) {
	  				this.y -= 0.1;
	  			}else {
	  				this.bDir = true;
		  			if (this.y+32 < waterLevel && this.bDir) {
		  				this.y += 0.1;
		  			}else this.bDir = false;
	  			}
	  		}
	  	}
  		
  		//player moves at different speed if walking, swimming or jumping
  		if (this.standing) {
  			this.speedCap = 6;
  			this.acceleration = 1.2;
  			this.friction = 0.5;
  		}else if (this.swimming) {
  			this.speedCap = 3;
  			this.acceleration = 0.8;
  			this.friction = 0.2;
  		}else {
  			this.acceleration = 0.2;
  			this.friction = 0.05;
  		}
  		
  		//move according to user input
		if (input[keys.up]) {
			if (this.standing) this.vspeed = -10; else //jump
			if (this.swimming && this.vspeed > -this.speedCap) this.vspeed -= this.acceleration; //swim up
		}
		
		if (input[keys.left] && this.hspeed > -this.speedCap) {this.hspeed -= this.acceleration; this.xScale = -1;} //move left
		if (input[keys.right] && this.hspeed < this.speedCap) {this.hspeed += this.acceleration; this.xScale = 1;} //move right
		
		if (input[keys.down] && this.swimming && this.vspeed < this.speedCap) this.vspeed += this.acceleration; //swim down
		
		if (/*!this.standing &&*/ !this.swimming && this.vspeed < 10) this.vspeed += gravity; //fall
		
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

function decodeLevel(str) {
	var lev = str.split("/");
	var dy = 0;
	for (var i in lev) {
		lev[i] = lev[i].split(",");
		for (var j in lev[i])
			lev[i][j] = createObject(j*tileSize, i*tileSize, lev[i][j]);
	}
	return lev;
}

function createObject(x, y, type) {
	if (type == 0) return null;
	var n = new obstacle(x, y, tileSize, tileSize);
	obstacles.push(n);
	return n;
}

function gameWindow() {
	waterLevel = canvas.height-180;
	levelWidth = 5000;
	levelHeight = 2000;
	level = decodeLevel("0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0/1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0/0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0/");
	/*levelWidth = level[0].length;
	levelHeight = level.length;*/
	player = new playerObject();
	player.x = 64;
	player.y = canvas.height/2;
	camera = new cameraObject(0, 0, player, 128, 128);
	camera.reset = function() {
		obstaclesOnscreen = [];
		for (var i = Math.floor(this.y/tileSize); i < tilesV; i++) {
			for (var j = Math.floor(this.x/tileSize); j < tilesH; j++)
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

function update() {
	updateWindows();
}

function draw() {
	drawWindows();
}

function game_loop() {
	update();
  	draw();
}

setInterval(game_loop, 30);