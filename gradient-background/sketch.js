let gradient;

function preload(){
gradient = loadImage("assets/gradient-bkg.png")
}

function setup(){
    let  cnv = createCanvas(400,400);
    cnv.parent("canvasContainer")
}

function draw(){
    background(50,240,150);
    // fill(50,240,150);
    // Rect(0,0,width,height);
    image(gradient,0,0, 400,400);

    
}