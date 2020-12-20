class CanvasAction {
    constructor(method, parameter, timestamp) {
        this.method = method;
        this.parameter = parameter;
        this.timestamp = timestamp;
    }

    toSerialize() {
        const { method, parameter, timestamp } = this;
        return [method, parameter, timestamp];
    }
}

export {
    CanvasAction
}