import Element from './element/element.js';

import ToolItem from './tool-item.js';

export default class Tool extends Element {
    constructor() {
        super();

        this.items = [];
    }

    setItem({ text, icon, events, stylesheet }) {
        const item = new ToolItem();
        item.setText(text);
        item.setIcon(icon);
        item.setStyleSheet(stylesheet);
        Object.entries(events).forEach(([name, callback]) => {
            item.on(name, callback);
        });

        item.render(this.element);

    }
}