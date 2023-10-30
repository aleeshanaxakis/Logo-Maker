const Triangle = require('../src/triangle.js');

test('Triangle object is created correctly', () => {
    const triangle = new Triangle('pqr', 'blue', 'triangle', 'orange');
    expect(triangle.text).toBe('pqr');
    expect(triangle.shapeType).toBe('triangle');
    // Add more assertions as needed
});

