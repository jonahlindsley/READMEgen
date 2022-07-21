// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'what is the title of your project'
},
{
    type: 'input',
    name: 'website',
    message: 'enter the deployed websites URL'
}, 
{
    type: 'input',
    name: 'discription',
    message: 'enter a description of the application'
}, 
{
    type: 'input',
    name: 'github',
    message: 'please enter your github username'
},
{
    type: 'input',
    name: 'installation',
    message: 'what are the installation instructions'
},
{
    type: 'input',
    name: 'usage',
    message: 'add your usage instructions'
},
{
    type: 'input',
    name: 'contribution',
    message: 'who contributed to this?'
},
{
    type: 'input',
    name: 'email',
    message: 'whats your email'
},
{
    type: 'list',
    name: 'license',
    message: 'please select a license',
    choices: ['none', 'MIT', 'Apache License 2.0', 'GPLv3', 'GPLv2'],
},
{
    type: 'input',
    name: 'tests',
    message: 'what are the tests that shoud be run'
},
{
    type: 'input',
    name: 'screenshot',
    message: 'enter the relative path to the screenshot in the file'
   
},
{
    type: 'input',
    name: 'altText',
    message: 'enter the alt text for the screenshot'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data),
        err ? console.log(err) : console.log('README.md has been made');
    })
}

// TODO: Create a function to initialize app 
const init = () => {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('README.md', generateMarkdown(data));
        console.log(data)
    })
}
  
// Function call to initialize app
init();