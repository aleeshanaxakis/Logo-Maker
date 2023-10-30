const { Circle } = require('../src/shapes');

test('Circle object is created correctly', () => {
    const circle = new Circle('abc', 'red', 'circle', 'blue');
    expect(circle.text).toBe('abc');
    expect(circle.shapeType).toBe('circle');
    // Add more assertions as needed
});