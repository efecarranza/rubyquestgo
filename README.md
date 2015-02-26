# Overview
This repo is all of the front end javascript code for "rubyquest" it uses HTML5 using Phaser framework for game functionality. 

Phaser: http://phaser.io (github: https://github.com/photonstorm/phaser)

# Set up
1. `cd` to your projects folder where this repo lives (like: `cd ~/projects`)
2. Make sure you have sinatra installed (if not, `gem install sinatra`)
3. `ruby server2.rb`

# File structure

1. index.html --> Contains main html file, which launches game on load. 
2. Boot.js --> Boots game, preloads quick assets so user does not get black screen.
3. Preloader.js --> Preloads assets to be used in game, has a loading... message and loading bar.
4. StartMenu.js --> Main menu of game where you can choose to start playing.
5. rubyquest.js --> For now, initial scene of game where logic and everything happens. This is the main state of the game, or as known in RPGs, the 'overworld'.
6. Fight.js --> This is the fighting state, colliding with monsters takes you to a battle.

# Coming Soon
1. Interaction with NPCs (non-playable characters).
2. Menu state --> Determining whether to make it a new state or an HTML element.
3. Prologue --> Main scene where main story is discussed (animated).
4. Puzzles --> Speaks to Ruby database to check answers. Will pop up a text element, will likely use AJAX.

