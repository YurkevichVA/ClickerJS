import {Meteorite} from "./Meteorite.js";
import {sleep} from "../functions/sleep.js";
import {generateRandom} from "../functions/randomNumber.js";

export class Level
{
    constructor(config)
    {
        this.delay = config.delay;
        this.smallCount = config.smallCount;
        this.mediumCount = config.mediumCount;
        this.largeCount = config.largeCount;
        this.bossCount = config.bossCount;
        this.generalCount = this.smallCount + this.mediumCount + this.largeCount + this.bossCount;
        this.meteoritesArr = [];
    }

    spawnSmall()
    {
        return new Meteorite({hp: 20, dmg: 20, speed: 5, size: 100, reward: 1});
    }

    spawnMedium()
    {
        return new Meteorite({hp: 70, dmg: 45, speed: 8, size: 150, reward: 5});
    }

    spawnLarge()
    {
        return new Meteorite({hp: 135, dmg: 100, speed: 9, size: 200, reward: 15});
    }

    spawnBoss()
    {
        return new Meteorite({hp: 500, dmg: 300, speed: 11, size: 600, reward: 50});
    }


    async start()
    {
        this.spawnedMeteorites = 0;

        while(this.spawnedMeteorites != this.generalCount)
        {
            if(this.smallCount > 0)
            {
                this.meteoritesArr.push(this.spawnSmall());
                this.spawnedMeteorites++;
                this.smallCount--;
                await sleep(generateRandom(this.delay - 600, this.delay));
            }
            
            if(window.game.isPause)
            {
                while(window.game.isPause)
                    await sleep(1);
            }

            if(this.mediumCount > 0)
            {
                this.meteoritesArr.push(this.spawnMedium());
                this.spawnedMeteorites++;
                this.mediumCount--;
                await sleep(generateRandom(this.delay - 600, this.delay + 100));
            }

            if(window.game.isPause)
            {
                while(window.game.isPause)
                    await sleep(1);
            }

            if(this.largeCount > 0)
            {
                this.meteoritesArr.push(this.spawnLarge());
                this.spawnedMeteorites++;
                this.largeCount--;
                await sleep(generateRandom(this.delay - 500, this.delay + 200));
            }

            if(window.game.isPause)
            {
                while(window.game.isPause)
                    await sleep(1);
            }

            if(this.bossCount > 0 && this.spawnedMeteorites == this.generalCount - 1)
            {
                await sleep(this.delay);
                this.meteoritesArr.push(this.spawnBoss());
                this.spawnedMeteorites++;
                this.bossCount--;
            }
        }

        while(window.game.countOfDestroyed < this.generalCount || window.game.isGameOver)
        {
            await sleep(1);
        }
        
    }

    totalShot()
    {
        this.meteoritesArr.forEach(element => {
            element.getDamage(element.hp);
        });
    }
}