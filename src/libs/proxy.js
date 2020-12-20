function setHookDefaultFunction(target, property, callback) {
    return function () {
        const temp = target[property].call(target, ...arguments);

        try {
            callback(target, property, [...arguments]);
        } catch (error) {
            console.warn('the error of hook', error);
        }

        return temp;
    };
}

function getProxyHandler(callback) {
    return {
        get: function (target, key, receiver) {
            const value = Reflect.get(target, key, receiver);

            if (typeof value === 'function') {
                return setHookDefaultFunction(target, key, callback);
            }

            return value;
        },
        set: function (target, key, value, receiver) {
            return Reflect.set(target, key, value, receiver);
        },
    };

}

function builder(target, {
    handler,
    callback
}) {
    return new Proxy(target, handler || getProxyHandler(callback));
}


export default {
    builder
}