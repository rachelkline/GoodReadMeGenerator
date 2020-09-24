// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/static/v1?label=${data.license}&message=license&color=red)

## Description

  *The what, why, and how:*

  ${data.description}

## Table of Contents


  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Questions](#questions)

## Installation

  *Steps required to install this application:*

  ${data.installation}

## Usage
  *Instructions and examples for use:*

  ${data.usage}

## Contributing
  
  *If you are interesed in contributing, follow these guidelines for how to do so:*

  ${data.contributing}

## Test

  *Tests for applicatoion and how to run them:*

  ${data.test}

## Licence

  *This project is licensed under ${data.licence}*

  

## Questions?

  *For any questions about this application, please contact me via the information below:

  GitHub: https://github.com/users/${data.username}
  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
