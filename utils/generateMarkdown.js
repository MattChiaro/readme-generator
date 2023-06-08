// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License`
 }

 function isCollaborators(response) {
  if (response === 'No') {
    return "";  
  }
  return `## Credits
  
  ${data.collaboratorNames}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
         
  ${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

${isCollaborators(data.collaborators)}

${renderLicenseSection(data.license)}

${data.license}

---

## Badges

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contribution}

## Tests



`
}

module.exports = {generateMarkdown};
