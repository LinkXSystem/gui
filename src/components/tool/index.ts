import { Element } from '../../interfaces/element';

import { html } from 'lit-html';
import { Runtime } from '../../runtime';

export class Tool extends Element {
    static register(prefix: string) {
        window.customElements.define(`${prefix}-tool`, Tool);
    }

    static get observedAttributes() {
        return ['command', 'tooltip'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        const tool = shadow?.querySelector('.tool');
        if (tool) {
            this.addEventListener('click', this._handleClick.bind(this));
        }
    }

    attributeChangedCallback(name: string, _o: string, n: string) {
        const shadow = this.shadowRoot;
        const tool = shadow?.querySelector('.tool') as HTMLElement;
        if (tool) {
            // 属性转换
            let _name = name;
            if (['tooltip'].includes(_name)) {
                _name = 'title';
            }

            tool.dataset[name] = n;
        }
    }

    _handleClick(_event: MouseEvent) {
        const shadow = this.shadowRoot;
        const tool = shadow?.querySelector('.tool') as HTMLElement;

        if (tool) {
            let _cache: Record<string, string | number | HTMLElement> = {};

            _cache['node'] = tool;
            _cache['timestamp'] = window.performance.now();

            Array.from(tool.attributes).forEach((item: Attr) => {
                const { name, value } = item;
                _cache[name] = value;
            });

            const runtime = Runtime.getInstance();
            const stack = runtime.getEventStack();
            if (stack) {
                stack.push(_cache)
            };
        }
    }

    _handleInitialStyle(shadow: ShadowRoot) {
        const style = document.createElement('style');
        style.textContent = `
            .tool {
                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;

                width: 32px;
                height: 32px;

                transition: background 0.3s ease-in-out;
            }

            .tool:hover {
                color: #ffffff;
                background: #efefef;
            }
        `;
        shadow.appendChild(style);
    }

    render() {
        return html`
            <div class="tool">
                <slot></slot>
            </div>
        `;
    }
}