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
let acceleration = 0.5;

//start screen game
function startScreen() {
  background(95, 15, 22);
  christmasOrnaments();
  noStroke();
  textSize(50);
  push();
  fill(30, 121, 44);
  rect(240, 155, 315, 130, 20);
  pop();
  text("Click to start", 260, 235);
}

// colors, red - 195, 15, 22, gold - 255, 205, 60, grey - 192, 192, 192,
function christmasOrnaments() {
  stroke(0);
  strokeWeight(2);
  //gold
  fill(255, 205, 60);
  line(30, 0, 30, 75);
  ellipse(30, 75, 20);
  //red
  fill(195, 15, 22);
  line(100, 0, 100, 115);
  ellipse(100, 115, 30);
  fill(192, 192, 192);
  line(175, 0, 175, 70);
  ellipse(175, 70, 20);
  //gold
  fill(255, 205, 60);
  line(235, 0, 235, 90);
  ellipse(235, 90, 30);
  fill(195, 15, 22);
  line(305, 0, 305, 120);
  ellipse(305, 120, 25);
  //grey
  fill(192, 192, 192);
  line(610, 0, 610, 90);
  ellipse(610, 90, 25);
  line(370, 0, 370, 80);
  ellipse(370, 80, 32);
  //gold
  fill(255, 205, 60);
  line(450, 0, 450, 115);
  ellipse(450, 115, 27);
  line(690, 0, 690, 120);
  ellipse(690, 120, 30);
  //red
  fill(195, 15, 22);
  line(535, 0, 535, 60);
  ellipse(535, 60, 20);
  line(770, 0, 770, 110);
  ellipse(770, 110, 35);
}

//christmastree pot and fireplace
function potAndFireplace() {
  fill(84, 54, 32);
  rect(0, 600, 800, 600);
}

//game screen
function gameScreen() {
  background(95, 15, 22);
  tree(treeX, treeY);
  christmasOrnaments();
  treeY = treeY + velocityY;
  velocityY = velocityY + acceleration;
  if (treeY >= 600) {
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
  rect();
  text("You lost", 300, 235);
  christmasOrnaments();
  treeY = -200;
  velocityY = 0;
}

function wonScreen() {
  background(95, 15, 22);
  noStroke();
  text("You won!", 210, 210);
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

  if (treeY >= 600 && velocityY <= 5) {
    state = "won";
  }
  if (treeY >= 600 && velocityY >= 5) {
    state = "lost";
  }
  //space key, it will control the acceleration
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
