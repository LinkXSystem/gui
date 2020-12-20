import Element from './element/element.js';

const DefaultLabel = 'i';

export default class Icon extends Element {
    constructor() {
        super(DefaultLabel);
    }

    // TODO: 需要考虑删除的方法
    setClassName(name) {
        const { element } = this;
        element.setAttribute('class', name);
    }
}