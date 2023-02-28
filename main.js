"use strict";

//localStorage.clear();

const gameOverScreen = document.getElementById("gameOverScreen");
const levelLabel = document.getElementById("levelLabel");
const levelLabelText = document.getElementById("textLevelLabel");

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

document.addEventListener("click", event => {
    const newAudio = new Audio('./music/plasma_gun_03.mp3');
    newAudio.volume = 0.3;
    newAudio.play();
}, false);

class Spaceship
{
    health = 200;
    damage = 15;

    constructor(document)
    {
        this.healthBar = document.getElementById("playerHealthbar");
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

class Meteorite
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
        pictureMeteorite.classList.add("meteorit");
        pictureMeteorite.addEventListener("click", event => {
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

class Game
{
    countOfDestroyed = 0;
    currentLevel = Number(localStorage.getItem("currentLevel"));
    isGameOver = false;

    spawnMeteorite(health, damage)
    {
        let meteorit = new Meteorite(health, damage);
    }

    async lvl1()
    {
        levelLabel.style.display = "flex";

        await sleep(5000);

        levelLabel.style.display = "none";

        for(let i = 0; i < 4; i++)
        {
            this.spawnMeteorite();
            await sleep(2000);
        }
    }
    async lvl2()
    {
        levelLabelText.innerText = "LEVEL 2";
        levelLabel.style.display = "flex";

        await sleep(5000);

        levelLabel.style.display = "none";

        for(let i = 0; i < 7; i++)
        {
            this.spawnMeteorite();
            await sleep(5000 / i);
        }
    }
    async lvl3()
    {
        levelLabelText.innerText = "LEVEL 3";
        levelLabel.style.display = "flex";

        await sleep(5000);

        levelLabel.style.display = "none";

        for(let i = 0; i < 8; i++)
        {
            if(i === 7)
            {
                this.spawnMeteorite(500, 300);
                await sleep(1500);
            }
            else
            {
                this.spawnMeteorite();
                await sleep(5000 / i);
            }
        }
    }

    async gameLoop()
    {
        
        if(this.currentLevel > 3)
        {
            localStorage.setItem("currentLevel", 1);
            this.currentLevel = 1;
        }

        let i = 0;
        while(i < 4)
        {
            console.log(this.currentLevel);
            await this.startLevel();
            if(this.isGameOver)
                return;
            i++;
        }
    }

    async startLevel()
    {
        if(this.currentLevel === 1)
        {
            await this.lvl1();

            while(this.countOfDestroyed < 4)
                await sleep(1);
        }
        else if(this.currentLevel === 2)
        {
            await this.lvl2();

            while(this.countOfDestroyed < 7)
                await sleep(1);
        }
        else if(this.currentLevel === 3)
        {
            await this.lvl3();

            while(this.countOfDestroyed < 10)
                await sleep(1);
        }
        
        this.currentLevel++;
        console.log("current level + 1");
        if(this.currentLevel > 3)
        {
            this.currentLevel = 1;
        }
        localStorage.setItem('currentLevel', this.currentLevel);
        this.countOfDestroyed = 0;
    }

    gameOver()
    {
        this.isGameOver = true;
        gameOverScreen.style.display = "flex";
    }
}

const game = new Game();

const player = new Spaceship(document);

game.gameLoop();