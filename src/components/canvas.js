import Element from './element/element.js';
import ProxyLibrary from '../libs/proxy.js';

const DefaultLabel = 'canvas';

export default class Canvas extends Element {
    constructor(width, height, isProxy = false) {
        super(DefaultLabel);

        this.width = width;
        this.height = height;

        this.isProxy = isProxy;
    }

    mounted() {
        this.element.width = this.width;
        this.element.height = this.height;

        if (this.isProxy) {
            const { element } = this;

            const self = this;

            const context = element.getContext('2d');

            this.context = ProxyLibrary.builder(context, {
                callback: function (target, method, paramter) {
                    if (method !== 'getImageData') {
                        self.toImageData();
                    }
                }
            });
        }
    }

    getContext() {
        const { element } = this;

        if (!this.context) {
            this.context = element.getContext('2d');
        }

        return this.context;
    }

    setConvolution() {
        return this;
    }

    setMonitor(monitor) {
        this.monitor = monitor;
    }

    toImageData() {
        if (this.context && this.monitor) {
            const { width, height } = this;
            console.warn(width, height);

            const frame = this.context.getImageData(0, 0, width, height);
            console.warn(frame);
            this.monitor.getContext('2d').putImageData(frame, 0, 0);
            // this.monitor.getContext('2d').fillRect(10, 10, 100, 100);   
        }
    }

}