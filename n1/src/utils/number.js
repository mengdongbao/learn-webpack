import isPrime from './isPrime';

export default class NumberTimer {
    constructor(duration=500) {
        this.duration = duration;
        this.number = 1; // 当前数字
        this.onNumberCreated = null;
        this.timerID = null;
    }


    start(cb) {
        if (Number.isInteger(this.timerID)) {
            return;
        }
        setInterval(() => {
            this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number));
            this.number++;
        }, this.duration);
    }
    stop() {

    }
}