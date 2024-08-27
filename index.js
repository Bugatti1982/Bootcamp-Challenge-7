// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ['MIT', 'ISC', 'IBM']

    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests did you deploy for the project?'
    },
    {
        type: 'input',
        name: 'user',
        message: 'Please provide a username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.md')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {

            writeToFile('index.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();


