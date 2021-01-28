const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const htmlHelpers = require('./src/utils/html');


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
            promptQuestions(htmlHelpers.engineerQuestions)
            break;
        case 'Intern':
            promptQuestions(htmlHelpers.internQuestions)
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

promptQuestions(htmlHelpers.managerQuestions)


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
                newHTML = htmlHelpers.injectCode(newHTML, '{{ other }}', `Github: <a href = "https://github.com/${objClass.getGithub()}">${objClass.getGithub()}</a>`);
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
