const Circle = require('../src/circle.js');

test('Circle object is created correctly', () => {
    const circle = new Circle('abc', 'red', 'circle', 'blue');
    expect(circle.text).toBe('abc');
    expect(circle.shapeType).toBe('circle');
    // Add more assertions as needed
});