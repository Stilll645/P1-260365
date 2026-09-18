//Hier maak ik mijn variebellen

let x = 100;
let greeting = "Hello World!";
let a = 20;
let b = 10;
let optellen 
let aftrekken 
let vermenigvuldigen
let delen
let y = 80;



function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);

  optellen = a + b; //Hier maak ik de inhoud van de variebellen
  aftrekken = a - b;
  vermenigvuldigen = a * b;
  delen = a / b;

//Hier zet ik al mijn tekst op de pagina
  text(optellen, 20, y); //Met optellen heb ik al de som gemaakt dus hier moet ik allen de variebele zetten en de positie
  text(aftrekken, 20, y + 15);
  text(vermenigvuldigen, 20, y + 30);
  text(delen, 20, y + 45);

  //Hier combineer ik mijn tekst en een getal
  text("I usually need around " + 3 + " euro's for my bus fare.", 20, y + 70);

  text(x, 20, 20);
  text(greeting, 20, 60);

  }






