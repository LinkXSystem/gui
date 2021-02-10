export class Primitive {
    element!: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element
    };

    rotate() { }

    scale() { }

    translate() { }

    skew() { }

    matrix(m: Array<number>) {
        // 二维平面的矩阵是 3 x 3 数组实现
        const temp = m || new Array(9).fill(0);
        if (this.element) {
            const t = temp.join(', ');
            this.element.style.transform = `matrix(${t})`;
        }

        return this;
    }
}