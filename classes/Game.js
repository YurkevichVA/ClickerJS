import {Meteorite} from "./Meteorite.js";
import {Level} from "./Level.js";
import {sleep} from "../functions/sleep.js";

// Get HTML elements
const gameOverScreen = document.getElementById("gameOverScreen");   // Element that shows "game over" message
const winScreen = document.getElementById("winScreen");             // Element that appears when player finish last level
const winLable = winScreen.children[0];
const levelLabel = document.getElementById("levelLabel");           // General element that shows level number before level started
const levelLabelText = document.getElementById("textLevelLabel");   // Label that contains text with level number

/* Game is an object that contains game loop and levels */
export class Game
{
    constructor()
    {
        this.countOfDestroyed = 0;                                           // Count of destroyed meteorites on the level, required to check whether the level has been passed
        this.countOfMeteors = 0;                                             // Count of meteors on current level
        this.meteorsCoeff = 3;                                               // Coefficient of meteors for every level

        // Contains the number of current level, start value getting from localStorage
        if(localStorage.getItem("currentLevel") === null)
        {
            this.currentLevel = 1;
            localStorage.setItem("currentLevel", this.currentLevel);
        }
        else
        {
            this.currentLevel = Number(localStorage.getItem("currentLevel")); 
        }

        this.isGameOver = false;                                             // Required to check whether player lose
    }


    /*
    * Function that spawns the new meteorite
    * health: health of meteorite
    * damage: damage that the meteorite inflicts on the player
    */
    async spawnMeteorite(health, damage)
    {
        new Meteorite(health, damage);
    }


    async showLevel()
    {
        levelLabelText.innerText = "LEVEL " + this.currentLevel;
        levelLabel.style.display = "flex";

        await sleep(5000);

        levelLabel.style.display = "none";
    }

    async gameLoop()
    {

        let level = null;

        //this.currentLevel = 10;

        for(let i = this.currentLevel; i <= 10; i++)
        {
            console.log("level " + this.currentLevel);

            await this.showLevel();

            switch(this.currentLevel)
            {
                case 1:
                {
                    level = new Level({delay: 2300, smallCount: 5, mediumCount: 0, largeCount: 0, bossCount: 0});
                    break;
                }
                case 2:
                {
                    level = new Level({delay: 2200, smallCount: 5, mediumCount: 3, largeCount: 0, bossCount: 0});
                    break;
                }
                case 3:
                {
                    level = new Level({delay: 2100, smallCount: 8, mediumCount: 5, largeCount: 0, bossCount: 0});
                    break;
                }
                case 4:
                {
                    level = new Level({delay: 2000, smallCount: 5, mediumCount: 8, largeCount: 0, bossCount: 0});
                    break;
                }
                case 5:
                {
                    level = new Level({delay: 1900, smallCount: 5, mediumCount: 3, largeCount: 1, bossCount: 0});
                    break;
                }
                case 6:
                {
                    level = new Level({delay: 1800, smallCount: 5, mediumCount: 5, largeCount: 3, bossCount: 0});
                    break;
                }
                case 7:
                {
                    level = new Level({delay: 1700, smallCount: 2, mediumCount: 6, largeCount: 5, bossCount: 0});
                    break;
                }
                case 8:
                {
                    level = new Level({delay: 1600, smallCount: 6, mediumCount: 5, largeCount: 7, bossCount: 0});
                    break;
                }
                case 9:
                {
                    level = new Level({delay: 1000, smallCount: 15, mediumCount: 0, largeCount: 0, bossCount: 0});
                    break;
                }
                case 10:
                {
                    level = new Level({delay: 2000, smallCount: 2, mediumCount: 2, largeCount: 1, bossCount: 1});
                    break;
                }
                default:
                {
                    console.error("Trying to access unexisting level!");
                    break;
                }
            }

            console.log(level);

            await level.start();

            if(this.isGameOver)
                return;


            if(this.currentLevel === 10)
            {
                winScreen.style.display = "flex";
                winLable.style.display = "flex";
                return;
            }

            this.currentLevel++;            
            localStorage.setItem('currentLevel', this.currentLevel);

            this.countOfDestroyed = 0;
        }
    }

    gameOver()
    {
        this.isGameOver = true;
        gameOverScreen.style.display = "flex";
    }

    Win()
    {

    }
}

export default Game;