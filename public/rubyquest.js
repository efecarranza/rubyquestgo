RubyQuest.rubyquest = function(game) {
	this.hero;
	this.ed;
	this.monster;
	this.cursors;
	this.mainmap;
	this.menuKey;
	this.interactKey;
	this.pauseKey;
	this.dialogue;
	this.currentLine;
};

RubyQuest.rubyquest.prototype = {

	init: function(hero, monster) {

	},

	create: function() {
		this.world.setBounds(0,0,2891,2168);
		this.physics.startSystem(Phaser.Physics.ARCADE);
		mainmap = this.add.sprite(0, 0, 'map');
		monster = this.add.sprite(330, 630, 'monster');

		ed = this.add.sprite(500, 780, 'ed'); // make 166, 2020 after debug
		ed.lines = ["Hello, I can see you are beginning a journey...", "...a journey that will take you to many dark places.",
			"You will need a great power to succeed.", "A power that only could be channeled through....Ruby...",
			"This Ruby was long ago shattered into many pieces.", "Only fragments of it remain, which in common lore are referred to as 'gems.'",
			"In order to unlock the power of the gem you are going to need to speak to it first...", "Let me explain you the basics:" ]

		hero = this.add.sprite(600, 780, 'hero');
		hero.stats = {
		name: "Wynn",
		maxHp: 200,
		hp: 200,
		str: 15,
		def: 8,
		level: 1,
		exp: 0,
		};

		hero.anchor.setTo(0.5, 0.5);
		hero.animations.add('walkup', [0,1,2,3,4,5,6,7,8]);
		hero.animations.add('walkleft', [9,10,11,12,13,14,15,16,17]);
		hero.animations.add('walkdown', [18,19,20,21,22,23,24,25,26]);
		hero.animations.add('walkright', [27,28,29,30,31,32,33,34,35]);

		this.physics.arcade.enable([hero, monster, ed]);

		cursors = this.input.keyboard.createCursorKeys();
		menuKey = this.input.keyboard.addKey(Phaser.Keyboard.M);
		menuKey.onDown.add(this.menu, this);
		interactKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		interactKey.onDown.add(this.interact, this);
		pauseKey = this.input.keyboard.addKey(Phaser.Keyboard.P);
		pauseKey.onDown.add(this.pause, this);

		this.camera.follow(hero, Phaser.Camera.FOLLOW_TOPDOWN);
		monster.body.immovable = true;
		ed.body.immovable = true;
		hero.body.collideWorldBounds = true;

	},

	update: function() {
		this.physics.arcade.collide(hero, monster, this.startFight, null, this);

		this.physics.arcade.collide(hero, ed, this.talk, null, this);

		hero.body.velocity.x = 0;
		hero.body.velocity.y = 0;

		if (cursors.up.isDown) {
			hero.body.velocity.y = -80;
			hero.animations.play('walkup', 10, true);
		} else if (cursors.down.isDown) {
			hero.body.velocity.y = 80;
			hero.animations.play('walkdown', 10, true);
		} else if (cursors.left.isDown) {
			hero.body.velocity.x = -80;
			hero.animations.play('walkleft', 10, true);
		} else if (cursors.right.isDown) {
			hero.body.velocity.x = 80;
			hero.animations.play('walkright', 10, true);
		} else {
			hero.animations.stop(null, true);
		};


	},

	startFight: function() {
		console.log('going to fight');
		this.state.start('Fight', false, false, this.hero, this.monster);
	},

	menu: function() {
		$('#menu').toggle();
		document.getElementById("hpMenu").innerHTML = "HP: " + hero.stats.hp + ' / ' + hero.stats.maxHp;
	},

	interact: function() {
		console.log('interact');
		document.getElementById('input').innerHTML = '<input type="text">';


	},

	talk: function(character) {
		currentLine = 0;
		$('#dialogue').toggle();
		if (this.currentLine > ed.lines.length) {
			$('#dialogue').toggle();
		};
		$('#dialogue').text(ed.lines[this.currentLine]);
		if (interactKey.isDown) {
			this.currentLine++;
		};

	},

	pause: function() {
		console.log('pause');
	},

	render: function() {

	}

};






