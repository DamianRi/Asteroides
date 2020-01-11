var w = widthScreen;
var h = heightScreen;

function Planet() {
    this.posx = w/2;
    this.posy = h + (1/4)*this.posx;

    this.size = w/2;

    this.display = function () {
        noStroke();
        fill(200,10);
        circle(this.posx, this.posy, this.size+(1/10*this.size));
        fill(33,137,126);
        circle(this.posx, this.posy, this.size);
    }

}