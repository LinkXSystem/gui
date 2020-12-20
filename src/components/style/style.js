class Style {
    setRadius(value, unit) {
        if (this.element) {
            this.element.style['border-radius'] = `${value}${unit}`;
        }
        return this;
    }

    setShadow(x, y, radius, spread, color, inside, unit) {
        if (this.element) {
            let style = `${x}${unit} ${y}${unit} ${radius}${unit} ${spread}${unit} ${color}`;
            if (inside) {
                style = 'insert' + ' ' + style;
            }
            this.element.style['box-shadow'] = style;
        }
        return this;
    }
}