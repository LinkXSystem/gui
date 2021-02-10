import { Element } from "./interfaces/element";

export function register(prefix: string, target: Element | Array<Element>, callback: Function) {
    // window.customElements.get 可以判断 CustomElement 是否已经注册
    if (target instanceof Array) {
        target.forEach(item => {
            // @ts-ignore
            item.register(prefix);
        });
    } else {
        // @ts-ignore
        target.register();
    }


    if (callback) {
        callback();
    }

}