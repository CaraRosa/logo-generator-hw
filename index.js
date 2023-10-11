// inquirer package
const inquirer = require('inquirer');
// jest package
const jest = require('jest');
// file system module
const fs = require('fs');

// array of questions that takes user input
const questions = [
    {
            type: 'input',
            name: 'text',
            message: 'Please enter three characters:'
    },
    {
        type: 'input',
        name: 'text-color',
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
        name: 'shape-color',
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
    });
}

// function call to initialize the app
init();