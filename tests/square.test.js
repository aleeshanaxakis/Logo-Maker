const { Square } = require('../src/shapes');

test('Square object is created correctly', () => {
    const square = new Square('xyz', 'green', 'square', 'yellow');
    expect(square.text).toBe('xyz');
    expect(square.shapeType).toBe('square');
    // Add more assertions as needed
});

test('Square area is calculated correctly', () => {
    const square = new Square('xyz', 'green', 'square', 'yellow', 4); // Assuming a side length of 4
    expect(square.calculateArea()).toBe(16); // Area of a square with side length 4 is 16
    // Add more assertions as needed
});
