// Import necessary packages and shape classes
import inquirer from 'inquirer';
import SVG from 'svg.js';
import Circle from './src/circle.js';
import Square from './src/sqaure.js';
import Triangle from './src/triangle.js';

// Function to prompt user for input
async function promptUser() {
    // Prompt user for text, text color, shape type, and shape color
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: function(value) {
                // TODO: Validate text input (up to three characters)
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
            validate: function(value) {
                // TODO: Validate color input (keyword or hex)
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
                // TODO: Validate color input (keyword or hex)
            }
        }
    ]);

    // Create the corresponding shape object based on user input
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

    // Create an SVG canvas
    const draw = SVG().size(300, 200);

    // Draw the selected shape on the canvas based on user input
    let svgShape;
    if (shape.shapeType === 'circle') {
        // Draw circle
        svgShape = draw.circle(100).attr({
            fill: shape.shapeColor,
            cx: 150,
            cy: 100
        });
    } else if (shape.shapeType === 'triangle') {
        // Draw triangle 
        const halfHeight = Math.sqrt(3) / 2 * 100;
        svgShape = draw.polygon(`${150},${100 - halfHeight} ${50}, ${100 + halfHeight} ${250}, ${100 + halfHeight}`)
            .attr({
                fill: shape.shapeColor
            });
    } else if (shape.shapeType === 'square') {
        // Draw square 
        svgShape = draw.rect(100, 100).attr({
            fill: shape.shapeColor,
            x: 100,
            y: 50
        });
    }

    // Save the SVG canvas to a file named 'logo.svg'
    draw.svgToFile('logo.svg');

    // Print a message indicating that 'logo.svg' has been generated
    console.log('Generated logo.svg');
}

// Call the function to prompt the user for input
promptUser();