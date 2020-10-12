class    Ball{
    constructor(x, y, width, height) {
        
        this.body = Bodies.circle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push()
        rotate(angle);
        circle(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
}