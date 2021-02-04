class Drops{
constructor(x,y){
    var options={
        isStatic:false
    }
    this.body= Bodies.circle(x,y,this.r,options)
    World.add(world, this.body)
}
display(){
    if(frameCount % 10 === 0){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      noStroke();
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(0, 0, 5, 7);
      pop();
    }
}
abc(){
    if(this.rain.position.y > height){
        Matter.Body.setPosiiton(this.rain,{x:random(0,400), y:random(0,400)})
    }
}
}