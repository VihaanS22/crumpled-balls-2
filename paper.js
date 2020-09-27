class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      
      
      this.diameter = 50
      
 this.image = loadImage("paper.png");
      this.body = Matter.Bodies.circle(x, y, this.diameter/2, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     
     
      fill(255);
     // ellipse(pos.x, pos.y , 20,20);
      imageMode(CENTER);
      image(this.image, 0, 0, this.diameter, this.diameter);
     pop();
    }
  };
 
  