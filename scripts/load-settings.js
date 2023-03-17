//------------Brightness-Load------------//
document.getElementById('screen').style.filter = `brightness(${localStorage.getItem('settings-brightness')}%)`;
document.getElementById('id-brightness').value = localStorage.getItem('settings-brightness');

//---------Background-sound-Load---------//
document.getElementById('id-background-sound').value = localStorage.getItem('settings-background-sound');
document.getElementById('id-result-bg').textContent = localStorage.getItem('settings-background-sound');

//----------Shooting-sound-Load----------//
document.getElementById('id-shooting-sound').value = localStorage.getItem('settings-shooting-sound');
document.getElementById('id-result-shoot').textContent = localStorage.getItem('settings-shooting-sound');

//---------------Pause-Load--------------//
localStorage.setItem("IsPause", false);

//-------------BG-Theme-Load-------------//
let current_bg = localStorage.getItem("theme-bg");
document.getElementById('screen').style.backgroundImage = current_bg;
if (current_bg[21] === ".") {
    document.getElementById('theme1').checked = true;
}
else if (current_bg[21] === "2") {
    document.getElementById('theme2').checked = true;
}
else if (current_bg[21] === "3") {
    document.getElementById('theme3').checked = true;
}
