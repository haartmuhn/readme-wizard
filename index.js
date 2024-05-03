// Importing necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    // Check for errors while writing the file, log any errors encountered
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

// Function to initialize app
function init() {
  // Prompting the user with questions to gather project information
  inquirer.prompt([
    // Asking for project title
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    // Asking for project description
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    // Asking for installation instructions
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    // Asking for usage information
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    // Asking for contribution guidelines
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    // Asking for test instructions
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    // Asking to choose a license for the project
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'None'],
    },
    // Asking for the author's name
    {
      type: 'input',
      name: 'author',
      message: 'What is your name?',
    },
    // Asking for the author's GitHub username
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    // Asking for the author's email address
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]).then((answers) => {
    // Generate markdown content based on user answers
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
    // Write markdown content to README file
  });
}

// Function call to initialize app
init();
