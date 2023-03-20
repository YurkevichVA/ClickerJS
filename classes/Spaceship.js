export class Spaceship
{
    constructor()
    {
        this.health = window.currentSlot.player_hp;
        this.damage = 15;
        this.healthBar = window.document.getElementById("playerHealthbar");
        this.healthBar.value = this.health;
    }
 
    getDamage = function (dmg) {
        this.health -= dmg;
        this.healthBar.value = this.health;
        if(this.health <= 0)
        {
            game.gameOver();
            console.log("game over");
        }
    }
}

export default Spaceship;