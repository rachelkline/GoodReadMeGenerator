const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

//Internal Modules
const generateMarkdown = require("./utils/generateMarkdown");
// console.log(genMD.generateMarkdown(data));


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write a description for your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Describe the steps required to install your project (if applicable).",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples of your project in use for the 'Usage' section.",
        name: "usage"
    },
    {
        type: "input",
        message: "If applicable, please provide guidelines on how other developers can contribute.",
        name: "contributing"
    },
    {
        type: "input",
        message: "If applicable, please provide any tests written for your application and provide examples.",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        choices: ['MIT', 'ISC', 'GNU', 'GPLv3'],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter your gitHub username.",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    }

];


// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        fs.writeFile("EXAMPLE.md", generateMarkdown(answers), function(err){
            if (err){
                throw err;
            }
        });
    })
    

};

// function call to initialize program
init();
