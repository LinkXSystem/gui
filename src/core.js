import { Context } from './runtime/index.js';

import { DrawOptions, Icon } from './constants/editor.option.js';

import {
    Tool,
    Canvas,
    Box
} from './components/index.js';

import { LeftCenterStyleSheet, CenterStyleSheet } from './stylesheets/default-stylesheet.js';
import { ToolStyleSheet, ToolItemStyleSheet, CanvasStyleSheet, MonitorStyleSheet } from './stylesheets/stylesheet.js';

const runtime = new Context();

runtime.on('event', (value) => {
    console.warn("===============================");
    console.warn(value);
    console.warn("===============================");
});

function setTool(container) {
    const tool = new Tool();
    tool.setStyleSheet(Object.assign({}, LeftCenterStyleSheet, ToolStyleSheet));
    tool.render(container);

    for (let i = 0; i < DrawOptions.length; i++) {
        const option = DrawOptions[i]
        tool.setItem({
            text: 'Core',
            icon: Icon(option.icon),
            events: {
                click: (event) => (runtime.emit('event', event))
            },
            stylesheet: ToolItemStyleSheet
        });
    }

    return tool;
}

function setMonitor(container) {
    const monitor = new Box();
    monitor.setStyleSheet(Object.assign({}, MonitorStyleSheet))
    const canvas = new Canvas(640, 480);
    canvas.setStyleSheet(Object.assign({}, {
        width: `${640 * 0.3}px`,
        height: `${480 * 0.3}px`,
        background: '#ffffff'
    }))

    monitor.render(container);
    canvas.render(monitor.element);

    return canvas;
}

function setCanvas(container) {
    const width = 640;
    const height = 640;

    const canvas = new Canvas(width, height, true);

    canvas.setStyleSheet(Object.assign({}, CenterStyleSheet, CanvasStyleSheet));
    canvas.render(container);

    return canvas;
}

function setLayer(container) {
    const layer = new Box();
    // TODO: 是否应该是反向注入
    // container.appendChild(layer);

    return layer;
}

function render(container) {
    setTool(container);

    {
        const monitor = setMonitor(container);
        const canvas = setCanvas(container);

        canvas.setMonitor(monitor);

        runtime.setContext(canvas.getContext());
    }
    setLayer(container);

    {
        const context = runtime.getContext();
        setTimeout(() => {
            context.fillRect(0, 0, 100, 100);
        }, 1000);
    }
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