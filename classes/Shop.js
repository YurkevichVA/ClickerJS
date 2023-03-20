 export class Shop
 {
    constructor()
    {
        // MONEY
        this.money = 0; // (!)
        this.moneydisplay = window.document.getElementById("id-money");
        this.moneydisplay.textContent = this.money;
        this.shophavemoneydisplay = window.document.getElementById("id-count-stars");
        this.shophavemoneydisplay.textContent = this.money;
        
        // ITEMS
        this.countEnergy = 4;
        this.countFullEnergy = 3;
        this.countSuperShot = 2;
        this.countTotalShot = 1;

        // I-GAME IN SCREEN
        this.lableEnergy = window.document.getElementById("id-c-es-E");
        this.lableFullEnergy = window.document.getElementById("id-c-ss-S");
        this.lableSuperShot = window.document.getElementById("id-c-ss-W");
        this.lableTotalShot = window.document.getElementById("id-c-ts-Q");
 
        this.lableEnergy.textContent = 'x'+this.countEnergy;
        this.lableFullEnergy.textContent = 'x'+this.countFullEnergy;
        this.lableSuperShot.textContent = 'x'+this.countSuperShot;
        this.lableTotalShot.textContent = 'x'+this.countTotalShot;

        // HAVE ITEMS IN SHOP-SCREEN
        this.lableEnergy_shopscr = window.document.getElementById("id-have-energy");
        this.lableFullEnergy_shopscr = window.document.getElementById("id-have-shield");
        this.lableSuperShot_shopscr = window.document.getElementById("id-have-super-shot");
        this.lableTotalShot_shopscr = window.document.getElementById("id-have-total-shot");
 
        this.lableEnergy_shopscr.textContent = this.countEnergy+'x';
        this.lableFullEnergy_shopscr.textContent = this.countFullEnergy+'x';
        this.lableSuperShot_shopscr.textContent = this.countSuperShot+'x';
        this.lableTotalShot_shopscr.textContent = this.countTotalShot+'x';
        
        this.lableDamage_shopscr = window.document.getElementById("id-have-damage");
        this.lableDamage_shopscr.textContent = window.player.getValueDamage();

        // PRICE ITEMS IN SHOP-SCREEN
        this.EnergyPrice = window.document.getElementById("id-price-energy");
        this.FullEnergyPrice = window.document.getElementById("id-price-shield");
        this.Damage1Price = window.document.getElementById("id-price-damage1");
        this.Damage2Price = window.document.getElementById("id-price-damage2");
        this.Damage3Price = window.document.getElementById("id-price-damage3");
        this.SuperShotPrice = window.document.getElementById("id-price-super-shot");
        this.TotalShotPrice = window.document.getElementById("id-price-total-shot");
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

    // ENERGY
    addLowHeal = function () {
        if (Number(this.money) >= Number(this.EnergyPrice.textContent)) {
            this.countEnergy++;
            this.lableEnergy.textContent = 'x'+this.countEnergy;
            this.lableEnergy_shopscr.textContent = this.countEnergy+'x';

            this.money -= Number(this.EnergyPrice.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.EnergyPrice.textContent) + 5 <= 999) {
                this.EnergyPrice.textContent = Number(this.EnergyPrice.textContent) + 5;
                if (Number(this.EnergyPrice.textContent) > 999) {
                    this.EnergyPrice.textContent = "999";
                }
            }
        }
    }
    useLowHeal = function (heal) {
        if (this.countEnergy === 0) { return; }

        window.player.health += heal;
        window.player.healthBar.value = window.player.health;

        this.countEnergy--;
        this.lableEnergy.textContent = 'x'+this.countEnergy;
        this.lableEnergy_shopscr.textContent = this.countEnergy+'x';
    }

    addFullHeal = function () {
        if (Number(this.money) >= Number(this.FullEnergyPrice.textContent)) {
            this.countFullEnergy++;
            this.lableFullEnergy.textContent = 'x'+this.countFullEnergy;
            this.lableFullEnergy_shopscr.textContent = this.countEnergy+'x';

            this.money -= Number(this.FullEnergyPrice.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.FullEnergyPrice.textContent) + 5 <= 999) {
                this.FullEnergyPrice.textContent = Number(this.FullEnergyPrice.textContent) + 5;
                if (Number(this.FullEnergyPrice.textContent) > 999) {
                    this.FullEnergyPrice.textContent = "999";
                }
            }
        }
    }
    useFullHeal = function () {
        if (this.countFullEnergy === 0) { return; }

        window.player.health = 200;
        window.player.healthBar.value = window.player.health;

        this.countFullEnergy--;
        this.lableFullEnergy.textContent = 'x'+this.countFullEnergy;
        this.lableFullEnergy_shopscr.textContent = this.countFullEnergy+'x';
    }

    // ABILITIES
    addSuperShot = function () {
        if (Number(this.money) >= Number(this.SuperShotPrice.textContent)) {
            this.countSuperShot++;
            this.lableSuperShot.textContent = 'x'+this.countSuperShot;
            this.lableSuperShot_shopscr.textContent = this.countSuperShot+'x';

            this.money -= Number(this.SuperShotPrice.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.SuperShotPrice.textContent) + 5 <= 999) {
                this.SuperShotPrice.textContent = Number(this.SuperShotPrice.textContent) + 5;
                if (Number(this.SuperShotPrice.textContent) > 999) {
                    this.SuperShotPrice.textContent = "999";
                }
            }
        }
    }
    useSuperShot = function () {
        if (this.countSuperShot === 0) { return; }

        window.player.isSuperShot = true;

        this.countSuperShot--;
        this.lableSuperShot.textContent = 'x'+this.countSuperShot;
        this.lableSuperShot_shopscr.textContent = this.countSuperShot+'x';
    }

    addTotalShot = function () {
        if (Number(this.money) >= Number(this.TotalShotPrice.textContent)) {
            this.countTotalShot++;
            this.lableTotalShot.textContent = 'x'+this.countTotalShot;
            this.lableTotalShot_shopscr.textContent = this.countTotalShot+'x';

            this.money -= Number(this.SuperShotPrice.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.TotalShotPrice.textContent) + 5 <= 999) {
                this.TotalShotPrice.textContent = Number(this.TotalShotPrice.textContent) + 5;
                if (Number(this.TotalShotPrice.textContent) > 999) {
                    this.TotalShotPrice.textContent = "999";
                }
            }
        }
    }
    useTotalShot = function () 
    {
        if (this.countTotalShot === 0) { return; }

        this.countTotalShot--;
        this.lableTotalShot.textContent = 'x'+this.countTotalShot;
        this.lableTotalShot_shopscr.textContent = this.countTotalShot+'x';
        
        window.game.level.totalShot();
    }

    // DAMAGE
    addDamage1 = function () {
        if (Number(this.money) >= Number(this.Damage1Price.textContent)) {
            window.player.setValueDamage(1);
            this.lableDamage_shopscr.textContent = window.player.damage;

            this.money -= Number(this.Damage1Price.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.Damage1Price.textContent) + 5 <= 999) {
                this.Damage1Price.textContent = Number(this.Damage1Price.textContent) + 5;
                if (Number(this.Damage1Price.textContent) > 999) {
                    this.Damage1Price.textContent = "999";
                }
            }
        }
    }
    addDamage2 = function () {
        if (Number(this.money) >= Number(this.Damage2Price.textContent)) {
            window.player.setValueDamage(5);
            this.lableDamage_shopscr.textContent = window.player.damage;

            this.money -= Number(this.Damage2Price.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.Damage2Price.textContent) + 5 <= 999) {
                this.Damage2Price.textContent = Number(this.Damage2Price.textContent) + 5;
                if (Number(this.Damage2Price.textContent) > 999) {
                    this.Damage2Price.textContent = "999";
                }
            }
        }
    }
    addDamage3 = function () {
        if (Number(this.money) >= Number(this.Damage3Price.textContent)) {
            window.player.setValueDamage(10);
            this.lableDamage_shopscr.textContent = window.player.damage;

            this.money -= Number(this.Damage3Price.textContent);
            this.moneydisplay.textContent = this.money;
            this.shophavemoneydisplay.textContent = this.money;

            if (Number(this.Damage3Price.textContent) + 10 <= 999) {
                this.Damage3Price.textContent = Number(this.Damage3Price.textContent) + 10;
                if (Number(this.Damage3Price.textContent) > 999) {
                    this.Damage3Price.textContent = "999";
                }
            }
        }
    }
    updateUi = function () {
        this.lableEnergy.textContent = 'x'+this.countEnergy;
        this.lableFullEnergy.textContent = 'x'+this.countFullEnergy;
        this.lableSuperShot.textContent = 'x'+this.countSuperShot;
        this.lableTotalShot.textContent = 'x'+this.countTotalShot;
        this.moneydisplay.textContent = this.money;
    }
 }