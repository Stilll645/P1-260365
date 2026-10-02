let colors = ["red", "green", "blue", "yellow", "pink", "purple"];
let color1 = ["blue", "red", "purple", "yellow", "green", "pink"];
let shapes = ["circle", "rectangle"];
let amountOfRectangles = 20;
let rectangles = [];
let circles = [];

function setup() {
  createCanvas(800, 600);


  for (let i = 0; i < amountOfRectangles; i++) {
    let shape = random(shapes);

    if (shape == "rectangle") {
      let x = random(0, 800); //  chooses stuff at random 
      let y = random(0, 600);
      let w = random(10, 150);
      let h = random(10, 150);
      let kleur = random(colors);
      rectangles.push([x, y, w, h, kleur]);

    }

    if (shape == "circle") {
      let x = random(0, 800); //chooses stuff at random 
      let y = random(0, 600);
      let r = random(10, 150);
      let kleur = random(colors);
      circles.push([x, y, r, kleur]);

    }

  }

}

function draw() {
  background(220);



  for (let i = 0; i < rectangles.length; i++) {

    fill(rectangles[i][4]);
    rect(rectangles[i][0], rectangles[i][1], rectangles[i][2], rectangles[i][3]);
  }

for (let i = 0; i < circles.length; i++) {

    fill(circles[i][3]);
    circle(circles[i][0], circles[i][1], circles[i][2]);
  }


}
