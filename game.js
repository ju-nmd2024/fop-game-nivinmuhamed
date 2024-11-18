//christmas tree game
// Nivin Muhamed, muni24by

function setup() {
  createCanvas(800, 600);
}

let treeX = 400;
let treeY = 540;
let state = "start";

//game logic
let velocityY = 1;
let acceleration = 1;

//start screen game
function startScreen() {
  background(95, 15, 22);
  christmasOrnaments ();
  noStroke();
  textSize(50);
  push();
  fill(30, 121, 44);
  rect(135, 155, 315, 130, 20);
  pop();
  text("Click to start", 150, 235);
}

// colors, red - 195, 15, 22, gold - 255, 205, 60, grey - 192, 192, 192, 
function christmasOrnaments() {
  stroke(0);
  strokeWeight(2);
  fill(255, 205, 60);
  line(30, 0, 30, 75);
  ellipse(30, 75, 20);
  fill(195, 15, 22);
  line(100, 0, 100, 115);
  ellipse(100, 115, 30);
  fill(192, 192, 192);
  line(175, 0, 175, 70);
  ellipse(175, 70, 20);
  fill(255, 205, 60);
  line(235, 0, 235, 90);
  ellipse(235, 90, 30);
  fill(195, 15, 22);
  line(305, 0, 305, 120);
  ellipse(305, 120, 25);
  fill(192, 192, 192);
  line(370, 0, 370, 80);
  ellipse(370, 80, 32);
  fill(255, 205, 60);
  line(450, 0, 450, 115);
  ellipse(450, 115, 27);
  fill(195, 15, 22);
  line(535, 0, 535, 60);
  ellipse(535, 60, 20);
}

//game screen
function gameScreen() {
  background(95, 15, 22);
  noStroke();
  textSize(35);
  push();
  fill(30, 121, 44);
  rect(210, 155, 130, 70, 20);
  pop();
  push();
  fill(95, 15, 22);
  text("Game", 227, 200);
  pop();
  tree(treeX,treeY);
}

function lostScreen() {
  background(100, 200, 200);
  noStroke();
  text("You lost", 210, 210);
}

function wonScreen() {
  background(100, 100, 100);
  noStroke();
  text("You won!", 210, 210);
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

//space key, it will control the acceleration
if (keyIsDown(32) === true) {
  acceleration = -1;
} else {
  acceleration = 0.5;
}

function draw() {
  //starting screen
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();

    //christmas tree falling
    if (tree >= 1210) {
      if (velocity <= 5) {
        state = "won";
      } else if (velocity > 5) {
        state = "lost";
      }
    }
  }
}

