// Add fire sound
document.addEventListener("mousedown", event => {
    if (!document.getElementById('load-screen').classList.contains('del')) { return; }
    if (!document.getElementById('menu-screen').classList.contains('del')) { return; }
    const newAudio = new Audio('./music/plasma_gun_03.mp3');
    newAudio.volume = 0.1;
    newAudio.play();
}, false);

document.getElementById('button-load').addEventListener('mouseover', event => {
    const newAudio = new Audio('./music/hover-items-music.mp3');
    newAudio.volume = 0.05;
    newAudio.play();
}, false);

const bgAudio = new Audio('./music/bg-music.mp3');
document.getElementById('button-load').addEventListener('click', event => {
    const newAudio = new Audio('./music/menu-click.mp3');
    newAudio.volume = 0.5;
    newAudio.play();
    
    bgAudio.volume = 0.3;
    bgAudio.loop = true;
    bgAudio.play();
}, false);

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
