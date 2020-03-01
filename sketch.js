var def = {
      x: 124,
      y:14,
         width:120

};
 

function setup() {
  
  img = loadImage('gold-25138.png'); // Load the image
   img2 = loadImage('nextleft.png'); // Load the image
   img3 = loadImage('play.png'); // Load the image
  img4 = loadImage('nextright.png'); // Load the image
   img5 = loadImage('original.png'); // Load the image


 
  createCanvas(800, 800);
  background (300,300,300);
  noStroke();
  fill(300,300,300); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (255,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
  

  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  

}
 



function preload(){

  eatSound = loadSound("wet.wav")
  eatSound2 = loadSound("guitar.wav")
  eatSound3 = loadSound("piano.wav")
  eatSound4 = loadSound("guitar2.wav")
  eatSound5 = loadSound("cllick.wav")
 



}

function draw() {
  
// Displays the image at point (0, height/2) at half size
  image(img, 190, 180 / 2, img.width / 1.2, img.height / 1.2);
   image(img2, 70, 110 / 2, img2.width / -15, img2.height / -15);
   image(img3, 115, 110 / 2, img3.width / -16, img3.height / -15);
   image(img4, 170, 110 / 2, img4.width / -15, img4.height / -15);
   image(img5, 780, 110 / 2, img5.width / -15, img5.height / -15);
  


  
  
 


  //1st background//
  
  noStroke();
  fill (200,200,100);
  ellipse(310,660,60); //1 1 circle
  fill (0,0,0);
  ellipse(400,660,60); //1 2 circle
  fill (100,0,0);
  ellipse(490,660,60); //1 3 circle
  

  stroke(100,100,100);
  strokeWeight(5); 
 
  fill ('#fffecf');
  ellipse(310,740,60); //1 1 circle
  fill ('#dbdbdb');
  ellipse(400,740,60); //1 2 circle
  fill ('#ffeef7');
  ellipse(490,740,60); //1 3 circle
  
}



function mousePressed() {
      noStroke();
      print(mouseX, mouseY);

   // the First circle for background
  if (281 <= mouseX && mouseX <= 340 && 637 <= mouseY && mouseY <= 688) {
    eatSound.play();
    createCanvas(800, 800);
  background (200,200,100);
     noStroke();
  fill(300,300,300); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
     
     
     
    
  }  
   // the Second circle for background
  if (373 <= mouseX && mouseX <= 429 && 630 <= mouseY && mouseY <= 690) {
      eatSound.play();
     createCanvas(800, 800);
  background (0,0,0);
    noStroke();
  fill(300,300,300); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
   
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
     
  } 
  // the third circle for background
  if (459 <= mouseX && mouseX <= 519 && 628 <= mouseY && mouseY <= 690) {
      eatSound.play();
     createCanvas(800, 800);
  background (100,0,0);
   noStroke();
  fill(300,300,300); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
   
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
     
  }
  
  // music: the next left
  if (39 <= mouseX && mouseX <= 69 && 33 <= mouseY && mouseY <= 54) {
    eatSound2.play();
  }
  
  // music: play
  if (90 <= mouseX && mouseX <= 117 && 34 <= mouseY && mouseY <= 55) { 
     eatSound3.play();
  }
  
  // music: the next right
  if (136 <= mouseX && mouseX <= 168 && 34 <= mouseY && mouseY <= 55) {
    eatSound4.play();
    
    

  }

  // original
  if (665 <= mouseX && mouseX <= 779 && 31 <= mouseY && mouseY <= 53) {
  eatSound.play();
  createCanvas(800, 800);
  background (300,300,300);
    noStroke();
  fill(300,300,300); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  // paper
  if (281 <= mouseX && mouseX <= 339 && 709 <= mouseY && mouseY <= 771) {
  eatSound5.play();
 
  fill('#fffecf'); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
   
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  }
  
   // paper2
  if (370 <= mouseX && mouseX <= 433 && 709 <= mouseY && mouseY <= 771) {
  eatSound5.play();
 
  fill('#dbdbdb'); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
   
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  }
  
// paper3
  if (460 <= mouseX && mouseX <= 521 && 709 <= mouseY && mouseY <= 771) {
  eatSound5.play();
 
  fill('#ffeef7'); //white
  rect(256, 135, 298, 350);
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (225,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (0,0,255);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
   
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  }
  
  // blue square
  if (256 <= mouseX && mouseX <= 366 && 369 <= mouseY && mouseY <= 525) {
  eatSound5.play();
 
  
 
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (255,0,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (255,0,0);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  }
  
   //  red square
  if (378 <= mouseX && mouseX <= 555 && 447 <= mouseY && mouseY <= 527) {
  eatSound5.play();
 

  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (555,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (255,0,0);
  rect(255,359,120,186);
  // yellow square
  fill (555,255,0);
  rect(370,138,194,100);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  
  }
  
   //  yellow square
  if (378 <= mouseX && mouseX <= 555 && 156 <= mouseY && mouseY <= 228) {
  eatSound5.play();
 
  

  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (555,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (255,0,0);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  
   //  big square
  if (383 <= mouseX && mouseX <= 546 && 309 <= mouseY && mouseY <= 428) {
  eatSound5.play();
 
  

  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (555,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (255,0,0);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
     // big white square
  fill (300,0,0);
  rect(370,305,194,140);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  //  top left big square
  if (258 <= mouseX && mouseX <= 357 && 160 <= mouseY && mouseY <= 280) {
  eatSound5.play();
 
 
 
  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (300,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (300,300,300);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
     // big white square
  fill (300,0,0);
  rect(370,305,194,140);
     // top left white square
 fill (300,255,0);
  rect(255,140,110,155);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  // 2 top left  square
  if (254 <= mouseX && mouseX <= 280 && 310 <= mouseY && mouseY <= 348) {
  eatSound5.play();
 
 

  
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (300,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (300,300,300);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
     // big white square
  fill (300,0,0);
  rect(370,305,194,140);
     // top left white square
 fill (300,255,0);
  rect(255,140,110,155);
    // 2nd top left white square
 fill (255,0,0);
  rect(255,300,30,55);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  // 2 top 2 left  square
  if (297 <= mouseX && mouseX <= 361 && 309 <= mouseY && mouseY <= 349) {
  eatSound5.play();
 
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (300,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (300,300,300);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
     // big white square
  fill (300,300,300);
  rect(370,305,194,140);
     // top left white square
 fill (300,255,0);
  rect(255,140,110,155);
    // 2nd top left white square
 fill (255,0,0);
  rect(255,300,30,55);
    // 2nd top right white square
 fill (0,0,300);
  rect(295,300,80,55);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
  
  // right top2 right 
  if (377 <= mouseX && mouseX <= 549 && 252 <= mouseY && mouseY <= 286) {
  eatSound5.play();
 
  ///sqaure
  strokeCap(SQUARE);
  //red square
   fill (300,255,0);
 rect(364, 445, 190, 100);
  // blue square
  fill (300,300,300);
  rect(255,359,120,186);
  // yellow square
  fill (0,0,255);
  rect(370,138,194,100);
     // big white square
  fill (300,0,0);
  rect(370,305,194,140);
     // top left white square
 fill (300,255,0);
  rect(255,140,110,155);
    // 2nd top left white square
 fill (300,300,300);
  rect(255,300,30,55);
    // 2nd top right white square
 fill (0,0,300);
  rect(295,300,80,55);
     // right top2 right 
  fill (300,255,0);
  rect(370,245,194,55);
  
  
  ///line
 stroke(0);
  strokeWeight(13); 
  
  line(290,295,290,360);  //left
  line(255,300,555,300); //bottom
  line(255,360,370,360);  //middle
  line(370,135,370,590);  //right
  
  strokeWeight(15);
  line(370,440,555,440); //bottom
  
  strokeWeight(20); 
  line(370,240,555,240);//top 
  }
 
  
  
 

}
