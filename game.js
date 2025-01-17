//christmas tree game
// Nivin Muhamed, muni24by

function setup() {
  createCanvas(800, 600);
}

let treeY = 10;
let x = 100;
let y = 100;
let state = "start";
//help from your videos and a second year NMD student, Markus 
let treeX = Math.floor(Math.random() * (700 - 0 + 1)) + 100;

//game logic,, help from fellow nmd24 student, Hedda Pettersson
let velocityY = 0.5;
let acceleration = 0.4;

//start screen game
function startScreen() {
  background(95, 15, 22);
  christmasOrnaments();
  noStroke();
  textSize(50);
  push();
  fill(30, 121, 44);
  rect(x + 140, y + 100, x + 215, y + 30, 20);
  pop();
  text("Click to start", x + 160, y + 185);
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
  rect(x + 65, y + 418, x - 60, y - 55);
  rect(x + 60, y + 415, x - 50, y - 88);
  pop();
  
  //fireplace
  fill(139, 69, 19);
  rect(x + 300, y + 265, x + 100);
  push();
  //the side of fireplace 
  fill(101, 67, 33);
  rect(x + 290, y + 265, x - 70, y + 100);
  rect(x + 485, y + 265, x - 70, y + 100);
  pop();
  //top and bottom light ones of fireplace 
  fill(140, 102, 58);
  rect(x + 270, y + 265, x + 165, y - 60);
  rect(x + 270, y + 445, x + 165, y - 60);
  push();
  //middle top of fireplace 
  fill(101, 67, 33);
  rect(x + 270, y + 265, x + 165, y - 80);
  //bottom brown 
  rect(x + 260, y + 463, x + 185, y - 78);
  pop();
  //top beige
  rect(x + 260, y + 245, x + 185, y - 70);
  //inside of fireplace 
  push();
  noStroke();
  fill(53, 30, 20);
  rect(x + 350, y + 364, x + 4, y - 20); 
  ellipse(x + 402, y + 365, x + 3.5);
  pop();
  
  //fill(101, 67, 33);
  //fill(175, 128, 79);
  //ljus brun/beige 140, 102, 58
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
  rect(x + 140, y + 100, x + 215, y + 30, 20);
  pop();
  textSize(50);
  text("You lost", x + 200, y + 170);
  textSize(20);
  text("YOU RUINED CHRISTMAS:(", x + 170, y + 205);
  christmasOrnaments();
  treeY = -200;
  velocityY = 0;
}

function wonScreen() {
  background(95, 15, 22);
  noStroke();
  push();
  fill(30, 121, 44);
  rect(x + 140, y + 100, x + 215, y + 30, 20);
  pop();
  textSize(50);
  text("You won!", x + 195, y + 170);
  textSize(20);
  text("YAY! You saved christmas!", x + 180, y + 205);
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

  if (treeY >= 700) {
    if (velocityY <= 5 && treeX >= 100 && treeX <= 400) {
      state = "won";
    } else if (velocityY > 5) {
      state = "lost";
    } else {
      state = "lost";
    }
  }
  if (treeY >= 700 && velocityY >= 5 && treeX < 245 && treeX > 300) {
    state = "lost";
  }
  //the key that will control the acceleration
  //got help from a second year NMD student, Markus Ekerheim
  if (keyIsDown(UP_ARROW) === true) {
    velocityY = velocityY - acceleration * 2;
  }
  if (keyIsDown(LEFT_ARROW) === true) {
    treeX = treeX - 5;
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    treeX = treeX + 5;
  }
}

function mouseClicked() {
  if (state === "start") {
    treeX = Math.floor(Math.random() * (700 - 0 + 1)) + 100;

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
