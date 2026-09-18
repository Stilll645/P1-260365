
let carBlueX = 40;
let carYellowX = -50;
let carRedX = 385;

let carblueSpeed = 1.5;
let caryellowSpeed = 2;
let carredSpeed = 1.5;

//Cloud1X
let cloud1X = 595;
let cloud1Y = 85;

let cloud2X = 195;
let cloud2Y = 85;

let cloud3X = 155;
let cloud3Y = 135;

//SUN
let sunX = 100;
let sunY = 70;

//traffic color
let stoplichtKleur = 0;



//Variebeles
// Car
let leftWheel = carBlueX + 30;
let rightWheel = carBlueX + 150;
let body1 = carBlueX;
let body2 = carBlueX + 140;
let window1 = carBlueX + 75;
let window2 = carBlueX + 10;
let innerbody1 = carBlueX + 30;
let innerbody2 = carBlueX + 150;




function setup() {
  createCanvas(800, 600);
}



 function keyPressed() { //When clicking enter, the stoplight changes

    if (keyCode === ENTER) {
      stoplichtKleur = stoplichtKleur + 1
    }
    if (stoplichtKleur > 2) {
      stoplichtKleur = 0
    }
  }

function draw() {
  background(220);


  //The sky
  noStroke(0);

  fill(26, 99, 199);
  rect(0, 0, 800, 100);

  fill(25, 114, 238);
  rect(0, 100, 800, 250);

  fill(52, 135, 250);
  rect(0, 300, 800, 250);


  //SUN
  fill(244, 240, 55);
  circle(sunX, sunY, 70); //Base

  sunX = sunX + 0.5;
  if (sunX > 800) {
    sunX = -250;
  }



  //Cloud1

  fill(209, 209, 209)
  circle(cloud1X + 110, cloud1Y + 15, 60);
  circle(cloud1X + 55, cloud1Y, 70);
  circle(cloud1X, cloud1Y + 15, 60);
  ellipse(cloud1X + 55, cloud1Y + 35, 200, 40);

  fill(255, 255, 255);
  circle(cloud1X + 105, cloud1Y + 25, 60);
  circle(cloud1X + 55, cloud1Y + 15, 70);
  circle(cloud1X + 5, cloud1Y + 25, 60);
  ellipse(cloud1X + 55, cloud1Y + 40, 200, 40);

  cloud1X = cloud1X + 1;
  if (cloud1X > 800) {
    cloud1X = -250;
  }





  //Cloud2
  fill(209, 209, 209)
  circle(cloud2X + 110, 100, 60);
  circle(cloud2X + 55, 85, 70);
  circle(cloud2X, 100, 60);
  ellipse(cloud2X + 55, 120, 200, 40);

  fill(255, 255, 255);
  circle(cloud2X + 105, 110, 60);
  circle(cloud2X + 55, 100, 70);
  circle(cloud2X + 5, 110, 60);
  ellipse(cloud2X + 55, 125, 200, 40);

  cloud2X = cloud2X + 1;
  if (cloud2X > 800) {
    cloud2X = -250;
  }

  //Cloud3
  fill(209, 209, 209)
  circle(cloud3X + 110, 150, 60);
  circle(cloud3X + 55, 135, 70);
  circle(cloud3X, 150, 60);
  ellipse(cloud3X + 55, 170, 200, 40);

  fill(255, 255, 255);
  circle(cloud3X + 105, 160, 60);
  circle(cloud3X + 55, 150, 70);
  circle(cloud3X + 5, 160, 60);
  ellipse(cloud3X + 55, 175, 200, 40);

  cloud3X = cloud3X + 0.5;
  if (cloud3X > 800) {
    cloud3X = -250;
  }


  //Mountains
  //Mountain1

  fill(29, 141, 8);
  triangle(200, 500, 600, 500, 400, 160);
  fill(26, 117, 8);
  triangle(200, 500, 300, 500, 400, 160);

  //Mountain2

  fill(29, 141, 8);
  triangle(100, 500, 400, 500, 250, 280);
  fill(26, 117, 8);
  triangle(100, 500, 200, 500, 250, 280);
  triangle(390, 500, 400, 500, 250, 280);

  //Mountain3
  fill(29, 141, 8);
  triangle(500, 500, 900, 500, 700, 340);
  fill(26, 117, 8);
  triangle(500, 500, 450, 500, 700, 340);


  //Tree Log
  fill(98, 62, 9);
  rect(100, 370, 15, 130);
  rect(600, 370, 15, 130);

  //Tree1
  fill(20, 103, 11);
  triangle(40, 450, 180, 450, 110, 350);
  triangle(50, 400, 170, 400, 110, 300);
  triangle(60, 350, 160, 350, 110, 275);


  //Tree3
  fill(20, 103, 11);
  triangle(540, 450, 680, 450, 610, 350);
  triangle(550, 400, 670, 400, 610, 300);
  triangle(560, 350, 660, 350, 610, 275);

  //Road
  //Large Part of the road
  noStroke(0);
  fill(102, 102, 102);
  rect(0, 510, 800, 90);

  //thin layer of road
  fill(74, 74, 74);
  rect(0, 510, 800, 6);

  //Lines on the road
  fill(197, 197, 197);
  rect(-20, 555, 90, 10, 5);
  rect(140, 555, 90, 10, 5);
  rect(300, 555, 90, 10, 5);
  rect(460, 555, 90, 10, 5);
  rect(640, 555, 90, 10, 5);
  rect(800, 555, 90, 10, 5);


  //Grass
  //Light Green Part
  fill(16, 119, 18);
  rect(0, 501, 800, 9);

  //Dark Green Part
  fill(6, 55, 7);
  rect(0, 496, 800, 6);


  //TrafficLightGrey
  fill(45, 45, 45);
  rect(525, 385, 10, 130, 5);
  rect(510, 300, 40, 130, 2);

  //DARKRED
  fill(72, 0, 0);
  circle(530, 325, 33);

  //DARKYELLOW
  fill(70, 72, 0);
  circle(530, 365, 33);

  //DARKGREEN
  fill(0, 56, 4);
  circle(530, 405, 33);


  if (stoplichtKleur == 0) {
    fill(219, 49, 49);
    circle(530, 325, 33);
  }
  else {
    fill("gray");
  }


  if (stoplichtKleur == 2) {
    fill(255, 223, 24);
    circle(530, 365, 33);
  }
  else {
    fill("gray");
  }

  if (stoplichtKleur == 1) {
    fill(5, 232, 0);
    circle(530, 405, 33);
  }
  else {
    fill("gray");
  }



  console.log(stoplichtKleur)

  if (stoplichtKleur == 0)
  {
    console.log("red")
    carredSpeed = 0;
    carblueSpeed  = 0;
    caryellowSpeed = 0;
  }
  else if(stoplichtKleur == 1)
  {
    console.log("green")
    carblueSpeed = 1.5;
    caryellowSpeed = 2;
    carredSpeed = 1.5;
  }
  else if(stoplichtKleur == 2)
  {
    console.log("yellow");
    carblueSpeed = 0.8;
    caryellowSpeed = 1.3;
    carredSpeed = 0.7;
  }

  //Moving Parts CarYellow
  carYellowX = carYellowX + caryellowSpeed;
  if (carYellowX > 800) {
    carYellowX = -250;
  }

  drawCar(color(245, 220, 34), carYellowX, 440);

  //Moving Parts CarBlue
  carBlueX = carBlueX + carblueSpeed;
  if (carBlueX > 800) {
    carBlueX = -250;
  }

  drawCar(color(0, 48, 186), carBlueX, 490);


  //Moving Parts CarRed
  carRedX = carRedX +carredSpeed;
  if (carRedX > 800) {
    carRedX = -250;
  }

  drawCar(color(157, 11, 11), carRedX, 490);



  // Tree 2
  noStroke(0);
  fill(98, 62, 9);
  rect(200, 480, 15, 130);

  //Tree2
  fill(10, 85, 2);
  triangle(150, 560, 270, 560, 210, 450);
  triangle(160, 510, 260, 510, 210, 410);


}

function drawCar(carcolor, x, y) {
  //Moving Parts of CarBlue


  //Hier maak ik de auto
  //CarBlue Body
  noStroke(0);
  fill(carcolor)
  //fill(0, 48, 186);
  rect(x + body1, y, 140, 80, 5);
  rect(x + body2, y + 30, 40, 50, 2);

  //Window Blue
  fill(202, 239, 248);
  rect(x + window1, y + 6, 55, 25);
  rect(x + window2, y + 6, 55, 25);
  //WheelsBlue
  fill(0);
  circle(x + leftWheel, y + 80, 50);
  circle(x + rightWheel, y + 80, 50);

  //Wheel insidesBlue
  stroke(42, 42, 42);
  strokeWeight(5);
  circle(x + innerbody1, y + 80, 38);
  circle(x + innerbody2, y + 80, 38);
}
