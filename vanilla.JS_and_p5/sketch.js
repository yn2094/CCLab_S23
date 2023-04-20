let x = 200;
let xSpeed = 2;

let fasterButton = document.getElementById("fast");

function setup(){
    let  cnv = createCanvas(400,400);
    cnv.parent("canvasContainer")
}

function draw(){
    background(50,240,150);

    circle(x, height/2, 50);

    x+=xSpeed;
    if(x>width){
        x=0;
    }
}

function increaseSpeed(){
    xSpeed++;
}

fasterButton.addEventListener("click", increaseSpeed);