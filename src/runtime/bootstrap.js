export default class EventBootstrap {
    constructor() {
        this.stack = new Map();
    }

    on(event, listener) {
        const target = this.stack.get(event);

        const listeners = target ? target : new Array();
        listeners.push(listener);
        this.stack.set(event, listeners)
    }

    emit(event, value) {
        const target = this.stack.get(event);
        if (target) {
            target.forEach(callback => {
                callback(value);
            });
        }
    }
}