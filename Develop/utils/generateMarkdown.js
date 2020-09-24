// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/${data.license}-license-red)     ![Language](https://img.shields.io/static/v1?label=${data.language}&message=language&color=brightgreen)



## Description

  *The what, why, and how:*

  ${data.description}

  ---

## Table of Contents


  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Test)
  - [License](#License)
  - [Questions](#Questions)


---
  
  <img src = "assets/download-solid.svg" width="40">

## Installation

  *Steps required to install this application:*

  ${data.installation}

---

<img src = "assets/laptop-house-solid.svg" width="40">

## Usage
  *Instructions and examples for use:*

  ${data.usage}

---

  <img src = "assets/users-solid.svg" width="40">

## Contributing
  
  *Guidelines:*

  ${data.contributing}
 
---

 <img src = "assets/laptop-code-solid.svg" width="40">

## Test

  *Tests for application and how to run them:*

  ${data.test}

---

  <img src = "assets/shield-alt-solid.svg" width="40">

## License

  *This project is licensed under:* 
  ${data.license}

---

<img src = "assets/question-circle-regular.svg" width="40">

## Questions?

  *For any questions about this application, please contact me via the information below:*

  GitHub: https://github.com/users/${data.username}
  
  Email: ${data.email}

---
  <br>

  [Icons provided by https://fontawesome.com/]

`;
}

module.exports = generateMarkdown;
