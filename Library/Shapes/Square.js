const Shape = require('../Shape');

class Square extends Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth, Width) {
        super(Text, ShapeColor, TextColor, BorderColor, BorderWidth);
    }

    render() {
        return `<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <rect width='400' height='400' fill='${this.ShapeColor}' stroke='${this.BorderColor}' stroke-width='${this.BorderWidth}'/>\n  <text x='200' y='200' font-size='100px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='${this.TextColor}'>${this.Text}</text>\n</svg>`;
    }
}

module.exports = Square;