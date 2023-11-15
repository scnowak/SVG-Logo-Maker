// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown =require('./generateMarkdown');

const logoContent = require('./lib/shapes.js');

const {writeFile} = require('fs/promises')


// TODO: Create an array of questions for user input
//const questions = [
   function init(){
    inquirer
    .prompt([ 
    {
        type: 'input',
        message: 'Please enter up to 3 characters that will be displayed on the logo:',
        name: 'characters',
        // name: 'projName',
    },
    {
        type: 'input',
        message: 'Please select a COLOR or HEXADECIMAL code for the TEXT that is displayed on the logo:',
        name: 'color',
        // name: 'description',
    },
    {
        type: "input",
        message: "Please select a COLOR or HEXADECIMAL code for the SHAPE fill color that is displayed for the logo:",
        name: "shapeFill",        
    },
    {
        type: 'list',
        message: 'Please select a SHAPE from the list below using the down arrow key and strike enter:',
        name: ['Square', 'Circle', 'Triangle'],
        // name: 'license',
        // choices: ['Apache-2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None'],
    },
    // {
    //     type: 'input',
    //     message: 'What info do you want to include for your demo/tests?',
    //     name: 'tests',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your GitHub username?',
    //     name: 'github',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your Email address?',
    //     name: 'email',
    // },
])



// // TODO: Create a function to write the data input to a  file
// function writeToFile(fileName, data) {}

// inquirer.prompt(questions)
.then((response)=>{

    const img = svgContent(response)
    const final = img.render();
    console.log(response)

    // fs.writeFile('logo.svg', generateMarkdown(response), (err)=>{
        fs.writeFile('logo.svg', generateMarkdown(response), (err)=>{    
        err ? console.error(err) : console.log("Generate logo  is WORKING!");
    });
});
}
    
// // Function call to initialize app
init();
