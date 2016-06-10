	var stage1Music = new Howl({
		urls: ['Sounds/LaS-Stage1.ogg'],
		onend: function(){
			console.log("Track 1 ended.");
				console.log("Track ended, loop is true");
				stageMusic.play();
		}
	});
	var stage2Music = new Howl({
		urls: ['Sounds/LaS-Stage2.ogg'],
		onend: function(){
				console.log("Track ended, loop is true");
				stageMusic.play();
		}
	});
	var stage3Music = new Howl({
		urls: ['Sounds/LaS-Stage3.ogg'],
		onend: function(){
				console.log("Track ended, loop is true");
				stageMusic.play();
		}
	});
	var enemyDmgSound = new Howl({urls: ['Sounds/enemyhit.ogg']});
	var playerDmgSound = new Howl({urls: ['Sounds/playerhit.ogg']});
	var splashSound = new Howl({urls: ['Sounds/splash.ogg']});
	var jumpSound = new Howl({urls: ['Sounds/jump.ogg']});
	var landSound = new Howl({urls: ['Sounds/land.ogg']});
	var swordSound = new Howl({urls: ['Sounds/swing.ogg']});
