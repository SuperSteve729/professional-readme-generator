// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Your Gihub Username:",
        name: "gitUsername"
    },
    {
        type: "input",
        message: "Title of Project:",
        name: "title"
    },
    {
        type: "list",
        message: "Select your license:",
        name: "license",
        choices: ["MIT", "Creative Commons", "GNU GPL v3"]
    },
    {
        type: "input",
        message: "Title of Project:",
        name: "title"
    },
    {
        type: "input",
        message: "Title of Project:",
        name: "title"
    },
    {
        type: "input",
        message: "Title of Project:",
        name: "title"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Generating README");
        writeToFile("README.md", generateMarkdown(response));
    })
}

// Function call to initialize app
init();