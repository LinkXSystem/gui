class Element {
    constructor(label) {
        this.label = label || 'div';
        this.element = document.createElement(this.label);
    }

    // 生命周期方法
    mounted() {
        // console.warn('Mount Stage: ', this.label);
    }

    setStyleSheet(stylesheet) {
        const { element } = this;
        Object.entries(stylesheet).forEach(([key, value]) => {
            element.style[key] = value;
        });
    }

    on(event, callback) {
        const { element } = this;
        element.addEventListener(event, callback);
    }

    remove(event, callback) {
        const { element } = this;
        element.removeEventListener(event, callback);
    }

    render(container) {
        const { element } = this;
        container.appendChild(element);

        {
            this.mounted();
        }

        return element;
    }

    toDSL() {
        const { tagName, attributes } = this.element;

        let temp = [];

        for (let i = 0; i < attributes.length; i++) {
            const attribute = attributes[i];
            const { nodeName, nodeValue } = attribute;
            temp.push({ name: nodeName, value: nodeValue });
        }

        return {
            label: (tagName).toLocaleLowerCase(),
            attributes,
        };
    }
}

export default Element;