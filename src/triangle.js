import Shape from './shapes.js';

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor);
    }
    render() {
        const halfHeight = Math.sqrt(3) / 2 * 100;
        return `<polygon points="150,${100 - halfHeight} 50,${100 + halfHeight} 250,${100 + halfHeight}" fill="${this.shapeColor}" />`;
}
}

module.exports = Triangle;
