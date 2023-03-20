export class Spaceship
{
    constructor()
    {
        this.health = window.currentSlot.player_hp;
        this.damage = 15;
        this.healthBar = window.document.getElementById("playerHealthbar");
        this.healthBar.value = this.health;
        this.isSuperShot = false;
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

    makeDamage = function(meteor) {
        if(this.isSuperShot)
        {
            meteor.getDamage(meteor.hp);
            this.isSuperShot = false;
        }
        else
        {
            // Calculate damage
            meteor.getDamage(this.damage);
        }
    }
}

export default Spaceship;