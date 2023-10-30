const Shape = require ("./shapes.js");

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor);
    }

    render() {
        return ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle width="300" height= "200" cx="150" cy="100" r="50" fill="${this.shapeColor}" />
      
        <text x="150" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg> `;
    }
}

module.exports = Circle;
