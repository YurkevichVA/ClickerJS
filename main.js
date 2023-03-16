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
});
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
    document.getElementById('menu-screen').style.display = 'block';
    localStorage.setItem("IsPause", false);
    // Save game
    // game.save();
});
document.getElementById('id-pause-settings').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'block';
});
document.getElementById('id-pause-shop').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    document.getElementById('shop-screen').style.display = 'block';
});
document.getElementById('id-pause-continue').addEventListener('click', event => {
    document.getElementById('pause-screen').style.display = 'none';
    localStorage.setItem("IsPause", false);

    // Continue game
    game.continue();
});
