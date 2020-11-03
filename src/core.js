class EventBootstrap {
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

class Context {
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
}

const context = new Context();
context.on('event', (value) => {
    console.warn("===============================");
    console.warn(value);
    console.warn("===============================");
});

function setTool(container) {
    const tool = document.createElement('div');
    tool.style.position = 'fixed';
    tool.style.top = '50%';
    tool.style.transform = 'translateY(-50%)';

    tool.style.minWidth = '36px';
    tool.style.minHeight = '120px';
    tool.style.background = 'rgb(37, 37, 38)';

    container.appendChild(tool);

    for (let i = 0; i < 20; i++) {
        setToolItem(tool);
    }

    return tool;
}

function setToolItem(container) {
    const item = document.createElement('div');
    item.style.height = '36px';
    item.style.background = 'transparent';

    container.appendChild(item);

    item.addEventListener('click', (event) => {
        context.emit('event', event);
    });
}

function setCanvas(container) {
    const canvas = document.createElement('canvas');
    canvas.style.width = '640px';
    canvas.style.height = '480px';

    canvas.width = 640;
    canvas.height = 480;

    canvas.style.boxShadow = '0px 0px 10px 0px rgb(30, 30, 30)';
    canvas.style.position = 'fixed';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';

    const context = canvas.getContext('2d');

    context.arc(200 * Math.random(), 200 * Math.random(), 20, Math.PI / 180 * 0, Math.PI / 180 * 360, true);
    context.stroke();

    container.appendChild(canvas);

    return canvas;
}

function setMonitor(container) {
    const monitor = document.createElement('div');
    const canvas = document.createElement('canvas');
    monitor.appendChild(canvas);

    monitor.style.position = 'fixed';
    monitor.style.bottom = '1em';
    monitor.style.right = '2em';
    monitor.style.background = 'rgb(30, 30, 30)';

    container.appendChild(monitor);

    return monitor;
}

function setLayer(container) {
    const layer = document.createElement('div');
    layer.style.position = 'fixed';
    layer.style.right = '0px';
    layer.style.top = '50%';
    layer.style.transform = 'translateY(-50%)';

    layer.style.minWidth = '72px';
    layer.style.minHeight = '360px';
    layer.style.background = 'rgb(37, 37, 38)';

    container.appendChild(layer);

    return layer;
}

function render(container) {
    setTool(container);
    {
        setCanvas(container);
        setCanvas(container);
        setCanvas(container);
        setCanvas(container);
    }
    setMonitor(container);
    setLayer(container);
}

(function () {
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.dataset['uuid'] = Date.now();
    container.dataset['type'] = 'container';

    render(
        container
    );
})();