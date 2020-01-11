var width = heightScreen;
var height = widthScreen;

function Asteroide(posx) {

    var deadSound = new Audio("pop.wav"); 

    this.meteorite = loadImage("meteorite.png");

    this.posx = Math.floor(Math.random()*width);
    this.posy = -100;
    
    this.size = Math.floor(Math.random()*44)+20;    //asteroide size
    this.radius = this.size/2;
    this.life = map(this.size, 0, 100, 0, 5);
    
    this.speed = map(this.size, 0, 64, 3, 1);
    this.speedx = map(this.size, 0, 64, 0, 0.5);

    // Random direction fall
    this.tf = Math.random() >= 0.5;
    if (this.tf) {
        this.speedx = this.speedx * (-1);
    }

    this.display = function () {
        imageMode(CENTER);
        image(this.meteorite, this.posx, this.posy, this.size, this.size);
        //fill(0);
        //circle(this.posx, this.posy, this.size);
    }
    this.fall = function () {
        this.posy += this.speed;
        this.posx += this.speedx;
    }
    this.rebornf = function () {
        if (this.posy > height + 100
            || this.posx < -64 || this.posx > width+20) {
            this.posy = 0;
            this.posx = Math.floor(Math.random()*width);
            this.tf = Math.random() >= 0.5;
            if (this.tf) {
                this.speedx = this.speedx * (-1);
            }

        }      
    }

    this.hitsShip = function (ship) {
        let d = dist(this.posx, this.posy, ship.posx, ship.posy);
        if (d < (this.radius + ship.radius)) {
            ship.life -= this.life;
            this.life = 0;
        }
    }

    this.isAlive = function () {
        if (this.life <= 0) {
            deadSound.play();
            return false;
        }
        return true;
    }
}