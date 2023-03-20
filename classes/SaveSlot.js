export class SaveSlot {
    constructor()
    {
        this.level = 1;
        this.date_and_time = new Date();
        this.player_hp = 200;
        this.shots = 0;
        this.smallDestroyed = 0;
        this.mediumDestroyed = 0;
        this.largeDestroyed = 0;

        this.countEnergy = 4;
        this.countFullEnergy = 3;
        this.countSuperShot = 2;
        this.countTotalShot = 1;

        this.money = 0;
    }
}