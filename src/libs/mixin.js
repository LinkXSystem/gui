/**
 * 
 * @description 基于 Mixin 实现复数继承的功能
 *              参考文档：
 *                      http://es6-features.org/#ClassInheritanceFromExpressions
 *                      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

const aggregation = (BaseClass, ...mixins) => {
    let _target = class _Combined extends BaseClass {
        constructor(...args) {
            super(...args)

            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this)
            });
        }
    }

    let inlineCopyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {

                if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
                    return;
                }

                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            });
    }

    mixins.forEach((mixin) => {
        inlineCopyProps(_target.prototype, mixin.prototype)
        inlineCopyProps(_target, mixin)
    });

    return _target
}