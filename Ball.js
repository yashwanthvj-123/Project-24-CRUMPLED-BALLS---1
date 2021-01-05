
class Ball {

    constructor(x,y,r) {

      var option = { isStatic:false , density:1.2 , restitution:0. , friction:0.5 } 

      this.body=Bodies.circle(x,y,r,option);
      this.radius=r;

      World.add(world,this.body);
    
    }

    display () {

        var pos =this.body.position; 
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill("yellow");
        ellipse(pos.x,pos.y, this.radius );

    }
}
