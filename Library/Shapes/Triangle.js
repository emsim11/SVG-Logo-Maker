const Shape = require('../Shape');

class Triangle extends Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth) {
        super(Text, ShapeColor, TextColor, BorderColor, BorderWidth);
    }

    render() {
        return `<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <polygon points='200, 10 10, 350 420, 350' fill='${this.ShapeColor}' stroke='${this.BorderColor}' stroke-width='${this.BorderWidth}'/>\n  <text x='40%' y='45%' font-size='80px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='${this.TextColor}'>${this.Text}</text>\n</svg>`;
    }
}

module.exports = Triangle;