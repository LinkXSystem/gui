/**
 * @description Primitive 仅负责描述，控制变换的一系列方法，不应被直接使用
 */

class Primitive {
    // TODO: 通用方法应该构建成为矩阵之后统一调用
    rotate(axis, degree) {
        this.matrix();
    }

    scale() {
        return this;
    }

    translate() {
        return this;
    }

    skew() {
        return this;
    }

    matrix(m) {
        // 二维平面的矩阵是 3 x 3 数组实现
        const temp = m || new Array(9).fill(0);
        if (this.element) {
            const t = temp.join(', ');
            this.element.style.transform = `matrix(${t})`;
        }

        return this;
    }

    animation(func) {
        requestAnimationFrame(this.animation);
    }
}

export default Primitive;