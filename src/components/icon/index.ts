import { Element } from '../../interfaces/element';

import { html } from 'lit-html';

export class Icon extends Element {
    static register(prefix: string) {
        window.customElements.define(`${prefix}-icon`, Icon);
    }

    static get observedAttributes() {
        return ['prefix', 'icon'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const func = this.getAttribute('onRef');
        console.warn(func);
    }

    attributeChangedCallback(_name: string, _o: string, n: string) {
        const shadow = this.shadowRoot;
        if (shadow) {
            const dom = shadow.querySelector('.icon');
            dom?.classList.add(n);
        }
    }

    render() {
        return html`
            <i class="icon">add</i>
        `;
    }
}