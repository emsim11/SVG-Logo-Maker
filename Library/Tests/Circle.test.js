const Circle = require('../Shapes/Circle');

describe('Circle', () => {
    test('Should create a new instance of Circle class', () => {
        const circle = new Circle('EAS', 'blue', 'white', 'black', 5);
        expect(circle.Text).toBe('EAS');
        expect(circle.ShapeColor).toBe('blue');
        expect(circle.TextColor).toBe('white');
        expect(circle.BorderColor).toBe('black');
        expect(circle.BorderWidth).toBe(5);
    });

    test('Should render a circle with the provided text and attributes', () => {
        const circle = new Circle('EAS', 'blue', 'white', 'black', 5);
        expect(circle.render()).toBe("<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <circle r='200' cx='250' cy='250' fill='blue' stroke='black' stroke-width='5'/>\n      <text x='50%' y='50%' font-size='100px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='white'>EAS</text>\n</svg>");
    });
});