//shoot.src = "shoot.wav";

function Bullet(ss) {
    var shoot = new Audio("sound/shoot.wav");
    this.posx = ss.posx;
    this.posy = ss.posy;
    this.speed = 10;
    this.dead = false;
    this.radius = 15;
    this.power = 1;
    shoot.play();

    this.display = function () {
        noStroke();
        fill(255, 10, 31);
        ellipse(this.posx, this.posy, this.radius, this.radius*2);
        //console.log("My Speed: "+this.speed);
        
    }

    this.move = function () {
        this.posy -= this.speed;
        if(this.posy < -100){
            this.dead = true;
        }
    }

    this.hitsAs = function (as) {
        let d = dist(this.posx, this.posy, as.posx, as.posy);
        if (d < (this.radius + as.radius)) {
            as.life -= this.power;
            return true;
        }
    }

}