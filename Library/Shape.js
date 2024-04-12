class Shape {
    constructor(Text, ShapeColor, TextColor, BorderColor, BorderWidth) {
        this.Text = Text;
        this.ShapeColor = ShapeColor;
        this.TextColor = TextColor;
        this.BorderColor = BorderColor;
        this.BorderWidth = BorderWidth;
        console.log(`Text set to: ${Text}`);
        console.log(`Shape color set to: ${ShapeColor}`);
        console.log(`Text color set to: ${TextColor}`);
        console.log(`Border color set to: ${BorderColor}`);
        console.log(`Border width set to: ${BorderWidth}`);
    }

    SetText(TextColor, Text) {
        return `<text x='50%' y='50%' font-size='100px' font-weight='700' text-anchor='middle' dominant-baseline='middle' fill='${this.TextColor}'>${this.Text}</text>`;
    }
}

module.exports = Shape;