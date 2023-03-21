export class SaveSlot {
    constructor()
    {
        this.level = 1;
        this.date_and_time = new Date();
        this.player_hp = 200;
        this.player_damage = 10;
        this.shots = 0;
        this.smallDestroyed = 0;
        this.mediumDestroyed = 0;
        this.largeDestroyed = 0;

        this.countEnergy = 0;
        this.countFullEnergy = 0;
        this.countSuperShot = 0;
        this.countTotalShot = 0;

        this.money = 0;
    }
}