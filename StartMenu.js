RubyQuest.StartMenu = function (game) {
	this.startRQ;
	this.startPrompt;
};

RubyQuest.StartMenu.prototype = {

	create: function() {
		startRQ = this.add.image(0,0,'titlescreen');
		startRQ.inputEnabled = true;
		startRQ.events.onInputDown.addOnce(this.startGame, this);

		startPrompt = this.add.text(this.world.centerX-100, this.world.centerY, "New Game", { font: "35px Arial", fill: "#fff", align: "center" });
	},

	startGame: function(pointer) {
		this.state.start('rubyquest');

	}
};

