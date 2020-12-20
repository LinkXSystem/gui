// TODO: 如何对 DOM 实现不同的监控。监控输出的格式是否能保持一致
class Observer {
    constructor(container) {
        this.container = container;

        this.config = { attributes: true, childList: true, subtree: true };
    }

    observe(callback) {
        this.listener = new MutationObserver(callback);
        this.isObserve = true;

        const { container, config } = this;
        this.listener.observe(container, config);
    }

    disconnect() {
        this.listener.disconnect();
    }
}

export default Observer;