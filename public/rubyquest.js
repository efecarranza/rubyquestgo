RubyQuest.rubyquest = function(game) {
	this.hero = {
		name: "Wynn",
		maxHp: 200,
		hp: 200,
		str: 15,
		def: 8,
		level: 1,
		exp: 0,
	};
	this.monster;
	this.cursors;
	this.mainmap;
	this.menuKey;
	this.interactKey;
	this.pauseKey;
};

RubyQuest.rubyquest.prototype = {

	init: function(hero, monster) {
	},

	create: function() {
		this.world.setBounds(0,0,2891,2168);
		this.physics.startSystem(Phaser.Physics.ARCADE);
		mainmap = this.add.sprite(0, 0, 'map');
		monster = this.add.sprite(330, 630, 'monster');

		hero = this.add.sprite(600, 780, 'hero');
		// hero.height = 32;
		// hero.width = 32;
		hero.anchor.setTo(0.5, 0.5);
		hero.animations.add('walkup', [0,1,2,3,4,5,6,7,8]);
		hero.animations.add('walkleft', [9,10,11,12,13,14,15,16,17]);
		hero.animations.add('walkdown', [18,19,20,21,22,23,24,25,26]);
		hero.animations.add('walkright', [27,28,29,30,31,32,33,34,35]);

		this.physics.arcade.enable([hero, monster]);

		cursors = this.input.keyboard.createCursorKeys();
		menuKey = this.input.keyboard.addKey(Phaser.Keyboard.M);
		menuKey.onDown.add(this.menu, this);
		interactKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		interactKey.onDown.add(this.interact, this);
		pauseKey = this.input.keyboard.addKey(Phaser.Keyboard.P);
		pauseKey.onDown.add(this.pause, this);

		this.camera.follow(hero, Phaser.Camera.FOLLOW_TOPDOWN);
		monster.body.immovable = true;
		hero.body.collideWorldBounds = true;

	},

	update: function() {
		this.physics.arcade.collide(hero, monster, this.startFight, null, this);
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
		console.log('menu');
		$('#dialogue').toggle();
	},

	interact: function() {
		console.log('interact');


	},

	pause: function() {
		console.log('pause');
	},

	render: function() {

	}

};






