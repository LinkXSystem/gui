import Element from './element/element.js';
import Primitive from './primitive/primitive.js';
import Style from './style/style.js';

import Mixin from '../libs/mixin.js';

export default class Square extends Mixin(Element, Primitive, Style) {
    constructor() {
        super();
    }
} 