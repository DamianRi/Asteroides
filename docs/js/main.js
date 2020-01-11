
var widthScreen = window.innerWidth;
var heightScreen = window.innerHeight-200;

let ship;
let img;
var bullet;
var asteroides;
var asteroide;
let totalAs = 10;
var bullets = new Array();
var planet;
let gameover;
var score; 

function setup() {
    cursor(CROSS);

    ship = new SpaceShip();
    document.getElementById("life").innerText = "LIFE: "+ship.life;  
    document.getElementById("score").innerText = "SCORE: "+ship.score;

    planet = new Planet();
    gameover = loadImage("img/lose.png");
    var pause = true;
    
    createCanvas(widthScreen, heightScreen);
    asteroides = new Array();
    for (let index = 0; index < totalAs; index++) {
        asteroide = new Asteroide();
        asteroides.push(asteroide);
    }
}

function draw() {
    background(50,10);
    planet.display();
    
    if (ship.isAlive()) {
        console.log("LIFE: "+ship.life);
        console.log("SCORES: "+ship.score);
        
        ship.display();
        ship.move();
        
        
        for (let index = 0; index < bullets.length; index++) {
            bullets[index].display();
            bullets[index].move();
            // if bullet is screen out
            if (bullets[index].dead) {
                bullets.splice(index, 1);
                break;
            }
            
            for (let a = 0; a < asteroides.length; a++) {
                if (bullets[index].hitsAs(asteroides[a])){
                    bullets.splice(index, 1);
                    break;
                }
            }
        }
    //end isAlive if
    }else{
        imageMode(CENTER);
        image(gameover, widthScreen/2, heightScreen/2, widthScreen/2, heightScreen/2);
    }

    if (asteroides.length <= 0) {
        imageMode(CENTER);
        image(gameover, widthScreen/2, heightScreen/2, widthScreen/2, heightScreen/2);        
    }
    for (let index = 0; index < asteroides.length; index++) {
        asteroides[index].display();
        asteroides[index].fall();
        asteroides[index].rebornf();
        asteroides[index].hitsShip(ship);

        if (!asteroides[index].isAlive()) {
            asteroides.splice(index, 1);    // remove asteroide
        }
    }
}


function mouseClicked() {
    if (ship.isAlive()) {
        bullet = new Bullet(ship);
        bullets.push(bullet);        
    }
}
