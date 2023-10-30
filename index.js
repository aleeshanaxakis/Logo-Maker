// Import necessary packages and shape classes
const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./src/circle.js");
const Square = require("./src/square.js");
const Triangle = require("./src/triangle.js");

async function promptUser() {
    // Prompt user for text, text color, shape type, and shape color
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: function(value) {
                if (value.length <= 3) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
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

    fs.writeFileSync("./examples/logo.svg", shape.render());

    // Print a message indicating that 'logo.svg' has been generated
    console.log('Generated logo.svg');
}

// Call the function to prompt the user for input
promptUser();