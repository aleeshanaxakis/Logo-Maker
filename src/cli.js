const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const SVG = require('svg.js');

async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: function(value) {
                // Validate text input (up to three characters)
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
            validate: function(value) {
                // Validate color input (keyword or hex)
            }
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
            validate: function(value) {
                // Validate color input (keyword or hex)
            }
        }
    ]);

    let shape;
    switch (userInput.shapeType) {
        case 'circle':
            shape = new Circle(userInput.text, userInput.textColor, 'circle', userInput.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(userInput.text, userInput.textColor, 'triangle', userInput.shapeColor);
            break;
        case 'square':
            shape = new Square(userInput.text, userInput.textColor, 'square', userInput.shapeColor);
            break;
    }

    // Create SVG file and draw shape
    const draw = SVG().size(300, 200);
    let svgShape;
    if (shape.shapeType === 'circle') {
        svgShape = draw.circle(100).attr({
            fill: shape.shapeColor,
            cx: 150,
            cy: 100
        });
    } else if (shape.shapeType === 'triangle') {
        // Draw triangle logic
    } else if (shape.shapeType === 'square') {
        // Draw square logic
    }

    // Save SVG to a file named 'logo.svg'
    draw.svgToFile('logo.svg');

    console.log('Generated logo.svg');
}

promptUser();