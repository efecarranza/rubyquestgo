RubyQuest.Fight = function(game) {
	this.bg;
	this.attackButton;
	this.fighterOne;
	this.fighterTwo;
	this.menuLabel;
	this.attackButton;
	this.runButton;
	this.txtStyle;
	this.attacktxt;
	this.runtxt;
};

RubyQuest.Fight.prototype = {

	init: function(hero, monster) {
		
	},

	create: function() {
		bg = this.add.image(0, 0, 'battlebg');
		menuLabel = this.add.image(20, 360, 'label');
		menuLabel.width = 600;
		menuLabel.height = 100;

		attackButton = this.add.button(40, 370, 'label', this.attack, this, 2, 1, 0);
		attackButton.width = 120;
		attackButton.height = 30;

		runButton = this.add.button(40, 420, 'label', this.run, this, 2,1, 0);
		runButton.width = 120;
		runButton.height = 30;

		txtStyle = { font: "20px Arial", fill: "#fff", align: "center" };
		attacktxt = this.add.text(65, 373, 'Attack', txtStyle);
		runtxt = this.add.text(65, 423, 'Run', txtStyle);


		fighterOne = this.add.sprite(150, 260, 'herofight');
		fighterOne.anchor.setTo(0.5,0.5);
		fighterTwo = this.add.sprite(400, 220, 'monster');

		fighterOne.height = 320;
		fighterOne.width = 208;
		fighterTwo.height = 128;
		fighterTwo.width = 96;

		fighterOne.animations.add('attack', [0,1,2,3,4,5,0]);


	},

	update: function() {
		// fighterOne.animations.play('attack', 10, false);

	},

	attack: function() {
		fighterOne.animations.play('attack', 10, false);

	},

	run: function() {
		this.state.start('rubyquest', true, false, this.hero, this.monster);

	},
};