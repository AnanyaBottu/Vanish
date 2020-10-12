class Box  {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, 60, 40);
       //super(x,y,60,40);
       World.add(world,this.body);
       this.image = loadImage(sprite/box.jpg);
       this.qwert=255;
         
      }
      display(){
        if(this.body.speed>2){
          World.remove(world,this.body);
          push();
          this.qwert=this.qwert-3;
          tint(225,this.qwert);
         image(this.body,this.body.position.x,this.body.position.y,60,40);
      
          pop();
        }
        
        }
      } 
      
      
      
      
      
      
      
      
      
