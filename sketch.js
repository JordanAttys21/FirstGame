
let myXPos = 250;
let myYPos = 490;
let brickArray = [];
let ballXPos = 300;
let ballYPos = 250;
let ballXSpeed;
let ballYSpeed;
let ballXDirection = 1;
let ballYDirection = 1;
let sliderWidth = 80;
let x;
let y;
let r; 
let g; 
let b; 
let state = 1;


function setup() {
    createCanvas(500, 500);
    noStroke();

    x = random(25, 450);
    y = random(25, 200);
    r = 0;
    g = 0;
    b = 255;


    rectMode(CENTER);
    

    ballXSpeed = random(-5, 5);
    ballYSpeed = random(-5, 5);
    
    
}

function draw() {
    background(0);
   
    //Square
    rect(x , y, 40, 40);
    


    fill(255, 0, 0);
    rect(myXPos, myYPos, 80, 10);
    
    if(keyIsDown(LEFT_ARROW)) {
        myXPos -=5
    }
    if(keyIsDown(RIGHT_ARROW)) {
        myXPos +=5
    }
    if (myXPos > 525) {
        myXPos = -25
    }
    if (myXPos > 455) {
        myXPos = 455
    }
    if (myXPos < 45){
        myXPos = 45
    }
    

    ballXPos += ballXSpeed * ballXDirection;
    ballYPos += ballYSpeed * ballYDirection;

    fill(255, 0, 0);
    ellipse(ballXPos, ballYPos, 40, 40);


    if (ballXPos < 25 || ballXPos > 475) {
        ballXDirection *= -1;
   }

   if (ballYPos < 25) {
       ballYDirection *= -1;
    }
    
    //Lose Condition
   if (ballYPos >= myYPos - 15 && ballXPos >= myXPos - sliderWidth/2 && ballXPos <= myXPos + sliderWidth/2 ) {
       ballXDirection *= -1;
       ballYDirection *= -1;
   }
   else if (ballYPos > 500) {
    state = 2;

   }

   //Square Conditions
   if (ballYPos <= y + 20 && ballXPos >= x - 20 && ballXPos <= x + 20) {
    ballXDirection *= -1;
    ballYDirection *= -1;
    state = 3;
    
   }
   else if (ballYPos >= y - 20 && ballXPos >= x - 20 && ballXPos <= + 20) {
    ballXDirection *= -1;
    ballYDirection *= -1;
    state = 3;
    
     
   } 

   //State
   if (state == 2){
        ballXPos = 250;
        ballYPos = 250;
        clear();
        background(0);
        textSize(32);
        text("Game over", 250, 250)
      
   }
    else if (state == 3){
        ballXPos = 250;
        ballYPos = 250;
        clear();
        background(255);
        textSize(20);
        text("You caught charizard", 250, 250)
   }



}
