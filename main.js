
localStorage.clear();
console.log(localStorage.getItem("currentLevel"));

// Set global variables
window["game"] = new Game();            // Game is an object that contains game loop and levels
window["player"] = new Spaceship();     // Spaceship is an object that contains player health and damage

// Import modules
import {Game} from "./classes/Game.js";
import {Spaceship} from "./classes/Spaceship.js";

document.getElementById('button-load').addEventListener('click', event => {
    document.getElementById('load-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
});

/*
======================================================
-------------------------MENU-------------------------
======================================================
*/
//---------------------Play-Btn---------------------//
document.getElementById('play-id').addEventListener('click', event => {
    document.getElementById('menu-screen').style.display = 'none';
    
    // Start game loop
    game.gameLoop();
});
//-------------------LoadGame-Btn-------------------//

//---------------------Shop-Btn---------------------//
document.getElementById('shop-id').addEventListener('click', event => {
    document.getElementById('shop-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
});
//-------------------Settings-Btn-------------------//
document.getElementById('settings-id').addEventListener('click', event => {
    document.getElementById('settings-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
});
