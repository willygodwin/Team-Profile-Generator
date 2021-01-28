const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const htmlHelpers = require('./src/utils/html');
// let employees = [
//     {
//         type: "Manager",
//         roomId: "12-A",
//         name: "Sam",
//         email: "sam@sam.com",
//     },
//     {
//         type: "Engineer",
//         github: "sam-ngu",
//         name: "Sam",
//         email: "sam@sam.com",
//     },
// ];


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
        type: 'confirm',
        message: 'Are you a manager?',
        name: 'isManager',
    },
    {
        type: 'input',
        message: 'Please enter the team managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter the team managers employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter the team managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the team managers office number?',
        name: 'office',
    },
    teamQuestion
]

const engineerQuestions =[
    {
        type: 'confirm',
        message: 'Are you entering details for an engineer?',
        name: 'isEngineer',
    },
    {
        type: 'input',
        message: 'Please enter the engineers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter the engineers employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter the engineers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter the engineers Github?',
        name: 'github',
    },
    teamQuestion
]

const internQuestions =[
    {
        type: 'confirm',
        message: 'Are you entering details for an intern?',
        name: 'isIntern',
    },
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

const myTeam = [];

// inquirer 
function promptQuestions(questions){
    return inquirer
  .prompt(questions)
  .then((response) => {
    // new employee(response)
    if(response.isManager){
        let manager = new Manager(response.name, response.email, response.id, response.office);
        myTeam.push(manager);
    } else if (response.isEngineer){
        let engineer = new Engineer(response.name, response.email, response.id, response.github);
        myTeam.push(engineer);
    } else if (response.isIntern){
        let intern = new Intern(response.name, response.email, response.id, response.school);
        myTeam.push(intern);
    }

    switch (response.team) {
        case 'Engineer':
            promptQuestions(engineerQuestions)
            break;
        case 'Intern':
            promptQuestions(internQuestions)
            break;
        case 'Finished building my team':
            console.log(myTeam);
            addCards(myTeam) 
            createHTML()
            return
        default:
            console.log(myTeam);
            addCards(myTeam) 
            return
    }
    });


}

promptQuestions(managerQuestions)


// keep asking the user to enter which employee type

// ask question specific to emmployee type
// ;
function addCards(team){
    fs.writeFile("cards.txt", '', (err) =>
        err ? console.log(err) : console.log('Success!'))
    for (const objClass of team) {
        const htmlPath = path.join(__dirname, "src", "html-templates", "card.html");
        const layout = fs.readFileSync(htmlPath, "utf-8");
        let newHTML = htmlHelpers.injectCode(layout, '{{ name }}', objClass.getName());
        newHTML = htmlHelpers.injectCode(newHTML, '{{ role }}', objClass.getRole());
        newHTML = htmlHelpers.injectCode(newHTML, '{{ id }}', objClass.getID());
        newHTML = htmlHelpers.injectCode(newHTML, '{{ email }}', objClass.getEmail());
        newHTML = htmlHelpers.injectCode(newHTML, '{{ email }}', objClass.getEmail());

        switch (objClass.getRole()){
            case 'Manager':
                newHTML = htmlHelpers.injectCode(newHTML, '{{ other }}', `Office: ${objClass.getOffice()}`);
                break;
            case 'Engineer':
                newHTML = htmlHelpers.injectCode(newHTML, '{{ other }}', `Github: ${objClass.getGithub()}`);
                break;
            case 'Intern':
                newHTML = htmlHelpers.injectCode(newHTML, '{{ other }}', `School: ${objClass.getSchool()}`);
                break;
            default: 
                newHTML = htmlHelpers.injectCode(newHTML, '{{ other }}', '');
                break;

        }

        fs.appendFile('cards.txt', newHTML, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        
    }
}

function createHTML() {
    const htmlPath = path.join(__dirname, "src", "html-templates", "template.html");
    const layout = fs.readFileSync(htmlPath, "utf-8");
    const cardsPath = path.join(__dirname, 'cards.txt')
    console.log(cardsPath)
    setTimeout(() =>{
        const cards = fs.readFileSync(cardsPath, "utf-8");
        console.log(cards)
        const newHTML = htmlHelpers.injectCode(layout, '{{ code_injection }}', cards);
        fs.writeFile("index.html", newHTML, (err) =>
            err ? console.log(err) : console.log('Success!'))
        
        }, 3000);
}
