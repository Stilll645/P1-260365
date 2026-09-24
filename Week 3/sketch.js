let vak1X = 30;
let vak1Y = 80;
let vakSize = 80;

let vak1colour = 0;
let vak2colour = 0;
let vak3colour = 0;
let vak4colour = 0;
let vak5colour = 0;
let vak6colour = 0;
let vak7colour = 0;
let vak8colour = 0;
let vak9colour = 0;

let player = 1;

let boing; //soundeffect
let applause; //soundeffect
let winner = false;
let winnerPlayer = 0;


function preload() {
  boing = loadSound('boing.ogg');
  applause = loadSound('applause.mp3');
}
function mouseHover() {
  rect(vak1X + 20, vak1Y + 20, vakSize, vakSize, 5);
}

function setup() {
  createCanvas(365, 470);
}

function draw() {
  background(220);
  
 fill(255);
 strokeWeight(5);
 rect(vak1X + 100, vak1Y + 320, 100, 40, 10);
 fill(0);
 textSize(20);
 text("Restart?",142, 425 );

  if (    //Here im making it so that if all the boxes aren't equal to 0 then there'd be a draw
  vak1colour != 0 &&
  vak2colour != 0 &&
  vak3colour != 0 &&
  vak4colour != 0 &&
  vak5colour != 0 &&
  vak6colour != 0 &&
  vak7colour != 0 &&
  vak8colour != 0 &&
  vak9colour != 0 
  )  if (winner == false) { //Tells my program theres no winner
    fill(0,126,50);
    textSize(30);
    text("It's a Draw...", 50, 40);
  }

  if (winner == true ) {
    if (winnerPlayer == 1) {
    fill(0,126,50);
    textSize(30);
    text("Player " + winnerPlayer +  " has Won!", 50, 40);
    if(applause.isPlaying() == false) //Always there to give applause
    {
      applause.play();
    }
    }

    if (winnerPlayer == 2){
    fill(0,126,50);
    textSize(30);
    text("Player " + winnerPlayer +  " has Won!", 50, 40);
     if(applause.isPlaying() == false) //Always there to give applause
    {
      applause.play();
    }
  }
}
  // ( rectangles )
  fill(0);
  rect(vak1X, vak1Y, 300, 300, 10);

  //Box1  Here i'm creating the shape and size of the rects and whether they turn red or blue
  if (vak1colour == 0) { //If theres nothing clicked, it's white
    fill(255) //white
  }
  else if (vak1colour == 1) { //If it's player 1, it turns red
    fill(184, 0, 0); //red
  }
  else if (vak1colour == 2) { //If it's player 2, it turns blue
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 20, vak1Y + 20, vakSize, vakSize, 5);

  //Box2
  if (vak2colour == 0) {
    fill(255) //white
  }
  else if (vak2colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak2colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 110, vak1Y + 20, vakSize, vakSize, 5);

  //Box3
  if (vak3colour == 0) {
    fill(255) //white
  }
  else if (vak3colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak3colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 200, vak1Y + 20, vakSize, vakSize, 5);

  //Box4
  if (vak4colour == 0) {
    fill(255) //white
  }
  else if (vak4colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak4colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 20, vak1Y + 110, 80, 80, 5);

  //Box5
  if (vak5colour == 0) {
    fill(255) //white
  }
  else if (vak5colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak5colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 110, vak1Y + 110, 80, 80, 5);

  //Box6
  if (vak6colour == 0) {
    fill(255) //white
  }
  else if (vak6colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak6colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 200, vak1Y + 110, 80, 80, 5);

  //Box7
  if (vak7colour == 0) {
    fill(255) //white
  }
  else if (vak7colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak7colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 20, vak1Y + 200, 80, 80, 5);

  //Box8
  if (vak8colour == 0) {
    fill(255) //white
  }
  else if (vak8colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak8colour == 2) {
    fill(0, 51, 184); //blue
  }
  rect(vak1X + 110, vak1Y + 200, 80, 80, 5);

  //Box9
  if (vak9colour == 0) { 
    fill(255) //white
  }
  else if (vak9colour == 1) {
    fill(184, 0, 0); //red
  }
  else if (vak9colour == 2) {
    fill(0, 51, 184); //blue
  }
 rect(vak1X + 200, vak1Y + 200, 80, 80, 5);

}


function changeTurn() { //It changes the turn for the 2 players
  checkWinner() //im using the checkwinner function so i can actually implement it into my code
  player = player + 1; //That'll become player 2 
  if (player > 2) { //Don't want a number bigger than 2
    player = 1;
  }
}

function checkWinner() {
 if (
 vak1colour == vak2colour && //basically asking does box 1 belong to the same player
 vak2colour == vak3colour &&
 vak1colour != 0 //is box 1 NOT empty WIN 1
 ) {
  console.log('winner '+ vak1colour) //checking in consolelog if it works
  winner = true; //im saying someone has won
  winnerPlayer = vak1colour; //takes whatever number is currently inside vak1colour and copy it into winnerPlayer
 } 
 if (
 vak4colour == vak5colour &&  //WIN 2
 vak5colour == vak6colour &&
 vak4colour != 0
 ) {
  console.log('winner '+ vak4colour)
  winner = true; 
  winnerPlayer = vak4colour; 
 } 
 if (
 vak7colour == vak8colour && // WIN3
 vak8colour == vak9colour && 
 vak7colour != 0
 ) {
  console.log('winner '+ vak7colour)
  winner = true; //
  winnerPlayer = vak7colour; 
 } 
 if (
 vak1colour == vak4colour && // WIN4
 vak4colour == vak7colour && 
 vak1colour != 0
 ) {
  console.log('winner '+ vak1colour)
  winner = true; 
  winnerPlayer = vak1colour; 
 } 
  if (
 vak2colour == vak5colour && // WIN5
 vak5colour == vak8colour && 
 vak2colour != 0
 ) {
  console.log('winner '+ vak2colour)
  winner = true; 
  winnerPlayer = vak2colour; 
 } 
  if (
 vak3colour == vak6colour && // WIN6
 vak6colour == vak9colour && 
 vak3colour != 0
 ) {
  console.log('winner '+ vak3colour)
  winner = true; 
  winnerPlayer = vak3colour; 
 } 
  if (
 vak1colour == vak5colour && // WIN7
 vak5colour == vak9colour && 
 vak1colour != 0
 ) {
  console.log('winner '+ vak1colour)
  winner = true; 
  winnerPlayer = vak1colour; 
 } 
  if (
 vak3colour == vak5colour && // WIN8
 vak5colour == vak7colour && 
 vak3colour != 0
 ) {
  console.log('winner '+ vak3colour)
  winner = true; 
  winnerPlayer = vak3colour; 
 } 
}

function mousePressed() { //Making sure the mouse press only counts inside the boxes i want
 
 
  if (mouseX > vak1X + 100 && mouseX < vak1X + 200)  //Makes sure u can click the restart button
  if (mouseY > vak1Y + 320 && mouseY < vak1Y + 360) {
    vak1colour = 0; 
    vak2colour = 0;
    vak3colour = 0; 
    vak4colour = 0;
    vak5colour = 0; 
    vak6colour = 0;
    vak7colour = 0; 
    vak8colour = 0;
    vak9colour = 0; 
    winner = false;
    winnerPlayer = 0;
    player = 1;

 }


  //Box1
  if (mouseX > vak1X + 20 && mouseX < vak1X + 20 + vakSize) { //Making sure it gets clicked within the area i want it to be clicked
    if (mouseY > vak1Y + 20 && mouseY < vak1Y + 20 + vakSize) { //Making sure it gets clicked within the area i want it to be clicked
      if (winner == false && vak1colour == 0) { //I'm checking if the player has won and if the box is empty
        vak1colour = player; //the Box has the players colour
        changeTurn(); //Next player gets to click box
        boing.play(); //soundeffect
      }
    }
  }
  //Box2
  if (mouseX > vak1X + 110 && mouseX < vak1X + 110 + vakSize) {
    if (mouseY > vak1Y + 20 && mouseY < vak1Y + 20 + vakSize) {
      if (winner == false && vak2colour == 0) {
        vak2colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box3
  if (mouseX > vak1X + 200 && mouseX < vak1X + 200 + vakSize) {
    if (mouseY > vak1Y + 20 && mouseY < vak1Y + 20 + vakSize) {
      if (winner == false && vak3colour == 0) {
        vak3colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box4
  if (mouseX > vak1X + 20 && mouseX < vak1X + 20 + vakSize) {
    if (mouseY > vak1Y + 110 && mouseY < vak1Y + 110 + vakSize) {
      if (winner == false && vak4colour == 0) {
        vak4colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box5 
  if (mouseX > vak1X + 110 && mouseX < vak1X + 110 + vakSize) {
    if (mouseY > vak1Y + 110 && mouseY < vak1Y + 110 + vakSize) {
      if (winner == false && vak5colour == 0) {
        vak5colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box6
  if (mouseX > vak1X + 200 && mouseX < vak1X + 200 + vakSize) {
    if (mouseY > vak1Y + 110 && mouseY < vak1Y +110 + vakSize) {
      if (winner == false && vak6colour == 0) {
        vak6colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box7
  if (mouseX > vak1X + 20 && mouseX < vak1X + 20 + vakSize) {
    if (mouseY > vak1Y + 200 && mouseY < vak1Y + 200 + vakSize) {
      if (winner == false && vak7colour == 0) {
        vak7colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box8
  if (mouseX > vak1X + 110 && mouseX < vak1X + 110 + vakSize) {
    if (mouseY > vak1Y + 200 && mouseY < vak1Y + 200 + vakSize) {
      if (winner == false && vak8colour == 0) {
        vak8colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
  //Box9
  if (mouseX > vak1X + 200 && mouseX < vak1X + 200 + vakSize) {
    if (mouseY > vak1Y + 200 && mouseY < vak1Y + 200 + vakSize) {
      if (winner == false && vak9colour == 0) {
        vak9colour = player;
        changeTurn();
        boing.play();
      }
    }
  }
}