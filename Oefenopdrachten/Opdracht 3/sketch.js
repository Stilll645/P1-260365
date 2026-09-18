let score;



 function setup() {
  createCanvas(400, 200);
  score = random(0, 100);
  score = round(score, 1);
}

function draw() {
  background(220);


  

  if (score >=90) {
    fill(3,137,0);
    text("Uitstekend!", 30, 100);
  } else if (score >=70 && score <=89) {
    fill(255,241,28);
    text("Goed gedaan!", 30, 100);
  } else if (score >=50 && score <=69) {
    fill(243,125,8);
    text("Voldoende.", 30, 100);
  } else {
    fill(198,0,0);
    text("Onvoldoende.", 30, 100);
  }
  
  fill(0);
  text("Score: " + score, 30, 80);




}
