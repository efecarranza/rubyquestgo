RubyQuest.Fight = function(game) {
	this.bg;
	this.fighterOne;
	this.fighterTwo;
};

RubyQuest.Fight.prototype = {

	// init: function(hero, monster) {
	// 	hero.height = 128;
	// 	hero.width = 128;
	// },

	create: function() {
		bg = this.add.image(0, 0, 'battlebg');
		fighterOne = this.add.sprite(150, 300, 'herofight');
		fighterOne.anchor.setTo(0.5,0.5);
		fighterTwo = this.add.sprite(400, 260, 'monster');

		fighterOne.height = 320;
		fighterOne.width = 208;
		fighterTwo.height = 128;
		fighterTwo.width = 96;

		fighterOne.animations.add('attack');

	},

	update: function() {
		fighterOne.animations.play('attack', 6, false);

	},
};