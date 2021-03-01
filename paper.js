class Paper{
  constructor(){
      var options ={
          
          restitution :0.3,
          friction :0.5,
          density :1.7
          
      }
      this.body = Bodies.circle(250,540,20,options);
      this.width = 33;
      this.image = loadImage("Images/paper 1.png");
      World.add(world, this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      fill("white");
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,33,33);
  }
}