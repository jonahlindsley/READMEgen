// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(license == 'GPLv3'){
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
}else if(license == 'GPLv2'){
  return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
}else{
  return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache License 2.0'){
    return `[Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(license == 'MIT'){
    return `[MIT license](https://opensource.org/licenses/MIT)`
}else if(license == 'GPLv3'){
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
}else if(license == 'GPLv2'){
  return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
}else{
  return ''
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none'){
    return ''
  }else{
    return ` ${renderLicenseBadge(license)}
    1. Software can be modified, used commercially, and distributed.
    2. Software can be modified and used in private.
    3. A license and copyright notice must be included in the software.
    4. Software authors provide no warranty with the software and are not liable for anything.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  # the deployed website  
  [click to view deployed website](${data.website})
  ***
  # Discription 
  ${renderLicenseBadge(data.license)}
  ${data.discription}  
  [${data.altText}](${data.screenshot})
  ***
  # table of contents
  [licence](#licence), 
  [installation](#installation), 
  [usage](#usage), 
  [contributing](#contributing), 
  [tests](#tests), 
  [questions](#questions).
  ***
  # licence 
  ${renderLicenseSection(data.license)}
  # installation
  ${data.installation}  
  ***
  # usage
  ${data.instructions}  
  ***
  # contributing 
  contributors: ${data.contribution}  
  ***
  #  tests
  these are the test you should run to ensure optimum proformance: ${data.tests}  
  ***
  # questions 
  please reach out to me via email at ${data.email} or [github](https://github.com/${data.github}) and i will get back to you 
`;
}

module.exports = generateMarkdown;
