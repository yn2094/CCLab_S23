let elements = [100, 300, 600, 900, 1200];
let elementsSpeed = 3;
let marioY = 150;
let marioYSpeed = 0;
let gravity = 0.3;
let invertColors = false;
let boxPositions = [300, 600, 900, 1200];
let mysteryBoxes = [];
let mysteryBoxCounter = 0; 
let counter = 0;
let popupLinks = [
  "https://opensea.io/stickysup",
  "https://yn2094.github.io/CCLab_S23/11r-sketch-gallery-page/",
  "https://certifiedshanghai.com/subscribe/",
  "https://www.instagram.com/sticky.sup/",
  "https://www.linkedin.com/in/youssef-nasr-22340b242/",
];

function setup() {
  createCanvas(windowWidth, 400);
  createMysteryBoxes();
}

function draw() {
  background(invertColors ? 135 : 120, 206, 250);
  drawElements();
  moveElements();
  
   for (let box of mysteryBoxes) {
    box.display();
    box.update();
  }
  drawMario(width / 2, marioY);

  marioY += marioYSpeed;
  marioYSpeed += gravity;

  if (marioY > 150) {
    marioY = 150;
    marioYSpeed = 2;
  }

 
  fill(invertColors ? 255 : 61, 46, 4);
  rect(0, height - 50, width, 50);
  
fill(255);
  textSize(20);
  textAlign(RIGHT);
  text("Mystery Project Counter:" + mysteryBoxCounter, width - 20, 30);

}

function mouseClicked() {
  for (let box of mysteryBoxes) {
    if (box.checkClick(mouseX, mouseY)) {
      mysteryBoxCounter++;
    }
  }
}

function keyPressed() {
  if (keyCode === 78) { // N key
    invertColors = !invertColors;
  } else if (keyCode === 32 && marioY >= 150) { // Space bar
    marioYSpeed = -8;
  }
}
function createMysteryBoxes() {
  for (let i = 0; i < boxPositions.length; i++) {
    let box = new MysteryBox(boxPositions[i] + 300, height - 250, 50, 50, popupLinks[i]);
    mysteryBoxes.push(box);
  }
}

class MysteryBox {
  constructor(x, y, w, h, link) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.link = link;
  }

  display() {
    fill(invertColors ? 0 : 255, 255, 0);
    rect(this.x, this.y, this.width, this.height);
    fill(invertColors ? 255 : 0, 0, 0);
    textSize(30);
    text("?", this.x + 32, this.y + 35);
  }

  update() {
    this.x -= elementsSpeed;

    if (this.x < -300) {
      this.x = width;
    }
  }

  checkClick(mx, my) {
    if (mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height) {
      window.open(this.link);
       return true; 
  }
  return false;
}
    
}

function drawElements() {
  noStroke();
  for (let i = 0; i < elements.length; i++) {
    drawCloud(elements[i], 100);
    drawPipe(elements[i] + 400, height - 150);
    drawBush(elements[i] + 200, height - 80);

  }
}


function moveElements() {
  for (let i = 0; i < elements.length; i++) {
    elements[i] -= elementsSpeed;

    if (elements[i] < -600) {
      elements[i] = width;
  }
}
}



function drawCloud(x, y) {
  fill(invertColors ? 0 : 255, 255, 255);
  ellipse(x, y, 50, 50);
  ellipse(x + 25, y - 20, 50, 50);
  ellipse(x + 50, y, 50, 50);
}

function drawBush(x, y) {
  fill(invertColors ? 221 : 34, 139, 34);

  ellipse(x - 15, y, 40, 40);
  ellipse(x, y, 50, 50);
  ellipse(x + 15, y, 40, 40);
  ellipse(x - 10, y - 25, 30, 30);
  ellipse(x, y - 30, 40, 40);
  ellipse(x + 10, y - 25, 30, 30);
  ellipse(x, y - 50, 25, 25);
  fill(invertColors ? 194 : 61, 60, 51);
  rect(x - 13, y, 25, 50);
}

function drawPipe(x, y) {
  fill(invertColors ? 255 : 0, 128, 0);
  rect(x, y, 50, 100);

  fill(invertColors ? 255 : 0, 100, 0);
  rect(x - 5, y - 10, 60, 20);
}


function drawMario(x, y) {
  push();
  translate(x, y);
  scale(0.5);
  // face
  fill(invertColors ? 0 : 255, 204, 153);
  ellipse(200, 200, 120, 100);
  

  // eyes
  fill(invertColors ? 0 : 255, 255, 255);
  ellipse(180, 190, 20, 20);
  ellipse(220, 190, 20, 20);
  fill(invertColors ? 255 : 0, 0, 0);
  ellipse(183, 190, 10, 10);
  ellipse(223, 190, 10, 10);

  // eyebrows
  fill(invertColors ? 255 : 0, 0, 0);
  rect(173, 170, 14, 6);
  rect(213, 170, 14, 6);

  // nose
  fill(invertColors ? 0 : 255, 204, 153);
  ellipse(200, 205, 25, 25);

// hat
  fill(invertColors ? 0 : 255, 0, 0);
  arc(200, 145, 120, 80, -PI, 0);
  rect(140, 145, 120, 25);
  fill(invertColors ? 0 : 255, 255, 255);
ellipse(200, 135, 40, 40);
fill(invertColors ? 0 : 255, 0, 0);
  textSize(38);
  text("Y", 188, 147);

  // mouth
  fill(invertColors ? 255 : 0, 0, 0);
  arc(185, 220, 40, 20, 0, PI);
  arc(215, 220, 40, 20, 0, PI);

  fill(invertColors ? 0 : 255, 102, 102);
  arc(200, 230, 60, 20, 0, PI);

  // shirt
  fill(invertColors ? 255 : 0, 0, 255);
  rect(150, 270, 100, 80);
  fill(invertColors ? 0 : 255, 255, 255);
  ellipse(170, 290, 10, 10);
  ellipse(230, 290, 10, 10);

  //arms
  fill(invertColors ? 0 : 255, 204, 153);
  rect(110, 270, 40, 20);
  rect(250, 270, 40, 20);

  //overalls
  fill(invertColors ? 255 : 0, 0, 255);
  beginShape();
  vertex(150, 270);
  vertex(175, 245);
  vertex(225, 245);
  vertex(250, 270);
  endShape(CLOSE);

  fill(invertColors ? 0 : 255, 255, 255);
  rect(220, 245, 10, 25);
  rect(170, 245, 10, 25);

  //legs
  fill(invertColors ? 0 : 255, 204, 153);
  if (frameCount % 20 < 10) {
    rect(165, 350, 20, 30);
    rect(215, 340, 20, 40);
  } else {
    rect(165, 340, 20, 40);
    rect(215, 350, 20, 30);
  }

  //shoes
  fill(invertColors ? 0 : 255, 0, 0);
  if (frameCount % 20 < 10) {
    rect(155, 380, 40, 15);
    rect(205, 370, 40, 15);
  } else {
    rect(155, 370, 40, 15);
    rect(205, 380, 40, 15);
  }
  pop();
}