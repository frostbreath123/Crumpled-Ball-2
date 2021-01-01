class Dustbin{
    constructor(x,y){
         
         this.x = x;
         this.y = y;
         this.dustbinHeight = 100;
         this.dustbinWidth = 200;
         this.wallThickness = 20;
         this.angle = 0;

         var options = {
              isStatic: true
          }
       this.image=loadImage("bin.png")
        this.bottomBody = Bodies.rectangle(1200,650,200,20,options);
        this.leftWallBody = Bodies.rectangle(1100,600,20,100, options);
        this.rightWallBody = Bodies.rectangle(1300,600,20,100,options); 
    
         World.add(world,this.bottomBody);
         World.add(world,this.leftWallBody);     
         World.add(world,this.rightWallBody);
    }
   
    display(){
         var posBottom = this.bottomBody.position;
         var posLeft = this.leftWallBody.position;
         var posRight = this.rightWallBody.position;
         
         push();
         translate(posLeft.x,posLeft.y);
         rectMode(CENTER);
         stroke("black")
         strokeWeight(3)
         fill("white");
         //rect(0,0,20,100);
         pop();
        
         push();
         translate(posRight.x,posRight.y);
         rectMode(CENTER)
         stroke("black")
         strokeWeight(3)
         fill("white");
        // rect(0,0,20,100);
         pop();
        
         push();
         translate(posBottom.x,posBottom.y);
         rectMode(CENTER);
         stroke("black")
         strokeWeight(3)
         fill("white");
       //rect(0,0,200,20);
          fill(255)
	     imageMode(CENTER);
	     image(this.image, 0,-90,200,200)
	    //rect(0,0,this.dustbinWidth, this.wallThickness);
	     pop()
                
    }
}