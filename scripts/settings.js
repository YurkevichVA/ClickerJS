import {bgAudio} from './sound.js'
/*
 * * * * SOUNDS * * * *
 * id-general-sound
 * id-background-sound
 * id-shooting-sound
 * 
 * * * * DISPLAY * * * *
 * id-brightness
 * id-scr-mode-full
 * id-scr-mode-wind
 * 
 * * * * GAME * * * *
 * ...
 */
/*
=======================================================
------------------------Settings-----------------------
=======================================================
*/
//-------------------Settings-Items------------------//
let settings_items = document.getElementById('settings-screen').getElementsByTagName('a');
for (var i = 0 ; i < settings_items.length; i++) {
    if (settings_items[i].id === 'settings-back-id') {
        settings_items[i].addEventListener('click', event => {
            document.getElementById('settings-screen').style.display = 'none';
            if (localStorage.getItem("IsPause") === 'true') {
                document.getElementById('pause-screen').style.display = 'flex';
                return;
            }
            document.getElementById('menu-screen').style.display = 'block';
        });
    }
    else if (settings_items[i].id === 'display-id') {
        settings_items[i].addEventListener('click', event => {
            document.getElementById('game-set-id').style.display = 'none';
            document.getElementById('sounds-set-id').style.display = 'none';
            document.getElementById('display-set-id').style.display = 'block';
        });
    }
    else if (settings_items[i].id === 'sounds-id') {
        settings_items[i].addEventListener('click', event => {
            document.getElementById('game-set-id').style.display = 'none';
            document.getElementById('sounds-set-id').style.display = 'block';
            document.getElementById('display-set-id').style.display = 'none';
        });
    }
    else if (settings_items[i].id === 'game-id') {
        settings_items[i].addEventListener('click', event => {
            document.getElementById('game-set-id').style.display = 'block';
            document.getElementById('sounds-set-id').style.display = 'none';
            document.getElementById('display-set-id').style.display = 'none';
        });
    }
}
//----------------------DISPLAY----------------------//
//--------------------brightness---------------------//
document.getElementById('id-brightness').addEventListener('change', event => {
    document.getElementById('screen').style.filter = `brightness(${document.getElementById('id-brightness').value}%)`;
    localStorage.setItem('settings-brightness', document.getElementById('id-brightness').value);
});
//--------------------screen-mode--------------------//
document.getElementById('id-scr-mode-full').addEventListener('click', event => {
    if (document.fullscreenElement) return;
    document.documentElement.requestFullscreen();
});
document.getElementById('id-scr-mode-wind').addEventListener('click', event => {
    if (!document.fullscreenElement) return;
    document.exitFullscreen();
});

//----------------------SOUNDS-----------------------//
//---------------background-general------------------//
document.getElementById('id-background-sound').addEventListener('change', event => {
    bgAudio.volume = document.getElementById('id-background-sound').value/100.0;
    localStorage.setItem('settings-background-sound', document.getElementById('id-background-sound').value);
});
document.getElementById('id-shooting-sound').addEventListener('change', event => {
    localStorage.setItem('settings-shooting-sound', document.getElementById('id-shooting-sound').value);
});
document.getElementById('id-general-sound').addEventListener('change', event => {
    if (!document.getElementById('id-general-sound').checked) {
        bgAudio.volume  = 0;
        document.getElementById('id-background-sound').value = 0;
        document.getElementById('id-shooting-sound').value = 0;
        document.getElementById('id-result-bg').textContent = "0";
        document.getElementById('id-result-shoot').textContent = "0";
        
        document.getElementById('id-background-sound').disabled = true;
        document.getElementById('id-shooting-sound').disabled = true;
    }
    else {
        bgAudio.volume  = 0.5;
        document.getElementById('id-background-sound').value = 50;
        document.getElementById('id-shooting-sound').value = 50;
        document.getElementById('id-result-bg').textContent = "50";
        document.getElementById('id-result-shoot').textContent = "50";
        
        document.getElementById('id-background-sound').disabled = false;
        document.getElementById('id-shooting-sound').disabled = false;
    }
    localStorage.setItem('settings-background-sound', document.getElementById('id-background-sound').value);
    localStorage.setItem('settings-shooting-sound', document.getElementById('id-shooting-sound').value);
    localStorage.setItem('settings-general-sound', document.getElementById('id-general-sound').checked);
});
//--------shooting-in-sound.js-(mousedown)----------//

//---------------------THEMES-----------------------//
document.getElementById('theme1').addEventListener('click', event => {
    document.getElementById('screen').style.backgroundImage = "url('./images/game-bg.png')";
    localStorage.setItem("theme-bg", "url('./images/game-bg.png')");
});
document.getElementById('theme2').addEventListener('click', event => {
    document.getElementById('screen').style.backgroundImage = "url('./images/game-bg2.png')";
    localStorage.setItem("theme-bg", "url('./images/game-bg2.png')");
});
document.getElementById('theme3').addEventListener('click', event => {
    document.getElementById('screen').style.backgroundImage = "url('./images/game-bg3.png')";
    localStorage.setItem("theme-bg", "url('./images/game-bg3.png')");
});

// Game
var rad = document.getElementsByName('r2');
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (window.game.baseDelay) ? console.log(window.game.baseDelay): null;
        if (this.value !== window.game.baseDelay) {
            window.game.baseDelay = this.value;
        }
        console.log(this.value)
    });
}
