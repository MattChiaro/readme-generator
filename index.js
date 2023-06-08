// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

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
        message: 'What do people need to do to use your project?',
    }, {
        type: 'input',
        name: 'contribution',
        message: 'If people want to contribute, what should they know?',
    }, {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
    }, {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: [{
            name: 'MIT',
            value: {
                name: 'MIT',
                badgeID: "MIT",
                link: 'https://opensource.org/licenses/MIT'
            },
        }, {
            name: 'Apache',
            value: {
                name: 'Apache',
                badgeID: "Apache_2.0",
                link: 'https://opensource.org/licenses/Apache-2.0'
            },
        }, {
            name: 'GNU',
            value: {
                name: 'GNU',
                badgeID: "GPLv3",
                link: 'https://www.gnu.org/licenses/gpl-3.0'
            }
        }, {
            name: 'none',
            value: {
                name: 'none',
                badgeID: "none",
                link: 'none'
            }
        }]
        ,
    }, {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }, {
        type: 'list',
        name: 'collaborators',
        message: 'did you have any collaborators?',
        choices: ['Yes', 'No'],
    }, {
        type: 'input',
        name: 'collaboratorNames',
        message: 'Please list your collaborators.',
        when: (answers) => answers.collaborators === 'Yes'
    }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers);
        })

}

// Function call to initialize app
init();

