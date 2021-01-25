// TODO: Include packages needed for this application

const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'Usage information: ',
        name: 'usageInformation'
    },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'License: ',
        name: 'license',
        choices: [
            'MIT',
            'GPL',
            'GPLv3',
        ],
      },
    {
        type: 'input',
        message: 'Github Username: ',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('README.md created!')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then(answers => {
    const markdown = generateMarkdown(answers);
    writeToFile('README2.md', markdown);
})  
}

// Function call to initialize app
init();