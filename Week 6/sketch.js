let pet = "MyPet"
let hunger = 20;
let happiness = 50;
let energy = 50;
let cleanliness = 50;
let backgroundImage;

let mood = "neutral";
let sleeping = false;
let sleepStage = "awake"; //Tells me where she is (awake, falling, sleeping or waking up)
let sleepStartTime = 0; //will remember when the current stage started

let statsImage;
let myFont;

let happy1;
let happy2;

let idle1;
let idle2;

let sad1;
let sad2;

let sick1;
let sick2;

let falling1;
let falling2;

let sleeping1;
let sleeping2;

let wakingUp;
// let characterImages = [happy1, happy2, idle1, idle2, sad1, sad2, sick1, sick2, falling1, falling2, sleeping1, sleeping2, wakingUp];


function setup() {
  createCanvas(800, 800);

  let savedTime = localStorage.getItem("lastPlayed"); //savedTime retrieves the timestamp from previous session
  let currentTime = Date.now(); //currentTime gets the time right now
  let timePassed = 0; //starts at 0, creates the variable outside the if, so i can use it elsewhere in setup()
  if (savedTime !== null) {
    timePassed = currentTime - Number(savedTime); //it calculates how long the game was closed in milliseconds
    let offlineTime = Math.floor(timePassed / 10000);// this is basically asking, how many complete 10-second periods passed?
    hunger = hunger - offlineTime; //hunger goes down
    energy = energy - offlineTime;
    cleanliness = cleanliness - offlineTime;
    localStorage.setItem("hunger", hunger); //Saves the updated value after calculating the offline time
    localStorage.setItem("energy", energy);
    localStorage.setItem("cleanliness", cleanliness);
  }

  let savedHunger = localStorage.getItem("hunger"); // localStorage.getItem("hunger") looks for the saved hunger value
  if (savedHunger !== null) { //savedHunger !== null checks whether a value was actually saved before
    hunger = Number(savedHunger); //Number(savedHunger) converts the saved value into a number, because localstorage stores values in text
  } // hunger = updates my hunger variable to the saved value

  let savedEnergy = localStorage.getItem("energy");
  if (savedEnergy !== null) {
    energy = Number(savedEnergy);
  }

  let savedCleanliness = localStorage.getItem("cleanliness");
  if (savedCleanliness !== null) {
    cleanliness = Number(savedCleanliness);
  }

  let savedHappiness = localStorage.getItem("happiness");
  if (savedHappiness !== null) {
    happiness = Number(savedHappiness);
  }

  playButton = createButton("Play"); //Makes the button
  playButton.mousePressed(() => {  //when play button is clicked, do everything inside of {}, using () => {} lets me tell the button to do multiple things when clicked
    playPet(); //runs my existing pay func
    playButton.style("transform", "scale(1.25)"); //playButton is my play button, .style() is my CSS, transform tells CSS to transform the button, "scale(1.2)" makes the button 1.2 times its normal size

    setTimeout(() => {
      playButton.style("transform", "scale(0.9)");
    }, 100);

    setTimeout(() => { //means wait for a certain amount of time, then do this
      playButton.style("transform", "scale(1)"); //changes it back to the normal size
    }, 200); //200 is 200 miliseconds, makes timeout wait that long
  });

  playButton.position(540, 250); //.position changed where the button should be
  styleButton(playButton);

  sleepButton = createButton("Sleep");
  sleepButton.mousePressed(() => {
    sleepPet();
    sleepButton.style("transform", "scale(1.25)");

    setTimeout(() => {
      sleepButton.style("transform", "scale(0.9)");
    }, 100);

    setTimeout(() => {
      sleepButton.style("transform", "scale(1)");
    }, 200);
  });

  sleepButton.position(610, 250);
  styleButton(sleepButton);

  feedButton = createButton("Feed"); //This makes a button named feed
  feedButton.mousePressed(() => {
    feedPet();
    feedButton.style("transform", "scale(1.25)");

    setTimeout(() => {
      feedButton.style("transform", "scale(0.9)");
    }, 100);

    setTimeout(() => {
      feedButton.style("transform", "scale(1)");
    }, 200);
  });

  feedButton.position(540, 300);
  styleButton(feedButton);

  cleanlinessButton = createButton("Clean");
  cleanlinessButton.mousePressed(() => {
    cleanPet();
    cleanlinessButton.style("transform", "scale(1.25)");

    setTimeout(() => {
      cleanlinessButton.style("transform", "scale(0.9)");
    }, 100);

    setTimeout(() => {
      cleanlinessButton.style("transform", "scale(1)");
    }, 200);
  });

  cleanlinessButton.position(610, 300);
  styleButton(cleanlinessButton);

  localStorage.setItem("lastPlayed", Date.now()); //Date.now() gives me the current time as a number
}

function draw() {
  background(220);

  image(backgroundImage, 0, 0, 800, 800); //Set the backgroundimage in draw to DRAW
  image(statsImage, 450, 0, 300, 400);
  fill(76, 55, 121);
  textSize(25);
  textFont(myFont); //My text font from preload
  text("Energy " + energy, 540, 100);
  text("Happiness " + happiness, 540, 140);
  text("Hunger " + hunger, 540, 180);
  text("Cleanliness " + cleanliness, 540, 220);

  updateMood(); //Updates my Moodfunction
  updateHappiness();
  updateNeeds();
  petEffect();
  drawPet();
}

function drawPet() {

  if (sleeping === true) {
    sleepAnimation();
  } else {

    //Happy
    if (mood === "happy") { //if mood is happy, === means gelijk aan, dunno in english
      if (frameCount % 80 < 40) {
        image(happy1, -53, -100, 850, 900);
      } else {
        image(happy2, -50, -100, 850, 900);
      }
    }
  
    //Neutral
    if (mood === "neutral") {
      if (frameCount % 80 < 40) {
        image(idle1, -53, -100, 850, 900);
      } else {
        image(idle2, -53, -100, 850, 900);
      }
    }

    //Sad
    if (mood === "sad") {
      if (frameCount % 100 < 60) {
        image(sad1, -53, -100, 850, 900);
      } else {
        image(sad2, -50, -100, 850, 900);
      }
    }

    //Sick
    if (mood === "sick") {
      if (frameCount % 50 < 25) {
        image(sick1, -53, -100, 850, 900);
      } else {
        image(sick2, -50, -100, 850, 900);
      }
    }
  }

}

function styleButton(button) {
  button.style("font-family", "Cutefont"); //fontfam selects multiple texts to use cutefont on
  button.style("font-size", "20px"); //makes the font size 20 px big
  button.style("background-color", "#e7d0f5"); //makes inside of the button a certain color 
  button.style("color", "#430c64"); //makes the text purple
  button.style("border", "2px solid #430c64"); //Gives the button a purple outline that is 2 pixels thick
  button.style("border-radius", "15px"); //Makes the corners rounded
  button.style("padding", "6px 15px"); //makes the button bigger around text
}


function feedPet() { //Feedfunc

  if (hunger < 100) { //if hunger is less than 100
    hunger = hunger + 20; // Adds the food
  }
  if (hunger > 100) { //If hunger is more than 100
    hunger = 100; //Then it should stay at 100
  }

  localStorage.setItem("hunger", hunger); //The first hunger is the name i'm giving saved value and the second one is my actual variable. and it also saves my hunger
}


function sleepPet() { //Sleepfunc

  sleeping = true;
  sleepStage = "falling";
  sleepStartTime = millis(); //millis() tells me how many milliseconds have passed

  if (energy < 100) {
    energy = energy + 100;
  }
  if (energy > 100) {
    energy = 100;
  }

  localStorage.setItem("energy", energy);
}


function sleepAnimation() {

  //falling asleep
  if (sleepStage === "falling") {
      image(falling1, -53, -100, 850, 900);
    
 

    if (millis() - sleepStartTime >= 500) { //checks if 1 second has passed
      sleepStage = "sleeping"; //if yes then it sleeps
      sleepStartTime = millis();
    }
  }

//sleeping
  else if (sleepStage === "sleeping") {

    if (frameCount % 60 < 30) {
      image(sleeping1, -53, -100, 850, 900);
    } else {
      image(sleeping2, -50, -100, 850, 900);
    }

    if (millis() - sleepStartTime >= 7000) {
      sleepStage = "waking";
      sleepStartTime = millis();
    }
  }

  //waking up
  else if (sleepStage === "waking") {

    image(wakingUp, -53, -100, 850, 900);

  
  if (millis() - sleepStartTime >= 1000) {
    sleepStage = "gettingUp";
    sleepStartTime = millis();
    }
  }

  //getting back up
  else if (sleepStage === "gettingUp") {

   
      image(falling1, -53, -100, 850, 900);


    if(millis() - sleepStartTime >= 200) {
      sleepStage = "awake";
      sleeping = false;
    }
  }
}


function cleanPet() { //Cleaningfunc
  if (cleanliness < 100) {
    cleanliness = cleanliness + 20;
  }
  if (cleanliness > 100) {
    cleanliness = 100;
  }

  localStorage.setItem("cleanliness", cleanliness);
}


function updateHappiness() {
  if (hunger > 70 && energy > 70 && cleanliness > 70 && frameCount % 60 === 0) { //IF hunger, energy, cleanliness are above 70, she gets 5 + happiness, frameCount is only true after all three conditions are true
    happiness = happiness + 5;
  }
  if (happiness > 100) { //if happiness is over 100
    happiness = 100; //It stays at 100
  }
  if ((cleanliness <= 40 || hunger <= 40 || energy <= 40) && frameCount % 60 === 0) { // if her needs are 40 or below then every 1 second
    happiness = happiness - 3; //she loses 3 happiness
  }
  if (happiness < 0) { //is happiness reaches below 0
    happiness = 0; //it stays at 0
  }

  localStorage.setItem("happiness", happiness);
}


function updateNeeds() {

  if (frameCount % 300 === 0) { //If 5 seconds have passed (60 frames is 1 second) then hunger, energy, cleanliness go down by one
    hunger = hunger - 3;
    energy = energy - 3;
    cleanliness = cleanliness - 3;
  }
  //If it hits 0 then
  //  it doesnt go under that
  if (hunger < 0) {
    hunger = 0;
  }
  if (energy < 0) {
    energy = 0;
  }
  if (cleanliness < 0) {
    cleanliness = 0;
  }
  //if it hits 100
  if (hunger > 100) {
    hunger = 100;
  }
  if (energy > 100) {
    energy = 100;
  }
  if (cleanliness > 100) {
    cleanliness = 100;
  }
}


function updateMood() {

  if (hunger <= 20 || energy <= 20 || cleanliness <= 20) { //If hunger, energy, cleanliness are 20 or lower then she's sick
    mood = "sick";
  }
  else if (hunger <= 40 || energy <= 40 || cleanliness <= 40) {
    mood = "sad";
  }
  else if (hunger <= 70 || energy <= 70 || cleanliness <= 70) {
    mood = "neutral";
  }
  else {
    mood = "happy"
  }
}


function playPet() {
  if (happiness < 100 && energy > 0) {
    happiness = happiness + 10
    energy = energy - 5;
  }
  if (happiness > 100) {
    happiness = 100;
  }
  if (energy < 0) {
    energy = 0;
  }

  localStorage.setItem("happiness", happiness);
  localStorage.setItem("energy", energy);
}


function petEffect() { //for blurry and dark effect
  if (hunger <= 20 || energy <= 20 || cleanliness <= 20) {
    filter(BLUR, 2); // makes the game screen blurry

    playButton.style("filter", "blur(1.8px) brightness(50%)");  // makes all 4 buttons blurry AND dark
    sleepButton.style("filter", "blur(1.8px) brightness(50%)");
    feedButton.style("filter", "blur(1.8px) brightness(50%)");
    cleanlinessButton.style("filter", "blur(1.8px) brightness(50%)");

  } else if (hunger <= 40 || energy <= 40 || cleanliness <= 40) {

    playButton.style("filter", "brightness(50%)");// makes all 4 buttons dark, but not blurry
    sleepButton.style("filter", "brightness(50%)");
    feedButton.style("filter", "brightness(50%)");
    cleanlinessButton.style("filter", "brightness(50%)");

  } else {
    playButton.style("filter", "none"); // returns all 4 buttons to normal
    sleepButton.style("filter", "none");
    feedButton.style("filter", "none");
    cleanlinessButton.style("filter", "none");
  }
  if (hunger <= 40 || energy <= 40 || cleanliness <= 40) { // makes the screen dark when any need is 40 or below
    fill(0, 0, 0, 120);
    rect(0, 0, 800, 800);
  }
}


function preload() { //preload function allows the background to fload in first before my game does
  backgroundImage = loadImage("Images/bedroom.png");
  statsImage = loadImage("Images/bar.png");
  myFont = loadFont("Fonts/Cutefont.ttf"); //for my text font

  happy1 = loadImage("Images/Happy1.png");
  happy2 = loadImage("Images/Happy2.png");
  idle1 = loadImage("Images/Idle1.png");
  idle2 = loadImage("Images/Idle2.png");
  sad1 = loadImage("Images/Sad1.png");
  sad2 = loadImage("Images/Sad2.png");
  sick1 = loadImage("Images/Sick1.png");
  sick2 = loadImage("Images/Sick2.png");
  falling1 = loadImage("Images/Falling1.png");
  falling2 = loadImage("Images/Falling2.png");
  sleeping1 = loadImage("Images/Sleeping1.png");
  sleeping2 = loadImage("Images/Sleeping2.png");
  wakingUp = loadImage("Images/Wakingup.png");
}