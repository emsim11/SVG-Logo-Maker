const { ValidateColorKey, ValidateColorHex, ValidateBorderWidth, ValidateRadius, ValidateWidth } = require('./Validations');
const ColorKeywords = require('./ColorKeywords');
const HexRegEx = /^#?([0-9A-Fa-f]{3}){1,2}$/;

const Questions = [
    {
        name: 'ShapeType',
        type: 'list',
        message: 'What shape would you like the logo to render as?',
        choices: ['Circle', 'Square', 'Triangle'],
    }, {
        name: 'Text',
        type: 'input',
        message: 'What text would you like to display within the logo? (3 Characters Maximum)',
        validate: (Text) => 
            Text.length <= 3 || 
            'Error: Text must be three characters or less.',
    }, {
        name: 'ColorFormat',
        type: 'list',
        message: 'Which color format would you like to use to enter the colors for the logo?',
        choices: ['Color Keyword (lightpink)', 'Hexadecimal Number (#FFFFFF)'],
    }, {
        name: 'ShapeColor',
        type: 'input',
        message: 'Enter a color keyword to use for the shape background color of the logo:',
        when: (answers) => answers.ColorFormat === 'Color Keyword (lightpink)',
        validate: input => ValidateColorKey(input, ColorKeywords),
    }, {
        name: 'ShapeColor',
        type: 'input',
        message: 'Enter a hexadecimal number to use for the shape background color of the logo:',
        when: (answers) => answers.ColorFormat === 'Hexadecimal Number (#FFFFFF)',
        validate: input => ValidateColorHex(input, HexRegEx),
    }, {
        name: 'TextColor',
        type: 'input',
        message: 'Enter a color keyword to use for the text color of the logo:',
        when: (answers) => answers.ColorFormat === 'Color Keyword (lightpink)',
        validate: input => ValidateColorKey(input, ColorKeywords),
    }, {
        name: 'TextColor',
        type: 'input',
        message: 'Enter a hexadecimal number to use for the text color of the logo:',
        when: (answers) => answers.ColorFormat === 'Hexadecimal Number (#FFFFFF)',
        validate: input => ValidateColorHex(input, HexRegEx),
    }, {
        name: "BorderColor",
        type: 'input',
        message: 'Enter a color keyword to use for the shape border color of the logo:',
        when: (answers) => answers.ColorFormat === 'Color Keyword (lightpink)',
        validate: input => ValidateColorKey(input, ColorKeywords),
    }, {
        name: "BorderColor",
        type: 'input',
        message: 'Enter a hexadecimal number to use for the shape border color of the logo:',
        when: (answers) => answers.ColorFormat === 'Hexadecimal Number (#FFFFFF)',
        validate: input => ValidateColorHex(input, HexRegEx),
    }, {
        name: "BorderWidth",
        type: 'number',
        message: 'What thickness would you like the shape border to be set to? (Value Between 0-15)',
        validate: (input) => ValidateBorderWidth(input),
    },
];

module.exports = Questions;