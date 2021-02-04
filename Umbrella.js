class umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    this.body = Bodies.circle(x,y,this.r,options)
    
    this.image = loadImage("images/Walking Frame/walking_1.png")
    World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, 5, 7);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }
}