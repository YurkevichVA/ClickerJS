
document.addEventListener('keypress', event => {
    if (document.getElementById('i-game').style.display !== 'block') { return; }
    if (localStorage.getItem('IsPause') === 'true') { return; }

    if (event.code === 'KeyE') {
        window.player.useLowHeal(10);
        alert("E");
    }
    else if (event.code === 'KeyS') {
        window.player.useFullHeal();
        alert("S");
    }
    else if (event.code === 'KeyW') {
        window.game.shop.useSuperShot();
        //alert("W");
    }
    else if (event.code === 'KeyQ') {
        window.game.shop.useTotalShot();
        //alert("Q");
    }
});
