const Circle = require('./Shapes/Circle');
const Square = require('./Shapes/Square');
const Triangle = require('./Shapes/Triangle');

function SetShape(answers) {
    if(answers.ShapeType === 'Circle') {
        let UserShape = new Circle(answers.Text, answers.ShapeColor, answers.TextColor, answers.BorderColor, answers.BorderWidth, answers.Radius);
        return UserShape.render();
    }

    if(answers.ShapeType === 'Square') {
        let UserShape = new Square(answers.Text, answers.ShapeColor, answers.TextColor, answers.BorderColor, answers.BorderWidth, answers.Width);
        return UserShape.render();
    }

    if(answers.ShapeType === 'Triangle') {
        let UserShape = new Triangle(answers.Text, answers.ShapeColor, answers.TextColor, answers.BorderColor, answers.BorderWidth);
        return UserShape.render();
    }
};

module.exports = SetShape