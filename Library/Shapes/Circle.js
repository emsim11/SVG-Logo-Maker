const Shape = require('../Shape');

class Circle extends Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth, Radius) {
        super(Text, ShapeColor, TextColor, BorderColor, BorderWidth);
        this.Radius = Radius;
        console.log(`Circle radius set to: ${Radius}`);
    }

    render() {
        return `<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <circle r='${this.Radius}' cx='250' cy='250' fill='${this.ShapeColor}' stroke='${this.BorderColor}' stroke-width='${this.BorderWidth}'/>\n      ${super.SetText()}\n</svg>`;
    }
}

module.exports = Circle;