
let swirlPic;
let ponies = [];
let howManyPonies = 200;
let whichPony = 0;
let mouseBoxx;
let mouseBoxy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  swirlPic = loadImage('assets/swirl.png');
  for (let i = 0; i < howManyPonies; i++){
    ponies[i] = new Pony();
  }
}
function draw(){
  background(255);
  noCursor();
  for (let i = 0; i < howManyPonies; i++){
    ponies[i].move();
    ponies[i].display();
  }
}

function mousePressed(){
  mouseBoxx = mouseX;
  mouseBoxy = mouseY;
  ponies[whichPony].teleportPony(mouseX, mouseY);
  ponies[whichPony].makePonyVisible();
  whichPony++;
  whichPony = whichPony % howManyPonies;

}
class Pony {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(0,1);
    this.yspeed = random(0,1);
    this.visible = false;
  }
  display(){
    if (this.visible){
    imageMode(CENTER);	
    image(swirlPic, this.x, this.y, 75, 75);
    }
  }

  intersects(other){
  	let d = dist(this.x, this.y, other.x, other.y);
  	if(d <= 75){
  		return true;
  	}else{
  		return false;
  	}

  }
  move(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if ((this.x > width) || (this.x < 0)) {
      this.xspeed = this.xspeed * -1;
    }

    if ((this.y > height) || (this.y < 0)) {
      this.yspeed = this.yspeed * -1;
    }

  }
  teleportPony(xLoc, yLoc){
    this.x = xLoc;
    this.y = yLoc;
  }
  makePonyVisible(){
    this.visible = true;
  }
}
