/**
 * 
 * @author zhi
 * @description 参考文档：https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js
 * 
 */

import { render } from 'lit-html';

import { Primitive } from "./primitive";
import { Style } from "./style";

export class Element extends HTMLElement {
    static register(prefix: string) {
        window.customElements.define(`${prefix}-element`, Element);
    }

    primitive!: Primitive;
    sheet!: Style;

    element!: HTMLElement;

    constructor() {
        super();

        // render method
        this._render();
    }

    /**
     * @description 当 custom element首次被插入文档DOM时，被调用
     */
    connectedCallback() {
        console.warn('the unimplemented function: connectedCallback ！');
    }

    /**
     * @description 当 custom element从文档DOM中删除时，被调用
     */
    disconnectedCallback() {
        console.warn('the unimplemented function: disconnectedCallback ！');
    }

    /**
     * @description 当 custom element被移动到新的文档时，被调用
     */
    adoptedCallback() {
        console.warn('the unimplemented function: adoptedCallback ！');
    }

    /**
     * @description 当 custom element增加、删除、修改自身属性时，被调用
     */
    attributeChangedCallback(_name: string, _o: string, _n: string) {
        console.warn('the unimplemented function: attributeChangedCallback ！');
    }

    _handleInitialStyle(shadow: ShadowRoot) {
        const style = document.createElement('style');
        shadow.appendChild(style);
    }

    _render() {
        const shadow = this.attachShadow({ mode: 'open' });
        const element = document.createElement('div');
        shadow.appendChild(element);

        this._handleInitialStyle(shadow);

        // TODO: how to get the dom ?
        // @ts-ignore
        const dom = this.render();

        this.element = element;

        this.primitive = new Primitive(element)
        this.sheet = new Style(element);

        // @ts-ignore
        if (dom) {
            render(dom, element);
        }
    }

    render() { }
}