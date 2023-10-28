const { Triangle } = require('../src/shapes');

test('Triangle object is created correctly', () => {
    const triangle = new Triangle('pqr', 'blue', 'triangle', 'orange');
    expect(triangle.text).toBe('pqr');
    expect(triangle.shapeType).toBe('triangle');
    // Add more assertions as needed
});

test('Triangle area is calculated correctly', () => {
    const triangle = new Triangle('pqr', 'blue', 'triangle', 'orange', 5, 6); // Assuming base of 5 and height of 6
    expect(triangle.calculateArea()).toBe(15); // Area of a triangle with base 5 and height 6 is 15
    // Add more assertions as needed
});
