import {Meteorite} from "./Meteorite.js";
import {Level} from "./Level.js";
import {sleep} from "../functions/sleep.js";

// Get HTML elements
const gameOverScreen = document.getElementById("gameOverScreen");   // Element that shows "game over" message
const winScreen = document.getElementById("win-screen");             // Element that appears when player finish last level
const winLable = document.getElementById("win-label"); 
const statsContainer = document.getElementsByClassName("statistic-container"); 
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

        this.currentLevel = window.currentSlot.level;

        this.isGameOver = false;                                             // Required to check whether player lose
        this.isPause = false;                                                // Pause flag

        this.level = null;

        var ele = document.getElementsByName('r2');

        this.difficulty = ele[0].checked? 'normal' : 'hard';

        if(this.difficulty === 'normal')
        {
            this.baseDelay = 2300;
        }
        else
        {
            this.baseDelay = 2000;
        }
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
        for(let i = this.currentLevel; i <= 10; i++)
        {
            console.log("level " + this.currentLevel);

            console.log(this.difficulty + " " + this.baseDelay);

            //this.currentLevel = 10;

            await this.showLevel();

            switch(this.currentLevel)
            {
                case 1:
                {
                    this.level = new Level({delay: this.baseDelay, smallCount: 5, mediumCount: 0, largeCount: 0, bossCount: 0});
                    break;
                }
                case 2:
                {
                    this.level = new Level({delay: this.baseDelay - 100, smallCount: 5, mediumCount: 3, largeCount: 0, bossCount: 0});
                    break;
                }
                case 3:
                {
                    this.level = new Level({delay: this.baseDelay - 200, smallCount: 8, mediumCount: 5, largeCount: 0, bossCount: 0});
                    break;
                }
                case 4:
                {
                    this.level = new Level({delay: this.baseDelay - 300, smallCount: 5, mediumCount: 8, largeCount: 0, bossCount: 0});
                    break;
                }
                case 5:
                {
                    this.level = new Level({delay: this.baseDelay - 400, smallCount: 5, mediumCount: 3, largeCount: 1, bossCount: 0});
                    break;
                }
                case 6:
                {
                    this.level = new Level({delay: this.baseDelay - 500, smallCount: 5, mediumCount: 5, largeCount: 3, bossCount: 0});
                    break;
                }
                case 7:
                {
                    this.level = new Level({delay: this.baseDelay - 600, smallCount: 2, mediumCount: 6, largeCount: 5, bossCount: 0});
                    break;
                }
                case 8:
                {
                    this.level = new Level({delay: this.baseDelay - 700, smallCount: 6, mediumCount: 5, largeCount: 7, bossCount: 0});
                    break;
                }
                case 9:
                {
                    this.level = new Level({delay: this.baseDelay - 1000, smallCount: 15, mediumCount: 0, largeCount: 0, bossCount: 0});
                    break;
                }
                case 10:
                {
                    this.level = new Level({delay: this.baseDelay - 200, smallCount: 2, mediumCount: 2, largeCount: 1, bossCount: 1});
                    break;
                }
                default:
                {
                    console.error("Trying to access unexisting level!");
                    break;
                }
            }

            console.log(this.level);

            await this.level.start();

            if(this.isGameOver)
                return;


            if(this.currentLevel === 10)
            {
                this.win();
                return;
            }

            this.currentLevel++;  
            this.save();         
            localStorage.setItem('currentLevel', this.currentLevel);

            this.countOfDestroyed = 0;
        }
    }

    gameOver()
    {
        this.isGameOver = true;
        gameOverScreen.style.display = "flex";
    }

    save()
    {
        window.slots[window.currentSlotIndex].level = this.currentLevel;
        window.slots[window.currentSlotIndex].player_hp = window.player.health;
        window.slots[window.currentSlotIndex].date_and_time = new Date();
        window.slots[window.currentSlotIndex].shots = window.stats.shots;
        window.slots[window.currentSlotIndex].smallDestroyed = window.stats.smallDestroyed;
        window.slots[window.currentSlotIndex].mediumDestroyed = window.stats.mediumDestroyed;
        window.slots[window.currentSlotIndex].largeDestroyed = window.stats.largeDestroyed;

        localStorage.setItem('slots', JSON.stringify(window.slots));
    }

    pause()
    {
        if(this.level.meteoritesArr !== undefined)
        {
            this.level.meteoritesArr.forEach(element => {
                element.pauseAnimation();
            });
        }
        this.isPause = true;
    }

    continue()
    {
        if(this.level.meteoritesArr !== undefined)
        {
            this.level.meteoritesArr.forEach(element => {
                element.resumeAnimation();
            });
        }
        this.isPause = false;
    }

    exit()
    {
        if(this.level.meteoritesArr !== undefined)
        {
            this.level.meteoritesArr.forEach(element => {
                element.destroy();
            });
        }
        this.level = null;
    }

    win()
    {
        winScreen.style.display = 'flex';
        statsContainer[0].children[0].textContent += window.stats.shots;
        statsContainer[0].children[1].textContent += window.stats.smallDestroyed;
        statsContainer[0].children[2].textContent += window.stats.mediumDestroyed;
        statsContainer[0].children[3].textContent += window.stats.largeDestroyed;
    }
}

export default Game;