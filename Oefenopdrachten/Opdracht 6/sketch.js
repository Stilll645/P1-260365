

function setup() {
  createCanvas(380, 350);
}


function draw() {
  background(220);
  fill(0);
  textSize(14);
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);
  //Color Array
  let colors = ['red', 'green', 'blue', 'purple', 'yellow']

  //Opdracht 1
  for (let i = 0; i < colors.length; i++) {  //colors length counts from 1 and a array startes from 0
    let x1 = 30;
    let y1 = 15;
    fill(colors[i]);
    textSize(13)
    text(colors[i], x1, y1 + i * y1, y1);

  }

  //Opdracht 2
  colors.push(colors.shift()); // removes the first var from the array and colors.shift moves it to the front
  for (let i = 0; i < colors.length; i++) {
    let x2 = 30;
    let y2 = 100;
    fill(colors[i]);
    text(colors[i], x2, 100 + i * 15, y2);
  }

  //Opdracht 3
  colors.splice(1, 2); //removes blue and purple since .push and .shift r still in effect
  for (let i = 0; i < colors.length; i++) {
    let x = 30;
    let y = 190;
    fill(colors[i]);
    text(colors[i], x, 190 + i * 15, y);
  }

  //Opdracht 4
  //Numbers Array
  let numbers = ["420", "240", "10", "490", "30", "60", "244", "500", "301", "300"]; //Each number has a position called index
  //Counter, only counts the numbers that i display
  let part = 0; //means i've displayed 0 numbers
  textSize(14);

  for (let i = 0; i < numbers.length; i++) {
    let x = 30;
    let y = 250;
    fill(0);
    if (numbers[i] < 300) { //is number smaller than 300
      text(numbers[i], x, 250 + part * 15, y);
      part = part + 1;
    }
  }


  //Opdracht 5
  let first = [3, 55, 93, 20, 102, 6];
  let second = [14, 22, 80, 5];
  let total = 0; //the total amoount after everything is added up
  let x = 130
  let y = 15
  textSize(50);

  for (let i = 0; i < second.length; i++) { //i did second.length instead of first because the last 2 numbers in first don't  get added up to anything
    total += first[i] + second[i]; //added numbers up to the total amount
  }
  text(total + first[4] + first[5], x, 130 + -100, y); //putting the result of the total


  //Opdracht 6
  let word = "Overheidsfinancieringstekort"; //since its text, i put it in quotes 
  let aantal = 0; //The amount
  for (let i = 0; i < word.length; i++) {
    if (word[i] == 'e') { //if ur current letter is e
      aantal = aantal + 1; // then it'll add 1 to my amount
    }
  }
  text(aantal + "x", 130, 130 + -10, 100 ); //i moved text outside of loop so it displays the final amount after all the letters have been checked


  //Opdracht 7

  let color = ["red", "green", "blue", "purple", "yellow"]; //new array
  color.sort(); //sorts out my colors in althebetical order
  textSize(14);
  for (let i = 0; i < color.length; i++) {
    let x = 130
    let y = 195
    fill(color[i]); //used the color array to color my text
    text(color[i], x, y + 15 * i, y); //placing my text in the program
  }


 
  

}
