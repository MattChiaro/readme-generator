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
    }, {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Do you have any notes for installation?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'What about usage info?',
    }, {    
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    }, {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
    }, { 
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    }, {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    const { car } = await inquirer.prompt(questions);

    console.log(car);

}

// Function call to initialize app
init();
