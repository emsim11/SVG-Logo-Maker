const Shape = require('../Shape');

class Circle extends Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth) {
        super(Text, ShapeColor, TextColor, BorderColor, BorderWidth);
    }

    render() {
        return `<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <circle r='200' cx='250' cy='250' fill='${this.ShapeColor}' stroke='${this.BorderColor}' stroke-width='${this.BorderWidth}'/>\n      ${super.SetText()}\n</svg>`;
    }
}

module.exports = Circle;