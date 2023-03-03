// Add fire sound
document.addEventListener("mousedown", event => {
    const newAudio = new Audio('./music/plasma_gun_03.mp3');
    newAudio.volume = 0.3;
    newAudio.play();
}, false);