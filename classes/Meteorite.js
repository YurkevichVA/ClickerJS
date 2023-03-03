export class Meteorite
{
    health = 100;
    damage = 60;

    constructor(health = 100, damage = 60)
    {
        this.health = health;
        this.damage = damage;

        let meteorit = document.createElement('div');
        meteorit.style.position = "absolute";
        meteorit.style.top = "-30%";
        meteorit.style.left = String(Math.floor(Math.random() * 100)) + "%";
        meteorit.style.animation = 'meteorit-anim 8s linear';
        meteorit.addEventListener('animationend', event => {
            player.getDamage(this.damage);
            game.countOfDestroyed++;
        })

        let healthBar = document.createElement('progress');
        healthBar.classList.add("progress");
        healthBar.value = 100;
        healthBar.max = 100;

        let pictureMeteorite = document.createElement('div');
        pictureMeteorite.classList.add("meteorit-pic");
        pictureMeteorite.addEventListener("mousedown", event => {
            healthBar.value -= player.damage;
            if (healthBar.value <= 0) {
                meteorit.classList.add('destroyed');
                game.countOfDestroyed++;
            }
        })

        meteorit.appendChild(pictureMeteorite);
        meteorit.appendChild(healthBar);

        document.body.appendChild(meteorit);
    }
}

export default Meteorite;