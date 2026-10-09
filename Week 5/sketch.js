// I need variables that keep track of what screen i'm on
let currentScreen = 'start';

// Keeps track of which question we are on
let currentQuestionIndex = 0;

// Keeps track of the score
let score = 0;

// Keeps track of if the answer has been checked
let answerChecked = false;

// Keeps track of if the answer was correct
let answerCorrect = false;


// 10 questions

let question1 = { // an object
  question: 'What is the name of the main character in Ben 10?', // a property
  answer: ['Kevin Levin', 'Ben Tennyson', 'Max Tennyson', 'Gwen Tennyson'],
  correctAnswer: 1
};

let question2 = {
  question: 'What is the name of the device Ben finds in the forest?',
  answer: ['Omnitrix', 'Ultimatrix', 'Alien Watch', 'Tennyson Watch'],
  correctAnswer: 0
};

let question3 = {
  question: 'What is Bens cousins name?',
  answer: ['Julie', 'Kai', 'Gwen', 'Lucy'],
  correctAnswer: 2
};

let question4 = {
  question: 'What is the name of Ben and Gwens grandfather?',
  answer: ['Max Tennyson', 'Phil Tennyson', 'Carl Tennyson', 'Jim Tennyson'],
  correctAnswer: 0
};

let question5 = {
  question: 'Which alien can breathe fire?',
  answer: ['Four Arms', 'Heatblast', 'XLR8', 'Grey Matter'],
  correctAnswer: 1
};

let question6 = {
  question: 'Which alien is known for having four arms?',
  answer: ['Wildmutt', 'Diamondhead', 'Four Arms', 'Ripjaws'],
  correctAnswer: 2
};

let question7 = {
  question: 'What color is Bens shirt in the original series?',
  answer: ['Red', 'Blue', 'Green', 'Black'],
  correctAnswer: 2
};

let question8 = {
  question: 'What is the name of the vehicle Ben, Gwen, and Max travel in?',
  answer: ['The Tennyson Truck', 'The Rust Bucket', 'The Green Machine', 'The Alien Cruiser'],
  correctAnswer: 1
};

let question9 = {
  question: 'Which alien can run extremely fast?',
  answer: ['XLR8', 'Upgrade', 'Stinkfly', 'Cannonbolt'],
  correctAnswer: 0
};

let question10 = {
  question: 'Who is one of Bens main enemies in the original series?',
  answer: ['Vilgax', 'Professor Paradox', 'Albedo', 'Rook'],
  correctAnswer: 0
};


// My question array
let questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10
];

let currentQuestion = questions[0]; // Shows the first question

function setup() {
  // Creates an 800 x 600 canvas
  createCanvas(800, 600);
}

function draw() {
  background(220);

  // If start then draw START screen
  if (currentScreen === 'start') {

    // Green START button
    fill(27, 214, 57);
    rect(125, 130, 500, 200);

    // Grey box
    fill(144, 144, 144);
    rect(190, 400, 380, 80);

    // Text inside grey box
    textSize(60);
    fill(0);
    text('Ben 10 Quiz', 210, 460);

    // START text
    fill(0, 121, 19);
    textSize(120);
    text('START', 180, 270);

  }
  // If question then run drawQuestion
  if (currentScreen === 'question') {
    drawQuestion();
  }

  // If end then draw the end screen
  if (currentScreen === 'end') {

    // End screen
    fill(0);
    textSize(50);
    text('QUIZ FINISHED!', 210, 180);

    // Show score
    textSize(35);
    text('Score: ' + score + ' / ' + questions.length, 270, 280);

    // Play again button
    fill(144, 144, 144);
    rect(250, 380, 300, 80);

    fill(0);
    textSize(35);
    text('PLAY AGAIN', 285, 430);
  }
}

function mousePressed() {
  //START SCREEN

  if (currentScreen === 'start') {

    if (mouseX > 125 && mouseX < 625 &&
        mouseY > 130 && mouseY < 330) {

      // Change to the question screen
      currentScreen = 'question';

      currentQuestionIndex = 0;

      // Get the first question
      currentQuestion = questions[currentQuestionIndex];

      // Reset the score
      score = 0;

      // Reset the answer
      answerChecked = false;
    }
  }

  //QUESTION SCREEN
  if (currentScreen === 'question') {

    // Only check the answer if the player has not answered yet
    if (answerChecked === false) {

      // Go through all the possible answers
      for (let i = 0; i < currentQuestion.answer.length; i++) {

        // Changes the Y position for every answer
        let answerY = 180 + i * 80;


        // Checks if the mouse clicked this answer
        if (mouseX > 150 && mouseX < 650 &&
            mouseY > answerY && mouseY < answerY + 55) {


          // Check if the selected answer is correct
          if (i === currentQuestion.correctAnswer) {
            score++;
            // The answer is correct
            answerCorrect = true;

          } else {

            // The answer is wrong
            answerCorrect = false;

          }
          // The answer has now been checked
          answerChecked = true;
        }
      }
    } else {
      // If the answer was already checked,
      // clicking again goes to the next question

      currentQuestionIndex++;
      // Check if there are still questions
      if (currentQuestionIndex < questions.length) {

        // Get the next question
        currentQuestion = questions[currentQuestionIndex];

        // Allow the player to answer again
        answerChecked = false;
      } else {
        // All questions are finished
        currentScreen = 'end';
      }
    }
  }

  // END SCREEN
  if (currentScreen === 'end') {

    // Checks if PLAY AGAIN was clicked
    if (mouseX > 250 && mouseX < 550 &&
        mouseY > 380 && mouseY < 460) {

      // Go back to the start screen
      currentScreen = 'start';

      // Reset the quiz
      currentQuestionIndex = 0;
      currentQuestion = questions[0];
      score = 0;
      answerChecked = false;
    }
  }
}

//QUESTION FUNCTION
// Draws the current question on the screen
function drawQuestion() {

  // Gets the question from the currentQuestion object
  textSize(25);
  fill(0);

  text(currentQuestion.question, 50, 80, 700, 100);

  // Draws all the possible answers
  for (let i = 0; i < currentQuestion.answer.length; i++) {

    // Changes the Y position for each answer
    let answerY = 180 + i * 80

    // Draws the answer box
    fill(180);
    rect(150, answerY, 500, 55);

    // Draws the answer text
    fill(0);
    textSize(22);
    text(currentQuestion.answer[i], 175, answerY + 35);
  }

  // Show if the answer was correct or wrong
  if (answerChecked === true) {
    textSize(25);

    // If the answer was correct
    if (answerCorrect === true) {

      fill(0, 150, 0);
      text('Correct!', 340, 540);
    }

    // If the answer was wrong
    else {
      fill(200, 0, 0);
      text('Wrong!', 345, 540);
    }

    // Tell the player to click to continue
    fill(0);
    textSize(16);
    text('Click again for the next question', 285, 575);
  }
}