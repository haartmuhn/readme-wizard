// Function to render the license badge based on the provided license type
function renderLicenseBadge(license) {
  if (license) {
    // If a license is provided, return a markdown string for the license badge with the corresponding URL
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    // If no license is provided, return an empty string
    return '';
  }
}

// Function to return the URL of the license based on the provided license type
function renderLicenseLink(license) {
  if (license) {
    // If a license is provided, return the URL of the license
    return `https://opensource.org/licenses/${license}`;
  } else {
    // If no license is provided, return an empty string
    return '';
  }
}

// Function to render the license section of the markdown file
function renderLicenseSection(license) {
  if (license) {
    // If a license is provided, return a markdown string for the license section with a link to the license URL
    return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
  } else {
    // If no license is provided, return an empty string
    return '';
  }
}

// Main function to generate the markdown file content
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please reach out to [${data.author}](https://github.com/${data.username}) at ${data.email}.
`;
}

// Export the generateMarkdown function to be used by other modules
module.exports = generateMarkdown;
