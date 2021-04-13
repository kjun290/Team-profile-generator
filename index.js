const inquirer = require("inquirer");
const fs = require ("fs");
const path = require ("path");
const generateHTML = require("./generateHTML");

const questions = [
    
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?: "
       },
       {
            type: "input",
            name: "id",
            message: "Enter the employee's ID: "
       },
       {
            type: "input",
            name: "email",
            message: "Enter the employee's email address: "
       },
       {
            type: "list",
            name: "role",
            message: "What what is the employee's role:",
            choices: ["Manager", "Engineer", "Intern"]
       }
    
]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {

    inquirer.prompt(questions).then((responses) => {
        //  console.log(responses)
        var html = generateHTML(responses);
        console.log(html)

        writeToFile("index.html", html)
    })
}

init(); 

