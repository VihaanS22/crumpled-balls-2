class Box {
    constructor(x, y, width, height, angle) {
      var options = {
          'isStatic' : true,
          'friction':0.3,
          'density':1.0
      }

     this.image = loadImage("dustbin1.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width + 60;
      this.height = height ;
     
      Matter.Body.setAngle(this.body, angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y)
     rotate(angle);
     /* rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
     */
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.width, this.height, this.height);
      pop();
    }
  };