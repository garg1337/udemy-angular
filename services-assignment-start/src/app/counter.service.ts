export class CounterService {
    inactiveToActive = 0;
    activeToInactive = 0;

    public activated() {
        this.inactiveToActive++;
        console.log(this.inactiveToActive);
    }

    public unactivated() {
        this.activeToInactive++;
        console.log(this.activeToInactive);
    }
}