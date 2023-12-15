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
        message: "An email people can refer to you with:",
        name: "email"
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
        choices: ["MIT", "Creative Commons", "GNU GPL v3", "None"]
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description"
    },
    {
        type: "input",
        message: "How would you install the project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how to use it:",
        name: "usage"
    },
    {
        type: "input",
        message: "Go over some tests:",
        name: "tests"
    },
    {
        type: "input",
        message: "Almost done, enter the credits:",
        name: "credits"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({ ...response }));
    })
}

// Function call to initialize app
init();