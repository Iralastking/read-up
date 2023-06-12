// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

if (index < questions.length - 1) {
    askQuestion(index + 1);
  } else {
    console.log("Thank you for your answers:");
    console.log(answers);
  
    const fileName = "README.md";
    const data = generateReadmeContent(answers);
    writeToFile(fileName, data);
  
    rl.close();
  }
  