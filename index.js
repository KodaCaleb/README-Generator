const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'Project Name:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Project Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to Install?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use application?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How do people contribute?',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How are you testing project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose License:',
            choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter Github Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:'
        },
    ])
    .then((answers) => {
        const data = {
            title: answers.title,
            description: answers.description,
            installation: answers.installation,
            usage: answers.usage,
            contribution: answers.contribution,
            testing: answers.testing,
            license: answers.license,
            username: answers.username,
            email: answers.email,
        };

    const readmeOutput = generateMarkdown(data);


    fs.writeFile('README.md', readmeOutput, (err) => {
        if(err) throw err;
        console.log('README complete!');
    });
    })
    .catch((error) => console.error(error));

function init() {}

// Function call to initialize app
init();
