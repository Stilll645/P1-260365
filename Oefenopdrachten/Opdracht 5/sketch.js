//let kleuren = ["red" , "orange" , "green" ];

function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(220); 
  
  // opdracht 1
  for (let i = 0; i < 10; i++) { //i is equal to one, i is smaller than 10
    fill(0);
     text("1.", 10, 15);

    if (i==6) fill(10,60,220); //the blue part
    else fill(255); // the rest being white
    strokeWeight(1);
    rect(20 + 50 * i, 15, 50, 50);
 }

  for (let i = 0; i < 5; i++) { //number 2
    if (i==0)fill(0); 
    if (i==1)fill(70);
    if (i==2)fill(160);
    if (i==3)fill(220);
    if (i==4)fill(255);
   rect(20, 105 + i * 50, 50, 50);
       fill(0);
     text("2.", 10, 100);
  }
  
  let x4 = 80       //Opdracht 3
  let y4 = 30
  for (let i = 0; i < 4; i++) {
    fill(0, i * 60, 0);
    rect(x4, 105, y4, 50);
    x4 += y4;
    y4 += 30; // the += adds to certain things, here i'm adding to the Y position
         fill(0);
     text("3.", 80, 100);
  }

  let x3 = 80 //x position //Opdracht 4
  let y3 = 20 //width
  let h3 = 30 //height
  for (let i = 4; i > 0; i--) {
    fill( 0,0, i * 57);
    rect(x3, 205, y3, h3);
    x3 += y3; //space inbetween
    y3 += y3; // makes it align with the green boxes
    h3 += 30; //it makes it go down
           fill(0);
     text("4.", 80, 200);
  }

 let x2 = 540 //Opdracht 5 
 let y2 = 20
 for (let i = 0; i < 5; i++) {
   fill(255);
   strokeWeight(i * 2);
  circle(x2 + 40 * i, 35, y2);
         fill(0);
     text("5.", 530, 20);
}

let x1 = 520 //Opdracht 6
let y1 = 220
let toggle = true;
 for (let i = 0; i < 10; i++) {
  strokeWeight(1);
  fill(toggle ? "red" : "white") //is toggle true, if yes = red
circle(x1, 200, y1);
y1 -= 25; //I'm making the circles smaller by using -=
toggle = !toggle;  // this toggle function makes it so that it constantly switches colour 
       fill(0);
     text("6.", 400, 100);
}

let x0 = 635
let y0 = 105
let h0 = 20
let toggl = true;
for (let i = 0; i < 21; i++) {
  fill(toggl ? "grey" : "white") //if toggl is true then it turns grey, if not then white
  rect(x0, y0 , h0, 10);
 y0 += 10; //this makes it so that it shows all 21 rect
 toggl = !toggl; //this switches it from grey to white
 if (i < 10 ) { //if i is smaller than 10
   h0 += 10  // Then it grows larger
 } else  { //If i is larger than 10
h0 -= 10  //Then is grows smaller
 }
  
 fill(0);
 text("7.", 620, 100);
}

}
