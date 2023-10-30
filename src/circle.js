import { Circle } from './shapes.js';

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />`;
    }
}

module.exports = Circle;
