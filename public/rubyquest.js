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
};

RubyQuest.rubyquest.prototype = {

	init: function(hero, monster) {
	},

	create: function() {
		this.world.setBounds(0,0,1280,960);
		this.physics.startSystem(Phaser.Physics.ARCADE);
		mainmap = this.add.sprite(0, 0, 'map');
		mainmap.height = 640;
		mainmap.width = 480;
		monster = this.add.sprite(130, 130, 'monster');

		hero = this.add.sprite(100, 100, 'hero');
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
	},

	render: function() {

	}

};






