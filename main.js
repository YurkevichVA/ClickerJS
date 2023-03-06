
// Set global variables
window["game"] = new Game();            // Game is an object that contains game loop and levels
window["player"] = new Spaceship();     // Spaceship is an object that contains player health and damage

// Import modules
import {Game} from "./classes/Game.js";
import {Spaceship} from "./classes/Spaceship.js";
import {clearLS} from "./functions/clearLocalStorage.js";

clearLS();

document.getElementById('button-load').addEventListener('click', event => {
    document.getElementById('load-screen').classList.add('del');
    document.getElementById('menu-screen').classList.remove('del');
});

document.getElementById('play-id').addEventListener('click', event => {
    document.getElementById('menu-screen').classList.add('del');
    // Start game loop
    game.gameLoop();
});
