class Shape {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    // Circle-specific properties/methods
}

class Triangle extends Shape {
    // Triangle-specific properties/methods
}

class Square extends Shape {
    // Square-specific properties/methods
}

module.exports = {
    Circle,
    Triangle,
    Square
};