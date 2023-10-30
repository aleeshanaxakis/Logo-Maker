const Shape = require ("./shapes.js");

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor);
    }
    render() {
        const halfHeight = Math.sqrt(3) / 2 * 100;
        return ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon width="300" height="200" points="150,${100 - halfHeight} 50,${100 + halfHeight} 250,${100 + halfHeight}" fill="${this.shapeColor}" />
      
        <text x="150" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
}
}

module.exports = Triangle;
