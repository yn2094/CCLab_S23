let lungs;
let clouds = [];
let trees = [];
let birds = [];
let rain = [];
let fish = [];
let introScreen = true;
let raining = false;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 0; i++) {
    clouds.push(new Cloud(random(width), random(50, 150)));
  }

  for (let i = 0; i < 0; i++) {
    trees.push(new Tree(random(width), 500));
  }

  for (let i = 0; i < 0; i++) {
    birds.push(new Bird(random(width), random(200, 400)));
  }

  for (let i = 0; i < 7; i++) {
    fish.push(new Fish(random(width), random(510, 590)));
  }

  lungs = new Lungs();
}

function draw() {
  if (introScreen) {
    drawIntroScreen();
  } else {
    background(135, 200, 250);

    //water
    fill(0, 110, 0);
    rect(0, 500, 800, 100);
    fill(0, 0, 255, 150);
    beginShape();
    vertex(0, 600);
    vertex(0, 500);
    bezierVertex(200, 450, 400, 450, 400, 500);
    vertex(800, 500);
    vertex(800, 600);
    endShape(CLOSE);

    for (let i = 0; i < clouds.length; i++) {
      let cloud = clouds[i];
      cloud.update();
      cloud.display();
    }

    for (let i = 0; i < trees.length; i++) {
      let tree = trees[i];
      tree.display();
    }

    for (let i = 0; i < fish.length; i++) {
      let fishs = fish[i];
      fishs.update();
      fishs.display();
    }

    for (let i = 0; i < birds.length; i++) {
      let bird = birds[i];
      bird.update();
      bird.display();
    }

    if (raining) {
      rain.push(new Rain(random(width), 0));

      for (let i = 0; i < rain.length; i++) {
        rain[i].update();
        rain[i].display();
        rain[i].checkForWater();
      }
    }
    lungs.update();
    lungs.display();

    //sun
    noStroke();
    fill(250, 230, 110);
    circle(75, 70, 110);
    fill(250, 210, 0);
    circle(75, 70, 95);
    fill(250, 220, 120);
    circle(75, 70, 85);
    fill(250, 235, 40);
    circle(75, 70, 70);

    //trachea for lungs
    stroke(255);
    strokeWeight(0.5);
    fill(255, 180, 200);
    ellipse(400, 130, 40, 20);
    ellipse(400, 135, 40, 20);
    ellipse(400, 140, 40, 20);
    ellipse(400, 145, 40, 20);
    ellipse(400, 150, 40, 20);
    ellipse(400, 155, 40, 20);
    ellipse(400, 160, 40, 20);
    ellipse(400, 165, 40, 20);
    ellipse(400, 170, 40, 20);
    ellipse(400, 175, 40, 20);
    ellipse(400, 180, 40, 20);
    ellipse(400, 185, 40, 20);
    ellipse(400, 190, 40, 20);
    ellipse(400, 195, 40, 20);
    ellipse(400, 200, 40, 20);
    ellipse(400, 205, 40, 20);
    ellipse(400, 210, 40, 20);
    ellipse(400, 215, 41, 21);
    ellipse(400, 220, 43, 22);
    ellipse(400, 225, 45, 23);
  }
}

function drawIntroScreen() {
  background(19, 37, 71);
  textSize(50);
  fill(99, 146, 235);
  text("Nature's Breath", 235, 240);

  textSize(20);
  text("Instructions:", 30, 505);
  textSize(15);
  fill(200);
  text("Hold space bar when Inhaling", 30, 530);
  text("Release space bar when Exhaling", 30, 550);
  text("R key for rain", 30, 570);

  textSize(20);
  fill(135, 162, 212);
  text("--Meditative Experience--", 300, 280);

  textSize(18);
  fill(255);
  text("Press the space bar to begin", 300, 450);

  textSize(18);
  fill(200, 200, 40);
  text("Meditation advice from the legendary Wim Hof", 30, 45);
  fill(200, 100, 40);
  text(
    "Strictly inhale through the nose, first through the belly, then the lungs",
    30,
    65
  );
  text("Exhale from the mouth", 30, 82);
}

function keyPressed() {
  if (keyCode == 32) {
    if (introScreen) {
      introScreen = false;
    } else {
      lungs.startBreathing();
    }
  }

  if (key == "r") {
    if (raining) {
      raining = false;
    } else {
      raining = true;
    }
  }

  if (key == "t") {
    trees.push(new Tree(random(width), 500));
  }

  if (key == "c") {
    clouds.push(new Cloud(random(width), random(50, 150)));
  }

  if (key == "b") {
    birds.push(new Bird(random(width), random(200, 400)));
  }
}

function keyReleased() {
  if (keyCode == 32) {
    lungs.stopBreathing();
  }
}

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(0.5, 3);
    this.speedY = random(-1, 0);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < -30) {
      this.x = width;
    } else if (this.x > width + 30) {
      this.x = -30;
    }

    if (this.y < 550 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(200, 100, 50);
    ellipse(0, 0, 30, 10);
    triangle(-15, 0, -25, -10, -25, 10);
    fill(255);
    ellipse(10, -2, 5, 5);
   
    pop();
  }
}

class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(1, 2);
    this.speedY = random(-1, 2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < -15) {
      this.x = width;
    } else if (this.x > width + 25) {
      this.x = -15;
    }

    if (this.y < -100 || this.y > 500) {
      this.speedY = -this.speedY;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, 15, 15);
    ellipse(-10, -5, 15, 8);
    ellipse(10, -5, 15, 8);
    fill(0);
    ellipse(10, -5, 3, 3);
    pop();
  }
}

class Rain {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-3, 0);
    this.ySpeed = random(-1, -4);
    this.size = random(1, 8);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.ySpeed += 0.05;
    this.xSpeed = this.xSpeed * 0.99;

    while (rain.length > 400) {
      rain.splice(0, 1);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(100, 150, 220);
    ellipse(0, 0, this.size);
    pop();
  }

  checkForWater() {
    if (this.y >= 480 ) {
      this.y = 0;
    }
  }
}
class Lungs {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.scale = 1;
    this.breathing = false;
    this.speed = 0.002;
  }

  update() {
    if (this.breathing) {
      this.scale += this.speed;
    } else {
      this.scale -= this.speed;
    }
    this.scale = constrain(this.scale, 0.8, 1.2);
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);

    scale(3, 3);
    // right lung
    fill(255, 160, 120);
    noStroke();
    beginShape();
    vertex(35, -10);
    bezierVertex(35, -50, 15, -50, 5, -20);
    bezierVertex(0, 0, 25, 20, 5, 40);
    bezierVertex(15, 60, 35, 50, 35, 50);
    bezierVertex(45, 20, 55, 0, 35, -10);
    endShape(CLOSE);

    // left lung
    push();
    scale(-1, 1);
    fill(255, 160, 120);
    noStroke();
    beginShape();
    vertex(35, -10);
    bezierVertex(35, -50, 15, -50, 5, -20);
    bezierVertex(0, 0, 25, 20, 5, 40);
    bezierVertex(15, 60, 35, 50, 35, 50);
    bezierVertex(45, 20, 55, 0, 35, -10);
    endShape(CLOSE);
    pop();
    
    pop();
  }

  startBreathing() {
    this.breathing = true;
  }

  stopBreathing() {
    this.breathing = false;
  }
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(0.3, 1);
    this.cloudcolor = random(215,255);
  }

  update() {
    this.x += this.speed;
    if (this.x > width + 100) {
      this.x = -100;
    }
  }

  display() {
    // fill(random(225, 255));
    fill(this.cloudcolor);
    noStroke();
    ellipse(this.x + 5, this.y, 50, 50);
    ellipse(this.x + 20, this.y - 10, 50, 50);
    ellipse(this.x + 40, this.y, 50, 50);
    ellipse(this.x + 50, this.y - 20, 50, 50);
    ellipse(this.x + 60, this.y, 50, 50);
  }
}

class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(139, 69, 19);
    rect(this.x, this.y - 50, 20, 50);
    fill(0, 128, 0);
    noStroke();
    ellipse(this.x + 10, this.y - 80, 70, 70);
    ellipse(this.x - 20, this.y - 60, 70, 70);
    ellipse(this.x + 40, this.y - 60, 70, 70);
  }
}
