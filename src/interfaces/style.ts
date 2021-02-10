export class Style {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    setStyle(style: Record<string, number | string>) {
        Object.entries(style).forEach((entry) => {
            const [key, value] = entry;
            // @ts-ignore
            this.element.style[key] = value;
        });
    }
}