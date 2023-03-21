import { setSlotsView } from "./scripts/play-screen.js";

//localStorage.clear();

// Button on load screen
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
    document.getElementById('load-save-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
    setSlotsView();
});
//-------------------Settings-Btn-------------------//
document.getElementById('settings-id').addEventListener('click', event => {
    document.getElementById('settings-screen').style.display = 'block';
    document.getElementById('menu-screen').style.display = 'none';
});

/*
======================================================
-------------------------GAME-------------------------
======================================================
*/
document.getElementById('id-pause-btn').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'flex';
    localStorage.setItem("IsPause", true);
    
    // Pause game
    game.pause();
});
document.getElementById('id-pause-back').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('i-game').style.display = 'none';
    document.getElementById('playerHealthbar').style.display = 'none';

    document.getElementById("win-screen").style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'none';

    document.getElementById('menu-screen').style.display = 'block';
    localStorage.setItem("IsPause", false);
    
    game.exit();
    game = null;
});
document.getElementById('id-pause-settings').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'block';
});
document.getElementById('id-pause-shop').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('shop-screen').style.display = 'block';
});
document.getElementById('id-pause-bulb').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('bulb-screen').style.display = 'block';
});
document.getElementById('bulb-back-id').addEventListener('click', event => {
    document.getElementById('bulb-screen').style.display = 'none';
    document.getElementById('pause-screen').style.display = 'flex';
});
document.getElementById('id-pause-continue').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    localStorage.setItem("IsPause", false);

    // Continue game
    game.continue();
});
