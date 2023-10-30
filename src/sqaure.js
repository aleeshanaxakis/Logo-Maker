const Shape = require ("./shapes.js");

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor);
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="200" x="100" y="50" fill="${this.shapeColor}" />
      
        <text x="150" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`;
}
}

module.exports = Square;
