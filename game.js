//christmas tree game
// Nivin Muhamed, muni24by

function setup() {
  createCanvas(800, 600);
}

let treeX = 400;
let treeY = 540;
let x = 100;
let y = 100; 
let state = "start";

//game logic
let velocityY = 1;
let acceleration = 0.5;

//start screen game
function startScreen() {
  background(95, 15, 22);
  christmasOrnaments();
  noStroke();
  textSize(50);
  push();
  fill(30, 121, 44);
  rect(240, 220, 315, 130, 20);
  pop();
  text("Click to start", 260, 300);
}

// colors, red - 195, 15, 22, gold - 255, 205, 60, grey - 192, 192, 192,
function christmasOrnaments() {
  stroke(0);
  strokeWeight(2);
  //gold
  fill(255, 205, 60);
  line(x - 70, 0, x - 70, y - 25);
  ellipse(x - 70, y - 25, 20);
  //red
  fill(195, 15, 22);
  line(x, 0, x, y + 15);
  ellipse(x, y + 15, 30);
  fill(192, 192, 192);
  line(x + 75, 0, x + 75, y - 30);
  ellipse(x + 75, y - 30, 20);
  //gold
  fill(255, 205, 60);
  line(x + 135, 0, x + 135, y - 10);
  ellipse(x + 135, y - 10, 30);
  fill(195, 15, 22);
  line(x + 205, 0, x + 205, y + 20);
  ellipse(x + 205, y + 20, 25);
  //grey
  fill(192, 192, 192);
  line(x + 510, 0, x + 510, y - 10);
  ellipse(x + 510, y - 10, 25);
  line(x + 270, 0, x + 270, y - 20);
  ellipse(370, 80, 32);
  //gold
  fill(255, 205, 60);
  line(x + 350, 0, x + 350, y + 15);
  ellipse(x + 350, y + 15, 27);
  line(x + 590, 0, x + 590, y + 20);
  ellipse(x + 590, y + 20, 30);
  //red
  fill(195, 15, 22);
  line(x + 435, 0, x + 435, y - 40);
  ellipse(x + 435, y - 40, 20);
  line(x + 670, 0, x + 670, y + 10);
  ellipse(x + 670, y + 1, 35);
  //pot and floor
  push();
  fill(84, 54, 32);
  rect(0, y + 450, x + 700);
  //brown color taken from chatgpt
  fill(101, 67, 33);
  rect(x + 152, y + 418, x - 60, y - 55);
  rect(x + 147, y + 415, x - 50, y - 88);
  pop();
}

//game screen
function gameScreen() {
  background(95, 15, 22);
  tree(treeX, treeY);
  christmasOrnaments();
  treeY = treeY + velocityY;
  velocityY = velocityY + acceleration;
  if (treeY >= 700) {
    if (velocityY <= 5) {
      state = "won";
    } else if (velocityY > 5) {
      state = "lost";
    }
  }
}

function lostScreen() {
  background(95, 15, 22);
  noStroke();
  push();
  fill(30, 121, 44);
  rect(250, 220, 315, 130, 20);
  pop();
  textSize(50);
  text("You lost", 315, 295);
  textSize(20);
  text("YOU RUIEND CHRISTMAS:(", 280, 330);
  christmasOrnaments();
  treeY = -200;
  velocityY = 0;
}

function wonScreen() {
  background(95, 15, 22);
  noStroke();
  push();
  fill(30, 121, 44);
  rect(250, 220, 315, 130, 20);
  pop();
  textSize(50);
  text("You won!", 305, 295);
  textSize(20);
  text("YAY! You saved christmas!", 290, 330);
  christmasOrnaments();
  treeY = -200;
  velocityY = 0;
}

function tree(x, y) {
  //tree
  push();
  scale(0.56);
  fill(53, 33, 0);
  rect(x + 70, y + 200, 30, 50);
  fill(0, 100, 0);
  noStroke();
  triangle(x + 90, y - 70, x + 40, y - 15, x + 140, y - 15);
  triangle(x + 90, y - 50, x + 15, y + 45, x + 170, y + 45);
  triangle(x + 90, y - 20, x - 20, y + 120, x + 200, y + 120);
  triangle(x + 90, y, x - 55, y + 200, x + 233, y + 200);
  //decorations
  fill(255, 205, 60);
  triangle(x + 90, y - 89, x + 72, y - 60, x + 106, y - 60);
  triangle(x + 75, y - 80, x + 105, y - 80, x + 90, y - 50);
  fill(195, 15, 22);
  ellipse(x + 150, y + 155, 15);
  ellipse(x + 25, y + 105, 15);
  ellipse(x + 65, y + 20, 15);
  fill(192, 192, 192);
  ellipse(x + 85, y + 155, 15);
  ellipse(x + 120, y + 50, 15);
  fill(206, 172, 92);
  ellipse(x + 80, y + 90, 15);
  ellipse(x + 30, y + 180, 15);
  pop();
}

// gravity logic
treeY = treeY + velocityY;
velocityY = velocityY + acceleration;

function draw() {
  //starting screen
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lost") {
    lostScreen();
  } else if (state === "won") {
    wonScreen();
  }

  if (treeY >= 700 && velocityY <= 5) {
    state = "won";
  }
  if (treeY >= 700 && velocityY >= 5) {
    state = "lost";
  }
  //the key that will control the acceleration
  //got help from a second year NMD student, Markus Ekerheim
  if (keyIsDown(UP_ARROW) === true) {
    velocityY = velocityY - acceleration * 2;
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "lost";
  } else if (state === "lost") {
    state = "start";
  } else if (state === "won") {
    state = "start";
  }
  console.log(state);
  console.log(velocityY);
}
