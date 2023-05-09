function preload();

    for(let i =0; i<9; i++){
   let filename="muybridge/muybridge_ + i +".jpg"
   console.log(filename);
   loadImage(filename);
    }
}


function setup(){
    let  cnv = createCanvas(400,400);
    cnv.parent("canvasContainer")

function draw(){
    background(50,240,150);

    Image(horses [0], 0 ,0 );

    
}