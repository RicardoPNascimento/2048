export default class Table {
    constructor() {
        this.rows = 4;
        this.cols = 4;
        this.score = 0;
        this.table = new Array(this.rows).fill(null).map(() => new Array(this.cols).fill(null));
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    triggerListeners(listeners) {
        listeners.forEach(listener => listener(this));
    }

    initGame() {
        this.triggerListeners(this.listeners);
    }
}
