const Square = require('../src/square.js');

test('Square object is created correctly', () => {
    const square = new Square('xyz', 'green', 'square', 'yellow');
    expect(square.text).toBe('xyz');
    expect(square.shapeType).toBe('square');
    // Add more assertions as needed
});
