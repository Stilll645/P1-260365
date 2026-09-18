//Blokje laten verschijnen
let player;

let pressedKeys = {}; //map of all keys being pressed at any given time

//Teller

function setup() {
  createCanvas(600, 600);
  player = new Player(width/11, height/11); //creating the player in the middle of the screen
}



function draw() {
  background(220);
  player.update(); //updates player
  player.draw(); //draws player
}



function keyPressed() {  
  pressedKeys[key] = true;
}

function keyReleased() { //pressed keys is only going to be holding whichever keys i've got currently pushed down
  delete pressedKeys[key];
}

class Player { 
  constructor (x, y) { //takes in a x, y location 
    this.x = x; //stored the location onto the player
    this.y = y;

    this.speed = 4; //speed variabel 
  }



  update() {
    let mvmt = createVector(0, 0); //adds movement to character

      if(pressedKeys.a) {
       mvmt.x -= 1; //move to the left
      }

      if(pressedKeys.d) {
       mvmt.x += 1; // right
      }

      if(pressedKeys.w) {
       mvmt.y -= 1; //up
      }

      if(pressedKeys.s) {
       mvmt.y += 1; //down
      }
    


    mvmt.setMag(this.speed); //caps the players motion to be at maximum speed 

    this.x += mvmt.x; //x movement
    this.y += mvmt.y; //y movement
  }





  draw() { //draws the square at the location of the player
    fill(198,0,0);
    rect(this.x, this.y, 30);
  }
}