# CpyressAutomation
# Cypress Automation Project


# This project demonstrates automated testing using Cypress with BDD (Behavior Driven Development) using Cucumber. It includes comprehensive configurations for generating detailed test reports using Mochawesome and Cucumber JSON formatter.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Directory Overview](#directory-overview)
- [Troubleshooting](#troubleshooting)



# This project demonstrates automated testing using Cypress with BDD (Behavior Driven Development) using Cucumber. It includes configurations for generating detailed test reports using Mochawesome and Cucumber JSON formatter.

## Project Structure
CypressAutomation/
├── cypress/
│ ├── cucumberReports/
│ ├── downloads/
│ ├── e2e/
│ ├── fixtures/
│ ├── integration/
│ ├── support/
│ └── cucumber-html-report.js
├── node_modules/
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md



## Prerequisites
- Node.js (v14 or later)
- npm or yarn

## Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/CypressAutomation.git
   cd CypressAutomation



# To Install all Dependencies and run tests:
npm install
npx cypress run
npx cypress open


# CONFIGURATION 

# 1.Set Up Cucumber JSON Formatter:
# Download the cucumber-json-formatter binary and make it executable:

wget https://github.com/cucumber/cucumber-json-formatter/releases/download/1.0.0/cucumber-json-formatter-darwin-amd64
mv cucumber-json-formatter-darwin-amd64 cucumber-json-formatter
sudo mv cucumber-json-formatter /usr/local/bin/
sudo chmod +x /usr/local/bin/cucumber-json-formatter

# 2.Verify the Formatter Installation:

cucumber-json-formatter --help



# Generating Reports

# Mochawesome Report:
# Reports are automatically generated in the cypress/reports directory after running tests.

# Generate Cucumber HTML Report:
# Ensure your cucumber-html-report.js is properly set up in the cypress directory:

const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumberReports',
  reportPath: 'cypress/reports/cucumber-html-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: '91'
    },
    device: 'Local test machine',
    platform: {
      name: 'macOS',
      version: 'Big Sur'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress Automation' },
      { label: 'Release', value: '1.2.3' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'Sep 17th 2023, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'Sep 17th 2023, 02:56 PM EST' }
    ]
  }
});

# Run the Report Generation Script:
 node cypress/cucumber-html-report.js

# Directory Overview
1. Fixtures (cypress/fixtures/):
Store static data for tests, typically in JSON format.
Example: example.json
Integration Tests (cypress/integration/examples/BDD/):

2. Contains feature files (*.feature) and step definitions (*.js).
Example: ecommerce.feature, eComStepDef.js
Page Objects (cypress/integration/examples/BDD/pageObjects/):

3. Encapsulate page-specific logic and elements.
Example: HomePage.js, ProductPage.js
Support (cypress/support/):

4. Custom commands and configuration.
Example: commands.js, e2e.js
Reports:

5. Generated test reports are stored in the cypress/reports/ directory.


# Troubleshooting
Common Errors:

Ensure all paths in configuration files are correct.
Verify that all necessary dependencies are installed.
MacOS Security Warnings:

If you get a security warning, open System Preferences > Security & Privacy > General and allow the application to run.
If you encounter any issues, please refer to the Cypress documentation or the specific package documentation for further guidance.


# Contributing
If you want to contribute to this project, feel free to fork the repository and submit a pull request.

# License
This project is licensed under the MIT License.


# This `README.md` provides a comprehensive guide for someone to clone, set up, and run your Cypress project, including the steps taken for reporting configuration. If you need any further adjustments or additions, feel free to ask!



