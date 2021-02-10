export class Runtime {
    static getInstance() {
        if (!runtime) {
            runtime = new Runtime();
        }

        return runtime;
    }

    private _EventStackCache!: Array<any>;

    constructor() { }

    getEventStack() {
        if (!this._EventStackCache) {
            this._EventStackCache = [];
        }

        return this._EventStackCache;
    }
}

let runtime: Runtime;
