RubyQuest.Dream = function(game) {
	this.emitter;
	this.ruby;
	this.hero;
	this.cursors;
	this.unlockArrows;
	this.displayedText;
};

RubyQuest.Dream.prototype = {

	create: function() {
		this.world.setBounds(0,0,640,480);
		this.physics.startSystem(Phaser.Physics.ARCADE);

		ruby = this.add.sprite(320, 100, 'ruby');
		ruby.anchor.setTo(0.5, 0.5);

		hero = this.add.sprite(320, 300, 'herobw');
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

		this.physics.arcade.enable([hero, ruby]);

		cursors = this.input.keyboard.createCursorKeys();
		interactKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		interactKey.onDown.add(this.interact, this);

		ruby.body.immovable = true;

		hero.body.collideWorldBounds = true;

		this.txt = ["...huh?...", " What's going on?", " Is this a dream?"];

		this.lblText = this.add.image(100, 100, 'label');
		this.lblText.height = 50;
		this.lblText.width = 100;
		this.txtStyle = { font: "25px Arial", fill: "#fff", align: "center" }
		this.txtBox = this.add.text(100, 100, this.txt[0], this.txtStyle);

		this.lblText2 = this.add.image(400, 150, 'label');
		this.lblText2.height = 50;
		this.lblText2.width = 200;
		this.txtStyle2 = { font: "25px Arial", fill: "#fff", align: "center" }
		this.txtBox2 = this.add.text(400, 150, this.txt[1], this.txtStyle);

		this.lblText3 = this.add.image(300, 400, 'label');
		this.lblText3.height = 50;
		this.lblText3.width = 200;
		this.txtStyle = { font: "25px Arial", fill: "#fff", align: "center" }
		this.txtBox3 = this.add.text(300, 400, this.txt[2], this.txtStyle);

		unlockArrows = false;
		displayedText = false;
	},

	update: function() {
		this.physics.arcade.collide(hero, ruby, null, null, this);

		hero.body.velocity.x = 0;
		hero.body.velocity.y = 0;
		if (unlockArrows) {
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
				}
		};
	},

	interact: function() {
		this.setUpText();

		if(this.physics.arcade.distanceBetween(hero, ruby) < 100){
			this.shatterRuby();
		}

	},

	setUpText: function() {

		if (!this.displayedText) {
			this.time.events.add(1500, this.txtBox.destroy, this.txtBox);
			this.time.events.add(1500, this.lblText.destroy, this.lblText);

			this.time.events.add(2500, this.txtBox2.destroy, this.txtBox2);
			this.time.events.add(2500, this.lblText2.destroy, this.lblText2);

			this.time.events.add(3500, this.txtBox3.destroy, this.txtBox3);
			this.time.events.add(3500, this.lblText3.destroy, this.lblText3);

			this.time.events.add(3600, this.unlockArrows, this);

			displayedText = true;
			// this.setUpText.destroy();
		}
	},

	unlockArrows: function() {
		unlockArrows = true;
	},

	shatterRuby: function() {
		emitter = this.add.emitter(320, 130, 30);
		emitter.makeParticles('rubyshard');
		emitter.minParticleSpeed.setTo(-200, -200);
		emitter.maxParticleSpeed.setTo(200, 200);
		emitter.gravity = 0;
		emitter.start(true, 2000, null, 30);
		ruby.destroy();

		this.time.events.add(2000, this.startGame, this);
	},

	startGame: function() {
		hero.position.x = 791;
		hero.position.y = 858;
		this.state.start('rubyquest', false, false, this.hero);
	},

};
