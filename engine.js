//store loaded images
images = {};

//load an image, or return the image if already loaded
function getImg(src, width, height, jpg) {
	var name, img;
	if (jpg == true) name = domain + src + ".jpg";
		else name = domain + src + ".png";
	if (name in images) img = images[name];
		else {	
			img = new Image();
			img.src = name;
			img.width = width;
			img.height = height;
			images[name] = img;
	}
	return img;
}

//non-animated sprite
function sprite(src, width, height, offsetX, offsetY) {
	this.img = getImg(src, width, height);
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.angle = 0;
	this.color = "white";
	this.width = this.img.width;
	this.height = this.img.height;
	
	this.draw = function(x, y, offX, offY) {
		this.offsetX = offX;
		this.offsetY = offY
		context.drawImage(this.img, x-this.offsetX, y-this.offsetY, this.width, this.height);
		//console.log(x+" "+y+" " "offsets: "+offsetX+" "+offestY);
	};
	
	this.drawScaled = function(x, y, xScale) {
  		if (xScale == undefined) xScale = 1;
  		context.save();
  		if (xScale == -1) {context.translate(x+this.width, 0); x = 0; context.scale(-1, 1);}
  		context.drawImage(this.img, x-this.offsetX, y-this.offsetY, this.width, this.height);
  		context.restore();
  	};
}

//keeps track of different animations in the same image
function imageStripRow(width, height, number) {
  	this.width = width/number;
  	this.height = height;
	this.number = number;
	this.offsetY = 0;
}

//used for animating
function imageStrip(src, width, height, delay) {
	this.img = getImg(src, width, height);
  	this.index = 0;
  	this.delay = 0; //ticks between image changes in an animation
  	this.delayMax = delay;
  	if (this.delayMax == undefined) this.delayMax = 1;
  	this.rows = [];
  
  	//define an imageStripRow
  	this.row = function(width, height, number, fix) {
  		var w, h;
  		if (fix == undefined) fix = false;
  		if (width == 0) w = this.img.width; //default to the image width if you put 0
  			else w = width;
  		if (height == 0) h = this.img.height; //default to the image height if you put 0
  			else h = height;
  		var n = new imageStripRow(w, h, number);
    	var y = 0;
    	for (var i in this.rows)
    		y += this.rows[i].height;
    	n.y = y;
    	
    	//give it an offset so shorter images in the same strip can be at the same y value
    	if (this.rows.length > 0 && fix && h != this.rows[0].height)
    		n.offsetY = this.rows[0].height-h;
    	this.rows.push(n);
  	};
  
  	//set the active image in the strip
  	this.setImage = function(x, y) {
  		this.curr = this.rows[y];
  		this.x = x*this.curr.width;
  	};
  
  	//function for looping animations
  	this.update = function() {
  		this.delay += 1;
    	if (this.delay == this.delayMax) {
    		this.delay = 0;
      	this.index += 1;
      	if (this.index == this.rows[0].number) this.index = 0;
    	}
  	};
  
  	//draw the sprite
  	this.draw = function(x, y, xScale) {
  		if (xScale == undefined) xScale = 1;
  		context.save();
  		if (xScale == -1) {context.translate(x, 0); x = 0; context.scale(-1, 1);}
  		context.drawImage(this.img, this.x, this.curr.y, this.curr.width, this.curr.height, x, y+this.curr.offsetY, xScale*this.curr.width, this.curr.height);
  		context.restore();
  	};
}

//viewport
levelWdith = 1280;
levelHeight = 720;

function cameraObject(x, y, following, snapX, snapY) {
	this.x = x;
	this.y = y;
	this.following = following;
	this.snapX = snapX;
	this.snapY = snapY;
	
	//have the camera follow an object
	this.update = function() {
		var oldx = this.x;
		var oldy = this.y;
		
		//if ((this.following.x < this.x+this.snapX) || (this.following.x > this.x+canvas.width-this.snapX))
			this.x = (this.x+this.following.x)/2-200;
		//if ((this.following.y < this.y+this.snapY) || (this.following.y+this.following.bb.height > this.y+canvas.height-this.snapY))
			this.y = (this.y+this.following.y)/2-150;
		/*if (this.following.x < this.x+this.snapX) 
			this.x = this.following.x-this.snapX;
		if (this.following.x > this.x+canvas.width-this.snapX) 
			this.x = this.following.x-canvas.width+this.snapX;
		if (this.following.y < this.y+this.snapY) 
			this.y = this.following.y-this.snapY;
		if (this.following.y+this.following.bb.height > this.y+canvas.height-this.snapY) 
			this.y = this.following.y+this.following.bb.height-canvas.height+this.snapY;*/
		
		if (this.x < 0) this.x = 0;
		if (this.x > levelWidth-canvas.width) this.x = levelWidth-canvas.width;
		if (this.y < 0) this.y = 0;
		if (this.y > levelHeight-canvas.height) this.y = levelHeight-canvas.height;
		
		if(shake>0){
			this.x+=Math.random()*shake-Math.random()*shake*2;
			this.y+=Math.random()*shake-Math.random()*shake*2;
			shake-=1;
		}
		
		//otherwise it makes weird divisions between obstacles
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		if (this.x != oldx || this.y != oldy) this.reset();
	};
	
	this.reset = function() {
		
	};
}

//collision box
function boundingBox(width, height, xOff, yOff) {
	this.width = width;
	this.height = height;
	this.xoff = xOff;
	this.yoff = yOff;
	
	this.checkCollision = function(other) {
	  	if (other.height == 0 || other.width == 0) return null; //can't check bb if has no size
	   var distX = (this.x + (this.width/2)) - (other.x + (other.width/2)); //x distance between object's centers
	   var distY = (this.y + (this.height/2)) - (other.y + (other.height/2)); //y distance
	   var lenX = (this.width/2) + (other.width/2); //sum of half the widths
	   var lenY = (this.height/2) + (other.height/2); //sum of half the heights
	   var dir = null; //direction of collision, null means no collision
	 		
	   //see this is inside of other
	   if (Math.abs(distX) < lenX && Math.abs(distY) < lenY) {
	   var oX = lenX - Math.abs(distX); //how far inside other on x
	   var oY = lenY - Math.abs(distY); //how far inside other on y
	   if (oX >= oY) { //vertical collision
	   	if (distY > 0) { //other object is above this
				dir = "top";
	      } else { //other object is below this
         	dir = "bottom";
	      }
	   } else if (oY > 1) { //horizontal collision
	   	if (distX > 0) { //other object is to the left of this
				dir = "left";
	      } else { //other object is to the right of this
	      	dir = "right";
	      }
	   }
	   }
	   return dir; //return the direction of collision (or null)		
	};
	
	//set x and y to the proper positions
	this.update = function(x, y) {
		this.x = x+this.xoff;
		this.y = y+this.yoff;
	};
}

//move an object
function updateMotion(obj) {
	obj.x += obj.hspeed;
	obj.y += obj.vspeed;
	
	obj.bb.update();
}

//handle an object's speed
/*function applyFriction(obj, hMax, vMax, hFric, vFric, ignoreUp) {
	if (obj.hspeed > 0) obj.hspeed -= hFric; //apply friction
	if (obj.hspeed < 0) obj.hspeed += hFric;
	if (obj.vspeed > 0) obj.vspeed -= vFric;
	if (!ignoreUp && obj.vspeed < 0) obj.vspeed += vFric;
	
	if (Math.abs(obj.hspeed) < hFric) obj.hspeed = 0; //stop if speed is less than friction
	if (Math.abs(obj.vspeed) < vFric) obj.vspeed = 0;

	if (obj.hspeed+obj.hspeedDelta > hMax) obj.hspeedDelta = 0; //slow down if speed > max speed
	if (obj.hspeed+obj.hspeedDelta < -hMax) obj.hspeedDelta = 0;
	if (obj.vspeed+obj.vspeedDelta > vMax) obj.vspeedDelta = 0;
	if (!ignoreUp && obj.vspeed+obj.vspeedDelta < -vMax) obj.vspeedDelta = 0;
	
	obj.hspeed += obj.hspeedDelta;
	obj.vspeed += obj.vspeedDelta;
}*/

//user input manager
var input = {
	x: 0,
	y: 0,
	click: false,
	down: false
};

//look for user input
function watchKey(key) {
	input[key] = false;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener("mousedown", mClick);
document.addEventListener("mousemove", mDrag);
document.addEventListener("mouseup", mRelease);

//store input in the object
function mClick(e) {
	input.click = true;
  	input.down = true;
}

function mDrag(e) {
	input.x = e.pageX-8;
  	input.y = e.pageY-8;
}

function mRelease(e) {
	input.click = false;
	input.down = false;
}

function keyDown(e) {
	if (e.keyCode in input)
  		input[e.keyCode] = true;
}

function keyUp(e) {
	if (e.keyCode in input)
		input[e.keyCode] = false;
}

var windows = []; //window manager

//window object, expects a .jpg for bg unless transparent = true in which case it expects a .png
function menuWindow(bg, transparent) {
  	if (transparent == true) this.transparent = true;
  		else this.transparent = false;
	this.bg = new getImg(bg, canvas.width, canvas.height, !this.transparent);
  	this.buttons = [];
  
  	//put a button on it
  	this.addButton = function(button, x, y) {
  		this.buttons.push(button);
    	button.x = x;
    	button.y = y;
    	button.menu = this;
  	};
  
  	this.updateButtons = function() {
  		for (var i in this.buttons)
    		this.buttons[i].update();  		
  	};  

  	this.update = function() {
		this.updateButtons();
  	};
  	
  	this.drawBg = function() {
  		context.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  	};
  
	this.drawButtons = function() {
  		for (var i in this.buttons)
    		this.buttons[i].draw();
 	};
 	
 	this.draw = function() {
 		this.drawBg();
 		this.drawButtons();
 	};
}

//make a button
function button(src, width, height) {
	this.spr = new imageStrip(src, width, height, 0);
  	this.spr.row(width, height, 2, false);
  	this.spr.setImage(0, 0);
  	this.width = width/2;
  	this.height = height;
  	this.mouseOn = false;
  
  //check the mouse
  this.update = function() {
  		if (input.x >= this.x && input.x <= this.x+this.width && input.y >= this.y && input.y <= this.y+this.height) {
    		this.spr.setImage(1, 0);
    		if (!this.mouseOn) {
    			this.mouseEnter();
    			this.mouseOn = true;
    		}
      	if (input.click) this.click();
    	}else {
    		this.spr.setImage(0, 0);
    		if (this.mouseOn) {
    			this.mouseLeave();
    			this.mouseOn = false;
    		}
    	}
  };
  
  this.draw = function() {
  		this.spr.draw(this.x, this.y);
  };
  
  this.click = function() {
  	
  };
  
  this.mouseEnter = function() {
  	
  };
  
  this.mouseLeave = function() {
  	
  };
}

//goes back one menu
function backButton(src, width, height) {
	button.call(this, src, width, height);
	
	this.click = function() {
		windows.pop();
	};
}

//update the top window
function updateWindows() {
	windows[windows.length-1].update();
	input.click = false;
}

//draw the top window
function drawWindows() {
	canvas.width = canvas.width;
	if (windows[windows.length-1].transparent && windows.length > 1) { //draw the window below it if we want to
		windows[windows.length-2].draw();
	}
	windows[windows.length-1].draw();
}

//returns if a circle is colliding with a rectangle
function collisionCircleRect(x, y, rad, oX, oY, oWidth, oHeight) {
	if (oX > x+rad) return false;
	if (oX+oWidth < x-rad) return false;
	if (oY > y+rad) return false;
	if (oY+oHeight < y-rad) return false;
	return true;
}

//degrees to radians
function rad(deg) {
	return deg*Math.PI/180;
};

//radians to degrees
function deg(rad) {
	return rad/(Math.PI/180);
}

//random integer in range
function randRangeInt(min, max) {
	return Math.floor(min+Math.random()*(max-min+1));
}

//random array element
function randElem(a) {
	return a[randRangeInt(0, a.length-1)];
}

//finds distance
function distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2));
}
