// inquirer package
const inquirer = require('inquirer');
// jest package
const jest = require('jest');
// file system module
const fs = require('fs');
// import Classes
const {Circle, Square, Triangle} = require('./lib/shapes');

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

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
        fs.generateToFile('logo.svg', logoImage, (err) => err ? console.error(err): console.log('The logo has been sucessfully generated to the file!')
        );

        // response.text
        if (response.shapes === "Triangle") {
            let triangle = new Triangle (`${this.Triangle}`, `${this.shapeColor}`, `${this.text}`, `${this.textColor}`);
            fs.writeFileSync('example.svg', triangle.getSVG());
    }
            // call getShape()?
// fs.writeFileSync('example.svg', triangle.getSVG());
// response.shape
        // }
        // in the .then, incorporate the inquirer responses from the user when they answer the questions
        // the response.shape, response.text would be the users responses


    });

}

let triangle = new Triangle (`${this.Triangle}`, `${this.shapeColor}`, `${this.text}`, `${this.textColor}`);
// let triangle = new Triangle ('Triangle', 'red', 'ABC', 'white');
fs.writeFileSync('example.svg', triangle.getSVG());

// function call to initialize the app
init();
