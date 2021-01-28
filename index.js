const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const htmlHelpers = require('./src/utils/html');
let employees = [
    {
        type: "Manager",
        roomId: "12-A",
        name: "Sam",
        email: "sam@sam.com",
    },
    {
        type: "Engineer",
        github: "sam-ngu",
        name: "Sam",
        email: "sam@sam.com",
    },
];


// function prompt(question){
//   return inquirer
//     .prompt(question)
//     .then(function(answers){
//         if (condition === true){
//           //loop back to first prompt again
//           return prompt('question 1 data');
//         }else{
//           //ask second prompt
//           return prompt('question 2 data');
//         }
//     });
// }

const teamQuestion = {
    type: 'list',
    name: 'team',
    message: 'What employees would you like to add to you team?',
    choices: ['Engineer', 'Intern', 'Finished building my team'],
}

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter the team managers name?',
        name: 'manager',
    },
    {
        type: 'input',
        message: 'Please enter the team managers employee ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'Please enter the team managers email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please enter the team managers office number?',
        name: 'managerOffice',
    },
    teamQuestion
]

const engineerQuestions =[
    {
        type: 'input',
        message: 'Please enter the engineers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter the engineers employee ID?',
        name: 'ID',
    },
    {
        type: 'input',
        message: 'Please enter the engineers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the engineers Github?',
        name: 'Github',
    },
    teamQuestion
]

const internQuestions =[
    {
        type: 'input',
        message: 'Please enter the interns name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter the interns employee ID?',
        name: 'ID',
    },
    {
        type: 'input',
        message: 'Please enter the interns email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the interns school of study?',
        name: 'school',
    },
    teamQuestion
]

// inquirer 
function promptQuestions(questions){
    return inquirer
  .prompt(questions)
  .then((response) => {
    // new employee(response)
    switch (response.team) {
        case 'Engineer':
            promptQuestions(engineerQuestions)
            break;
        case 'Intern':
            promptQuestions(internQuestions)
            break;
        case 'Finished building my team':
            return
        default:
            return
    }
    });
}

promptQuestions(managerQuestions)

// keep asking the user to enter which employee type

// ask question specific to emmployee type
// ;



const htmlPath = path.join(__dirname, "src", "html-templates", "template.html");
const layout = fs.readFileSync(htmlPath, "utf-8");
htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));