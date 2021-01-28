function injectCode(source, placeholder, replaceValue){
    return source.replace(
        placeholder,
        replaceValue
    );
}

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

module.exports = {
    injectCode,
    teamQuestion, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions



    
}