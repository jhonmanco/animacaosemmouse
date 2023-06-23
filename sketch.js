let cor; 
let circuleX; 
let circuleY; 


function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255),random(0, 255), random(0, 255));
  circuleX = [0, 0, 0]
  circuleY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  //console.log(circuleX.length);
  
  for (let counter in circuleX ) { 
  //console.log(counter); 
    
  circle(circuleX [counter], circuleY [counter], 40);
  circuleX [counter] += random(0, 4);
  circuleY [counter] += random(-4, 4);
    
  if (circuleX[counter] >= width ) {
  circuleX[counter] = 0;
  circuleY[counter] = random(height);
  }
    
}
  
 if (mouseIsPressed) {
  cor = color(random(0, 255),random(0, 255), random(0, 255), random(0, 100));
   }
}