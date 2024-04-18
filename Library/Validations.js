// Color Keywords Validation
const ValidateColorKey = (input, ColorKeywords) => {
    if(ColorKeywords.includes(input.toLowerCase())) {
        return true;
    } else {
        return `Error: Please enter a valid color keyword from: ${ColorKeywords.join(', ')}.`;
    }
};

// Hexadecimal Numbers Validation
const ValidateColorHex = (input, HexRegEx) => {
    if(HexRegEx.test(input)) {
        return true;
    } else {
        return 'Error: Please enter a valid [hexadecimal number](https://htmlcolorcodes.com).'
    }
};

// Border Width Validation
const ValidateBorderWidth = (input) => {
    const Border = parseInt(input);
    if(isNaN(Border)) {
        return 'Error: Please enter a valid number.';
    }
    if(Border < 0 || Border > 15) {
        return 'Error: Border width must be between 0 and 15.';
    }
    return true;
};

module.exports = {ValidateColorKey, ValidateColorHex, ValidateBorderWidth};