class Shape {
    constructor(text, textColor, shapeType, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }

    render() {
        // Implement the rendering logic for each shape in the subclasses
        // This method will be overridden by the subclasses (Circle, Square, Triangle)
    }
}

module.exports = Shape;