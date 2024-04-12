const Shape = require('../Shape');

class Square extends Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth, Width) {
        super(Text, ShapeColor, TextColor, BorderColor, BorderWidth);
        this.Width = Width;
        console.log(`Square width and height set to: ${Width}`);
    }

    render() {
        const TextX = this.Width / 2;
        const TextY = this.Width / 2;
        return `<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <rect width='${this.Width}' height='${this.Width}' fill='${this.ShapeColor}' stroke='${this.BorderColor}' stroke-width='${this.BorderWidth}'/>\n  <text x='${TextX}' y='${TextY}' font-size='100px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='${this.TextColor}'>${this.Text}</text>\n</svg>`;
    }
}

module.exports = Square;