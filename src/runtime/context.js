import EventBootstrap from './bootstrap.js';

export default class Context {
    constructor() {
        this.bootstrap = new EventBootstrap();
        this.layers = [];
    }

    on(event, listener) {
        this.bootstrap.on(event, listener);
    }

    emit(event, value) {
        this.bootstrap.emit(event, value);
    }

    setLayer(layer) {
        this.layers.push(layer);
    }

    setContext(context) {
        this.context = context;
    }

    getContext() {
        return this.context;
    }
}