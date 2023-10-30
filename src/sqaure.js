const Shape = require ("./shapes.js");

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor);
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
}
}

module.exports = Square;
