/**
 * 
 * @author zhi
 * @description 参考文档：https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js
 * 
 */

export class Element extends HTMLElement {
    constructor() {
        super();

        // render method
        this.render();
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
    attributeChangedCallback() {
        console.warn('the unimplemented function: attributeChangedCallback ！');
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }
}