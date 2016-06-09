	var stageMusic = new Howl({
		urls: ['Sounds/LaS-Stage2.ogg'],
		loop: true,
		buffer: true,
		onend: function(){
			console.log("Restarting loop. Ended at position",this.pos());
		}
	});
	var enemyDmgSound = new Howl({urls: ['Sounds/enemyhit.ogg']});
	var playerDmgSound = new Howl({urls: ['Sounds/playerhit.ogg']});
	var splashSound = new Howl({urls: ['Sounds/splash.ogg']});
	var jumpSound = new Howl({urls: ['Sounds/jump.ogg']});
	var landSound = new Howl({urls: ['Sounds/land.ogg']});
	var swordSound = new Howl({urls: ['Sounds/swing.ogg']});