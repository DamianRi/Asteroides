var w = widthScreen;
var h = heightScreen;

function SpaceShip() {
    this.posx = w/2;
    this.posy = h/4*3;
    this.ship = loadImage("rocket1.png");
    this.radius = 35;
    this.life = 10;

    this.display = function () {
        fill(255,5);
        imageMode(CENTER);
        image(this.ship, this.posx, this.posy);
        circle(this.posx, this.posy, this.radius*2);
    }    

    this.move = function () {
        if (mouseX != 0) {
            this.posx = mouseX;
        }
        //this.posy = mouseY;
    }

    this.isAlive = function () {
        if (this.life < 0) {
            return false;
        }
        return true;
    }
}