// inquirer package
const inquirer = require('inquirer');
// jest package
const jest = require('jest');
// file system module
const fs = require('fs');
// import Classes
const {Circle, Square, Triangle} = require('./lib/shapes');

// imports maxLength for prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

function generateLogo(response) {

    let shape;
    switch (response.shapes) {
        case 'Circle':
            shape = new Circle(response.shapes, response.shapeColor, response.text, response.textColor);
            break;
        case 'Triangle':
            shape = new Triangle(response.shapes, response.shapeColor, response.text, response.textColor);
            break;
        case 'Square':
            shape = new Square(response.shapes, response.shapeColor, response.text, response.textColor);
            break;
        default:
            throw new Error("Invalid shape choice.");
    }
    return shape.getSVG();
}

function generateToFile(fileName, logoImage) {
    fs.writeFileSync(fileName, logoImage);
    console.log(`The logo has been generated to this file ${fileName}`);
}

// array of questions that takes user input
const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Please enter three characters:',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color name OR a hex number for text color:'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Please choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color keyword OR hex number for the shape color: '
    },
]


// function to initialize the app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const logoImage = generateLogo(response);
        generateToFile('logo.svg', logoImage);
    })
    .catch((err) => {
        console.error(err);
    });
}

init();