
//------------Brightness-Load------------//
document.getElementById('screen').style.filter = `brightness(${localStorage.getItem('settings-brightness')}%)`;
document.getElementById('id-brightness').value = localStorage.getItem('settings-brightness');

//---------Background-sound-Load---------//
document.getElementById('id-background-sound').value = localStorage.getItem('settings-background-sound');
document.getElementById('id-result-bg').textContent = localStorage.getItem('settings-background-sound');

    //----------Shooting-sound-Load----------//
document.getElementById('id-shooting-sound').value = localStorage.getItem('settings-shooting-sound');
document.getElementById('id-result-shoot').textContent = localStorage.getItem('settings-shooting-sound');