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

// Radius Validation
const ValidateRadius = (input) => {
    const Radius = parseInt(input);
    if (isNaN(Radius)) {
        return 'Error: Please enter a valid number.';
    }
    if (Radius < 50 || Radius > 200) {
        return 'Error: Radius must be between 50 and 200.';
    }
    return true;
};

// Width Validation
const ValidateWidth = (input) => {
    const Width = parseInt(input);
    if(isNaN(Width)) {
        return 'Error: Please enter a valid number.';
    }
    if(Width < 100 || Width > 400) {
        return 'Error: Width must be between 100 and 400.';
    }
    return true;
};

module.exports = {ValidateColorKey, ValidateColorHex, ValidateBorderWidth, ValidateRadius, ValidateWidth};