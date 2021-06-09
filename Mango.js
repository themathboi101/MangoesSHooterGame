class Mango {
  constructor() {
    var options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2,
    }
    this.x=x;
    this.y=y;
    this.r=radius;
    this.body = Bodies.circles(this.x,this.y,this.r,options);
    
    this.image=loadImage("Plucking Mangoes/mango.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var diamter=this.r*2;

  push();
   
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("green");
  rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,0,0,diamter,diameter);
    pop()
  }
}
