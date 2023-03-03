export class Spaceship
{
    health = 200;
    damage = 15;

    constructor()
    {
        this.healthBar = window.document.getElementById("playerHealthbar");
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