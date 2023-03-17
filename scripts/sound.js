// Add fire sound
/*
=======================================================
------------------------Shooting-----------------------
=======================================================
*/
document.addEventListener("mousedown", event => {
    if (document.getElementById('load-screen').style.display !== 'none') { return; }
    if (document.getElementById('menu-screen').style.display !== 'none') { return; }
    if (document.getElementById('settings-screen').style.display !== 'none') { return; }
    if (document.getElementById('shop-screen').style.display !== 'none') { return; }
    if (document.getElementById('pause-screen').style.display !== 'none') { return; }
    const plasma_gun_audio = new Audio('./music/plasma_gun_03.mp3');
    plasma_gun_audio.volume = document.getElementById('id-shooting-sound').value/100.0;
    plasma_gun_audio.play();
});
/*
=======================================================
------------------------BGMusic------------------------
=======================================================
*/
const bgAudio = new Audio('./music/bg-music.mp3');
document.getElementById('button-load').addEventListener('click', event => {
    if (localStorage.getItem('settings-general-sound') === 'false') {
        bgAudio.volume = 0;
        document.getElementById('id-background-sound').value = 0;
        document.getElementById('id-shooting-sound').value = 0;
        document.getElementById('id-result-bg').textContent = "0";
        document.getElementById('id-result-shoot').textContent = "0";
        document.getElementById('id-general-sound').checked = false;
        
        document.getElementById('id-background-sound').disabled = true;
        document.getElementById('id-shooting-sound').disabled = true;
    }
    else { 
        bgAudio.volume = document.getElementById('id-background-sound').value/100.0;
    }
    bgAudio.loop = true;
    bgAudio.play();
}, false);
export {bgAudio};

/*
=======================================================
------------------MenuItemsClick&Hover-----------------
=======================================================
*/
//--------------------Load-Screen--------------------//
document.getElementById('button-load').addEventListener('mouseover', event => {
    const newAudio = new Audio('./music/hover-items-music.mp3');
    newAudio.volume = 0.05;
    newAudio.play();
}, false);
document.getElementById('button-load').addEventListener('click', event => {
    const newAudio = new Audio('./music/menu-click.mp3');
    newAudio.volume = 0.5;
    newAudio.play();
}, false);
//--------------------Menu-Screen--------------------//
let menu_items = document.getElementById('menu-items').getElementsByTagName('a');
for (var i = 0 ; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', event => {
        const newAudio = new Audio('./music/menu-click.mp3');
        newAudio.volume = 0.5;
        newAudio.play();
    }, false);
    menu_items[i].addEventListener('mouseover', event => {
        const newAudio = new Audio('./music/hover-items-music.mp3');
        newAudio.volume = 0.05;
        newAudio.play();
    }, false);
}
//--------------------Settings-Screen--------------------//
menu_items = document.getElementById('settings-screen').getElementsByTagName('a');
for (var i = 0 ; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', event => {
        const newAudio = new Audio('./music/menu-click.mp3');
        newAudio.volume = 0.5;
        newAudio.play();
    }, false);
    menu_items[i].addEventListener('mouseover', event => {
        const newAudio = new Audio('./music/hover-items-music.mp3');
        newAudio.volume = 0.05;
        newAudio.play();
    }, false);
}
//----------------------Shop-Screen----------------------//
document.getElementById('shop-back-id').addEventListener('mouseover', event => {
    const newAudio = new Audio('./music/hover-items-music.mp3');
    newAudio.volume = 0.05;
    newAudio.play();
}, false);
menu_items = document.getElementById('shop-screen').getElementsByTagName('a');
for (var i = 0 ; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', event => {
        const newAudio = new Audio('./music/menu-click.mp3');
        newAudio.volume = 0.5;
        newAudio.play();
    }, false);
}
menu_items = document.getElementById('shop-screen').getElementsByTagName('button');
for (var i = 0 ; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', event => {
        const newAudio = new Audio('./music/menu-click.mp3');
        newAudio.volume = 0.5;
        newAudio.play();
    });
    menu_items[i].addEventListener('mouseover', event => {
        const newAudio = new Audio('./music/hover-items-music.mp3');
        newAudio.volume = 0.05;
        newAudio.play();
    });
}
//----------------------Pause-Screen---------------------//
menu_items = document.getElementById('pause-screen').getElementsByTagName('input');
for (var i = 0 ; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', event => {
        const newAudio = new Audio('./music/menu-click.mp3');
        newAudio.volume = 0.5;
        newAudio.play();
    }, false);
    menu_items[i].addEventListener('mouseover', event => {
        const newAudio = new Audio('./music/hover-items-music.mp3');
        newAudio.volume = 0.05;
        newAudio.play();
    }, false);
}
document.getElementById('id-pause-btn').addEventListener('mouseover', event => {
    const newAudio = new Audio('./music/hover-items-music.mp3');
    newAudio.volume = 0.05;
    newAudio.play();
});
document.getElementById('id-pause-btn').addEventListener('click', event => {
    const newAudio = new Audio('./music/menu-click.mp3');
    newAudio.volume = 0.5;
    newAudio.play();
});
