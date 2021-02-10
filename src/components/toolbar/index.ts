import { Element } from '../../interfaces/element';

import { html } from 'lit-html';

export class Toolbar extends Element {
    static register(prefix: string) {
        window.customElements.define(`${prefix}-toolbar`, Toolbar);
    }

    static get observedAttributes() {
        return ['position'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const func = this.getAttribute('onRef');
        console.warn(func);
    }

    attributeChangedCallback(name: string, _o: string, n: string) {
        switch (name) {
            case 'position': {
                this._handleUpdatePosition(n);
                break;
            }
            default:
        }
    }

    _handleUpdatePosition(position: string) {
        const shadow = this.shadowRoot;
        if (shadow) {
            const toolbar = shadow.querySelector('.toolbar');
            const content = shadow.querySelector('.content');
            if (toolbar?.classList && toolbar.classList.length > 1) {
                toolbar.classList.remove(toolbar.classList[toolbar.classList.length - 1]);
            }
            if (content?.classList && content.classList.length > 1) {
                content.classList.remove(content.classList[content.classList.length - 1]);
            }
            toolbar?.classList.add(position);
            content?.classList.add(position);
        }

    }

    _handleInitialStyle(shadow: ShadowRoot) {
        const style = document.createElement('style');
        style.textContent = `
            .toolbar {
                position: absolute;

                min-width: 32px;
                min-height: 32px;

                border-radius: 4px 4px 4px 4px;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
            }

            .toolbar.top {
                top: 0.5em;
                left: 50%;
                transform: translateX(-50%);

                align-items: center;
                justify-content: center;

                padding: 0 1.25em;
            }

            .toolbar.left {
                top: 50%;
                left: 0.5em;
                transform: translateY(-50%);

                flex-direction: column;
            }

            .toolbar.right {
                top: 50%;
                right: 0.5em;
                transform: translateY(-50%);

                flex-direction: column;
            }

            .control {
                cursor: move;

                width: auto;
                height: 6px;

                margin: 4px 2px 4px 2px;

                background: #efefef;
                border-radius: 3px 3px 3px 3px;
            }

            .content {
                display: flex;
            }

            .content.top {
                align-items: center;
                justify-content: center;
            }

            .content.left {
                flex-direction: column;
            }

            .content.right {
                flex-direction: column;
            }
        `;
        shadow.appendChild(style);
    }

    render() {
        return html`
            <div class="toolbar top">
                <div class="control"></div>
                <div class="content top">
                    <slot><slot>
                </div>
            </div>
        `;
    }
}