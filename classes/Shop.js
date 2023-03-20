 export class Shop
 {
    constructor()
    {
        // MONEY
        this.money = 0; // (!)
        this.moneydisplay = window.document.getElementById("id-money");
        this.moneydisplay.textContent = this.money;
        
        // ITEMS
        this.countEnergy = 0;
        this.countFullEnergy = 0;
        this.countSuperShot = 99;
        this.countTotalShot = 99;

        this.lableEnergy = window.document.getElementById("id-energy-item");
        this.lableFullEnergy = window.document.getElementById("id-shield-item");
        this.lableSuperShot = window.document.getElementById("id-super-shot");
        this.lableTotalShot = window.document.getElementById("id-total-shot");
 
        this.lableEnergy.textContent = this.countEnergy;
        this.lableFullEnergy.textContent = this.countFullEnergy;
        this.lableSuperShot.textContent = this.countSuperShot;
        this.lableTotalShot.textContent = this.countTotalShot;
    }
    

    getMoney = function () {
        return this.money;
    }
    setMoney = function (value) {
        this.money += value;
        this.moneydisplay.textContent = this.money;
    }

    improveDamage = function (value) {
        this.damage += value;
    }

    addLowHeal = function () {
        this.countEnergy++;
        this.lableEnergy.textContent = this.countEnergy;
    }
    useLowHeal = function (heal) {
        this.health += heal;
        this.healthBar.value = this.health;

        this.countEnergy--;
        this.lableEnergy.textContent = this.countEnergy;
    }

    addFullHeal = function () {
        this.countFullEnergy++;
        this.lableFullEnergy.textContent = this.countFullEnergy;
    }
    useFullHeal = function () {
        this.health = 200;
        this.healthBar.value = this.health;

        this.countFullEnergy--;
        this.lableFullEnergy.textContent = this.countFullEnergy;
    }

    useSuperShot = function () {
        window.player.isSuperShot = true;
    }

    useTotalShot = function () 
    {
        if(this.countTotalShot > 0)
        {
            this.countTotalShot--;
            window.game.level.totalShot();
        }    
    }
 }