var garden, gardenImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;


function preload() {
    // load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup() {
    createCanvas(1000, 800);

    garden = createSprite(500, 400);
    garden.addImage(gardenImg);
    // create tom and jerry sprites here
    cat = createSprite(800, 700, 20, 20);
    cat.addAnimation("cat", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(400, 700, 20, 20);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.1;
}

function keyPressed() {
    // For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        mouse.addAnimation("teasing", mouseImg2);
        mouse.changeAnimation("teasing");
        mouse.frameDelay = 25;
    }

    if (keyCode === RIGHT_ARROW) {
        cat.addAnimation("moving", catImg2);
        cat.changeAnimation("moving");
        cat.velocityX = -1;
    }
}

function draw() {
    background(255);
    // Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.velocityX = 0;
        cat.changeAnimation("cat");
    }

    keyPressed();
    drawSprites();
}
