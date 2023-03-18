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

    getLowHeal = function (heal) {
        this.health += heal;
        this.healthBar.value = this.health;
    }

    setFullHeal = function () {
        this.health = 200;
        this.healthBar.value = this.health;
    }
}

export default Spaceship;