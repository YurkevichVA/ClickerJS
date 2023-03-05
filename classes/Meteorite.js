import {sleep} from "../functions/sleep.js";

export class Meteorite
{
    health = 100;
    damage = 60;

    constructor(health = 100, damage = 60)
    {
        this.health = health;
        this.damage = damage;

        let meteorit = document.createElement('div');
        meteorit.style.position = 'absolute';
        meteorit.style.top = '-30%';
        meteorit.style.left = String(Math.floor(Math.random() * 100)) + '%';
        meteorit.style.animation = 'meteorit-anim 8s linear';
        meteorit.addEventListener('animationend', event => {
            if (pictureMeteorite.classList.contains('destroy-pic')) { return; }
            player.getDamage(this.damage);
            game.countOfDestroyed++;
        });

        let healthBar = document.createElement('progress');
        healthBar.classList.add('progress');
        healthBar.value = 100;
        healthBar.max = 100;

        let pictureMeteorite = document.createElement('div');
        pictureMeteorite.classList.add('meteorit-pic');
        pictureMeteorite.addEventListener('mousedown', async event => {
            healthBar.value -= player.damage;
            if (healthBar.value <= 0) {

                const newAudio = new Audio('./music/meteorite-explosion.mp3');
                newAudio.volume = 0.5;
                newAudio.play();

                pictureMeteorite.classList.add('destroy-pic');
                healthBar.classList.add('destroyed');
                await sleep(1000);
                meteorit.classList.add('destroyed');
                game.countOfDestroyed++;
            }
        });

        meteorit.appendChild(pictureMeteorite);
        meteorit.appendChild(healthBar);

        document.body.appendChild(meteorit);
    }
}

export default Meteorite;
