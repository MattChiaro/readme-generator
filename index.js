// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        choices: [{
            name: 'Ford',
            value: {
                make: 'Ford',
                model: 'F150',
                year: 2019
            }
        }, {
            name: 'Chevy',
            value: {
                make: 'Chevy',
                model: 'Silverado',
                year: 2009
            }
        }, {
            name: 'Dodge',
            value: {
                make: 'Dodge',
                model: 'Ram',
                year: 2005
            }
        }, {
            name: 'Toyota',
            value: {
                make: 'Toyota',
                model: 'Tacoma',
                year: 2015
            }
        }, {
            name: 'Honda',
            value: {
                make: 'Honda',
                model: 'Ridgeline',
                year: 2018
            }
        }
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    const {car} = await inquirer.prompt(questions);

    console.log(car);
   

    //console.log('Hello World');
}

// Function call to initialize app
init();
