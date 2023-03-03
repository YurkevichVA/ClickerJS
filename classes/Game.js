import {Meteorite} from "./Meteorite.js";
import {sleep} from "../functions/sleep.js";

// Get HTML elements
const gameOverScreen = document.getElementById("gameOverScreen");   // Element that shows "game over" message
const levelLabel = document.getElementById("levelLabel");           // General element that shows level number before level started
const levelLabelText = document.getElementById("textLevelLabel");   // Label that contains text with level number

/* Game is an object that contains game loop and levels */
export class Game
{
    countOfDestroyed = 0;                                           // Count of destroyed meteorites on the level, required to check whether the level has been passed
    currentLevel = Number(localStorage.getItem("currentLevel"));    // Contains the number of current level, start value getting from localStorage
    isGameOver = false;                                             // Required to check whether player lose

    /*
    * Function that spawns the new meteorite
    * health: health of meteorite
    * damage: damage that the meteorite inflicts on the player
    */
    spawnMeteorite(health, damage)
    {
        new Meteorite(health, damage);
    }

    /**
     * Levels methods
     */
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
        // If current level more than 3 return to 1 level
        if(this.currentLevel > 3)
        {
            localStorage.setItem("currentLevel", 1);
            this.currentLevel = 1;
        }

        let i = 0;
        while(i < 4)
        {
            await this.startLevel();
            // If game over break the loop
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
        
        if(this.isGameOver) return;

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

export default Game;