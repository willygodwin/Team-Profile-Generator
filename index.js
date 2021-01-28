const fs = require('fs');
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


// var prompt = function(question){
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
                        message: 'Please add members to your team',
                        choices: ['Engineer', 'Intern', 'Finished building my team'],
                    }

// inquirer 
inquirer
  .prompt([
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
   
  ])
  .then((response) => {

    switch (response.team) {
        case 'Engineer':
            return
        case 'Intern':
            return
        case 'Finished building my team':
            return
        default:
            return
    }
    
    fs.writeFile("README.MD", getTemplate(response), (err) =>
    err ? console.error(err) : console.log('Success!'))
    });

// keep asking the user to enter which employee type

// ask question specific to emmployee type
// ;



const htmlPath = path.join(__dirname, "src", "html-templates", "template.html");
const layout = fs.readFileSync(htmlPath, "utf-8");
htmlHelpers.injectCode(layout, '{{ code_injection }}', JSON.stringify(employees));