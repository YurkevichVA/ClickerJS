
document.addEventListener('keypress', event => {
    if (document.getElementById('i-game').style.display !== 'block') { return; }
    if (localStorage.getItem('IsPause') === 'true') { return; }

    if (event.code === 'KeyE') {
        window.player.getLowHeal(10);
        alert("E");
    }
    else if (event.code === 'KeyS') {
        window.player.setFullHeal();
        alert("S");
    }
    else if (event.code === 'KeyW') {
    
        alert("W");
    }
    else if (event.code === 'KeyQ') {
    
        alert("Q");
    }
});
