// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  const badge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache': '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  };
  return badge[license];
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  const link = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'Unlicense': 'http://unlicense.org/',
  };
  return link[license];
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `This project is licensed under the ${license} license. For more information, please visit [${renderLicenseLink(license)}](${renderLicenseLink(license)}).`;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

return `# ${data.title}
${licenseBadge}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Testing
${data.testing}
## License
${licenseBadge}
${licenseSection}
## Questions
For any questions or comments please reach out to me at [${data.email}](mailto:${data.email}). You can also find my other work at [https://github.com/${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;