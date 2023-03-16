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
        this.meteorit = document.createElement('div');
        this.meteorit.style.position = 'absolute';
        if(config.size === 600)
        {
            this.meteorit.style.top = '-50%';
            this.meteorit.style.left = '30%';
        }
        else
        {
            this.meteorit.style.top = '-30%';
            this.meteorit.style.left = String(Math.floor(Math.random() * 100)) + '%';
        }
        this.meteorit.style.display = "flex";
        this.meteorit.style.justifyContent = "center";
        this.meteorit.style.flexDirection = "column";
        this.meteorit.style.alignContent = "center";
        this.meteorit.style.alignItems = "center";
        this.meteorit.style.gap = "15px";
        this.meteorit.style.animation = "meteorit-anim " + this.speed + "s cubic-bezier(0.46, 0.03, 0.52, 0.96)";
        this.meteorit.style.filter = `brightness(${document.getElementById('id-brightness').value}%)`;   // set brightness
        this.meteorit.addEventListener('animationend', event => {
            if(this.isDestroyed) { return; }
            
            this.isDestroyed = true;
            this.meteorit.classList.add('destroyed');
            window.player.getDamage(this.dmg);
            window.game.countOfDestroyed++;
        });

        // Set style for health bar
        this.healthBar = document.createElement('progress');
        this.healthBar.classList.add('progress');
        this.healthBar.value = this.hp;
        this.healthBar.max = this.hp;

        // Set style for picture
        this.pictureMeteorite = document.createElement('div');
        this.pictureMeteorite.style.width = config.size + "px";
        this.pictureMeteorite.style.height = config.size + "px";
        this.pictureMeteorite.classList.add('meteorit-pic');
        this.pictureMeteorite.addEventListener('mousedown', async event => {
            if(!this.isDestroyed)
            {
                this.healthBar.value -= player.damage;
                if (this.healthBar.value <= 0) 
                {
                    this.isDestroyed = true;
                    
                    this.healthBar.classList.add('destroyed');

                    this.pictureMeteorite.classList.add('destroy-pic');

                    const newAudio = new Audio('./music/meteorite-explosion.mp3');
                    newAudio.volume = 0.2;
                    newAudio.play();

                    await sleep(800);

                    this.pictureMeteorite.classList.add('destroyed');
                    this.meteorit.classList.add('destroyed');
                
                    game.countOfDestroyed++;
                }
            }
        });

        this.meteorit.appendChild(this.pictureMeteorite);
        this.meteorit.appendChild(this.healthBar);

        document.body.appendChild(this.meteorit);
    }

    pauseAnimation()
    {
        this.meteorit.style.animationPlayState = 'paused';
    }

    resumeAnimation()
    {
        this.meteorit.style.animationPlayState = 'running';
    }
}

export default Meteorite;
