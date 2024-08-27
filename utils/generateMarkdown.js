// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  const ISC = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  const IBM = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'

  if (license == "MIT") {
    return MIT
  }
  else if (license == "ISC") {
    return ISC
  }
  else if (license == "IBM") { 
    return IBM
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return '[License](#license)'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
   This project uses the ${license} license`
  }
  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  ${renderLicenseLink(data.license)}
  [Description](#description)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ## Contributions
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  You can view my projects at: https://github.com/${data.user}
  or email me at ${data.email}
  `
}

export default generateMarkdown;

