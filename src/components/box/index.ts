import { Element } from '../../interfaces/element';

import { html } from 'lit-html';

export class Box extends Element {
    static register(prefix: string) {
        window.customElements.define(`${prefix}-box`, Box);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const func = this.getAttribute('onRef');
        console.warn(func);
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}