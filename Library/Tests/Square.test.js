const Square = require('../Shapes/Square');

describe('Square', () => {
    test('Should create a new instance of Square class', () => {
        const square = new Square('EAS', 'lightpink', 'black', 'pink', 3, 200);
        expect(square.Text).toBe('EAS');
        expect(square.ShapeColor).toBe('lightpink');
        expect (square.TextColor).toBe('black');
        expect(square.BorderColor).toBe('pink');
        expect(square.BorderWidth).toBe(3);
        expect(square.Width).toBe(200);
    });
    test('Should render a square with the provided attributes and text', () => {
        const square = new Square('EAS', 'lightpink', 'black', 'pink', 3, 200);
        expect(square.render()).toBe("<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <rect width='200' height='200' fill='lightpink' stroke='pink' stroke-width='3'/>\n  <text x='100' y='100' font-size='100px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='black'>EAS</text>\n</svg>");
    });
});