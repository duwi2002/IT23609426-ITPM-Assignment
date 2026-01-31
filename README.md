SwiftTranslator Automated Testing Assignment

Module: ITPM
Student ID: IT23609426
Name: M.A.D.Y. Dharmasena

## Project Description

This project contains automated test cases developed for the SwiftTranslator web application.
SwiftTranslator translates Singlish input into Sinhala output.

The purpose of this assignment is to verify:

## Translation accuracy

Correct handling of different sentence types

System robustness against invalid or unexpected inputs

Basic UI functionality and usability

All tests are automated using Playwright to simulate real user interactions and validate expected behavior.

## Objectives

To perform automated functional testing on SwiftTranslator

To identify translation and input-handling issues

To evaluate system stability using negative test cases

To validate key UI elements of the application

To gain hands-on experience with Playwright automation

## Tools & Technologies Used

Playwright (JavaScript) – Automated testing framework

Node.js – JavaScript runtime environment

Visual Studio Code – Development environment

GitHub – Version control and repository hosting

## Scope of Testing
## 1. Functional Testing

The following sentence types were tested to verify correct translations:

Simple sentences

Compound sentences

Conditional sentences

Interrogative sentences

Imperative / command sentences

Past, present, and future tense sentences

Greetings

Apologies

Polite requests

Assurance / promise sentences

## 2. Robustness / Negative Testing

Negative test cases were created to evaluate system stability and error handling:

Inputs with numbers

Special characters

Mixed English and Singlish text

Random and extra whitespace

Multi-line input

Long paragraph input (≥ 300 characters)

Incorrect punctuation

Unsupported slang words

Joined words and spacing errors

Mixed capitalization

These tests ensure the system does not crash and behaves consistently when unexpected input is provided.

## 3. UI Testing

Basic UI checks were performed to ensure usability:

Visibility of the input text area

Correct placeholder text

Ability to accept user input

Test Implementation

All test cases are written using Playwright test framework

Tests are located inside the tests/ directory

Assertions are used to verify expected application behavior

Test execution results are generated automatically

## Project Structure 
ASSIGNMENT 1 ITPM
│
├── .github/
├── .vscode/
├── node_modules/
├── playwright-report/
├── test-results/
│
├── specs/
├── tests/
│   └── swifttranslator.spec.ts
│
├── Screen shots/
│
├── index.html
├── README.md
├── test-plan.md
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore

## How to Run the Tests
## 1. Install Dependencies

npm install

## 2. Run All Tests

npx playwright test

## 3. View Test Report

npx playwright show-report

## Test Evidence

Test execution results are stored in the playwright-report/ and test-results/ folders

Screenshots (if captured) are stored in the Screen shots/ directory

Console output confirms test pass/fail status


## Conclusion

This automated testing assignment successfully validates the functional correctness, robustness, and basic UI behavior of the SwiftTranslator application.
Using Playwright enabled efficient, repeatable, and reliable testing aligned with modern software quality assurance practices.





