// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.name === 'none') {
    return "";
  }
  return `![${license.name}](https://img.shields.io/badge/license-${license.badgeID}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license.name === 'none') {
    return "";
  }
  return `${license.link}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.name === 'none') {
    return "";
  }
  return `## License`
 }

 function renderCreditsSection(response) {
  if (response === 'No') {
    return "";  
  }
  return `## Credits`
}

function renderCollaborators(response) {
  if (!response) {
    return "";
  }
  return `${response}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
         
${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

${renderCreditsSection(data.collaborators)}

${renderCollaborators(data.collaboratorNames)}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

## How to Contribute

${data.contribution}

## Tests

${data.test}

## Questions/Contact

If you have any questions, please contact me at ${data.email}. You can also find me on GitHub at [${data.github}](https://github.com/${data.github}).`
}

module.exports = {generateMarkdown};
