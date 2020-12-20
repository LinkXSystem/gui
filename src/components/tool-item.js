import Element from './element/element.js';

import Icon from './icon.js';

export default class ToolItem extends Element {
    constructor() {
        super();
    }

    setText() {
        return this;
    }

    setIcon(name) {
        const { element } = this;

        if (element) {
            const icon = new Icon();
            icon.setClassName(name);
            icon.render(element);
        }

        return this;
    }
}