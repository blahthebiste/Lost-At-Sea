	var stage1Music = new Howl({
		urls: ['Sounds/LaS-Stage1.ogg'],
		//loop: true,
		//buffer: true,
		onend: function(){
			if(this.loop) this.play();
		}
	});
	var stage2Music = new Howl({
		urls: ['Sounds/LaS-Stage2.ogg'],
		//loop: true,
		//buffer: true,
		onend: function(){
			if(this.loop) this.play();
		}
	});
	var stage3Music = new Howl({
		urls: ['Sounds/LaS-Stage3.ogg'],
		//loop: true,
		//buffer: true,
		onend: function(){
			if(this.loop) this.play();
		}
	});
	var enemyDmgSound = new Howl({urls: ['Sounds/enemyhit.ogg']});
	var playerDmgSound = new Howl({urls: ['Sounds/playerhit.ogg']});
	var splashSound = new Howl({urls: ['Sounds/splash.ogg']});
	var jumpSound = new Howl({urls: ['Sounds/jump.ogg']});
	var landSound = new Howl({urls: ['Sounds/land.ogg']});
	var swordSound = new Howl({urls: ['Sounds/swing.ogg']});
