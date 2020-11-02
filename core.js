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
    }

    on(event, listener) {
        this.bootstrap.on(event, listener);
    }

    emit(event, value) {
        this.bootstrap.emit(event, value);
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

function render(container) {
    setTool(container);
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