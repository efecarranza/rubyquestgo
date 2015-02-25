RubyQuest.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
};

RubyQuest.Preloader.prototype = {

	preload: function() {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
		this.preloadBar.anchor.setTo(0.5,0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'monster');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('map', 'empty/assets/map.png');
		this.load.spritesheet('hero', 'empty/assets/walk.png', 63, 62);
		this.load.image('monster', 'empty/assets/monster.png');
		},

		create: function() {
			this.preloadBar.cropEnabled = false;
		},

		update: function() {
			this.ready = true;
			this.state.start('StartMenu');
		}
	};