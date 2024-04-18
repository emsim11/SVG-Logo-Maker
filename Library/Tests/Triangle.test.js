const Triangle = require('../Shapes/Triangle');

describe('Triangle', () => {
    test('Should create a new instance of Triangle class', () => {
        const triangle = new Triangle('EAS', '#f54281', '#ebced8', '#424041', 2, 'EAS');
        expect(triangle.Text).toBe('EAS');
        expect(triangle.ShapeColor).toBe('#f54281');
        expect (triangle.TextColor).toBe('#ebced8');
        expect(triangle.BorderColor).toBe('#424041');
        expect(triangle.BorderWidth).toBe(2);
    });
    test('Should render a triangle with the provided attributes and text', () => {
        const triangle = new Triangle('EAS', '#f54281', '#ebced8', '#424041', 2);
        expect(triangle.render()).toBe("<svg version='1.1' width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n  <polygon points='200, 10 10, 350 420, 350' fill='#f54281' stroke='#424041' stroke-width='2'/>\n  <text x='40%' y='40%' font-size='80px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='#ebced8'>EAS</text>\n</svg>");
    });
});