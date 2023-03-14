import {sleep} from "../functions/sleep.js";

export class Meteorite
{
    constructor(config)
    {
        // Set health, damage and speed
        this.hp = config.hp;
        this.dmg = config.dmg;
        this.speed = config.speed;

        // Is destroyed false at start
        this.isDestroyed = false;

        // Set style for meteorite div
        let meteorit = document.createElement('div');
        meteorit.style.position = 'absolute';
        if(config.size === 600)
        {
            meteorit.style.top = '-50%';
            meteorit.style.left = '30%';
        }
        else
        {
            meteorit.style.top = '-30%';
            meteorit.style.left = String(Math.floor(Math.random() * 100)) + '%';
        }
        meteorit.style.display = "flex";
        meteorit.style.justifyContent = "center";
        meteorit.style.flexDirection = "column";
        meteorit.style.alignContent = "center";
        meteorit.style.alignItems = "center";
        meteorit.style.gap = "15px";
        meteorit.style.animation = "meteorit-anim " + this.speed + "s cubic-bezier(0.46, 0.03, 0.52, 0.96)";
        meteorit.style.filter = `brightness(${document.getElementById('id-brightness').value}%)`;   // set brightness
        meteorit.addEventListener('animationend', event => {
            if(this.isDestroyed) { return; }
            
            this.isDestroyed = true;
            meteorit.classList.add('destroyed');
            player.getDamage(this.dmg);
            game.countOfDestroyed++;
        });

        // Set style for health bar
        let healthBar = document.createElement('progress');
        healthBar.classList.add('progress');
        healthBar.value = this.hp;
        healthBar.max = this.hp;

        // Set style for picture
        let pictureMeteorite = document.createElement('div');
        pictureMeteorite.style.width = config.size + "px";
        pictureMeteorite.style.height = config.size + "px";
        pictureMeteorite.classList.add('meteorit-pic');
        pictureMeteorite.addEventListener('mousedown', async event => {
            if(!this.isDestroyed)
            {
                healthBar.value -= player.damage;
                if (healthBar.value <= 0) 
                {
                    this.isDestroyed = true;
                    
                    healthBar.classList.add('destroyed');

                    pictureMeteorite.classList.add('destroy-pic');

                    const newAudio = new Audio('./music/meteorite-explosion.mp3');
                    newAudio.volume = 0.2;
                    newAudio.play();

                    await sleep(800);

                    pictureMeteorite.classList.add('destroyed');
                    meteorit.classList.add('destroyed');
                
                    game.countOfDestroyed++;
                }
            }
        });

        meteorit.appendChild(pictureMeteorite);
        meteorit.appendChild(healthBar);

        document.body.appendChild(meteorit);
    }
}

export default Meteorite;
