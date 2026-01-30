# SwiftTranslator Automated Testing Assignment - IT23609426 / M.A.D.Y.Dharmasena 

## Project Description
This project focuses on automated testing of the **SwiftTranslator** web application, which translates Singlish input into Sinhala output.

The main objective of this assignment is to evaluate:
- Translation accuracy
- Sentence structure handling
- Robustness against invalid or unexpected inputs
- Basic UI element availability

Automated test cases were developed using **Playwright** to simulate real user interactions and to validate system behavior against expected outcomes as defined in the test case table.

---

## Tools & Technologies Used
- **Playwright (JavaScript)** – Automated browser testing framework
- **Node.js** – Runtime environment
- **Visual Studio Code** – Development environment
- **GitHub** – Version control and project hosting

---

## Scope of Testing

### Functional Testing
The following sentence types were tested to ensure correct translation and meaning preservation:
- Simple sentences
- Compound sentences
- Conditional sentences
- Interrogative sentences
- Imperative and command sentences
- Past, present, and future tense sentences
- Greetings
- Apologies
- Polite requests
- Assurance / promise sentences

---

### Robustness / Negative Testing
The system was tested against unusual or edge-case inputs to evaluate stability and reliability:
- Inputs containing numbers
- Special characters
- Mixed English and Singlish text
- Random and extra whitespace
- Multi-line inputs
- Long paragraph inputs (≥300 characters)
- Incorrect or excessive punctuation
- Unsupported slang words
- Joined words and spacing issues
- Mixed capitalization

---

### UI Testing
Basic UI validations were performed to ensure usability:
- Visibility of the input text area
- Correct placeholder text display
- Ability to accept and retain user input

---

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


