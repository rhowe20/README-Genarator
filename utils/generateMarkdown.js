// TODO: Create a function that returns a license badge based on which license is passed in

const { restoreDefaultPrompts } = require("inquirer")

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeMarkdown = `[![${license}license](https://img.shields.io/badge/License-${license}-blue.svg)]`

  return badgeMarkdown
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return 'https://lbesson.mit-license.org/'
  }else if(license === 'GPL'){
    return 'http://perso.crans.org/besson/LICENSE.html'
  }else if(license === 'GPLv3'){
    return 'http://perso.crans.org/besson/LICENSE.html'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents

  [License](#license)
  [Description](#description)
  [Installation Instructions](#installation-instructions)
  [Usage Information](#usage-information)
  [Contribution Guidelines](#contribution-guidelines)
  [Test Instructions](#test-instructions)
  [Github Username](#github-username)
  [Email](#email)

  ## License

  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.installationInstructions}

  ## Usage Information

  ${data.usageInformation}

  ## Contribution Guidelines

  ${data.contributionGuidelines}

  ## Test Instructions

  ${data.testInstructions}

  ## Github Username

  ${data.githubUsername}

  ## Email

  ${data.email}
`;
}

module.exports = generateMarkdown;
