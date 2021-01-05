
class Bin {

    constructor(x,y,w,h) {

        var option= { isStatic:true} 

        this.body1 = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body1);

        this.body2 = Bodies.rectangle(x-75, y-50, w-130, h+100, option);
        this.width = w-130;
        this.height = h+100;
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(x+75, y-50, w, h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body3);
        
    } 

    display () {

        var pos1 =this.body1.position;
        rectMode(CENTER);
        fill("red");
        rect(pos1.x, pos1.y,this.width, this.height);

        var pos2 =this.body2.position;
        rectMode(CENTER);
        fill("red");
        rect(pos2.x, pos2.y,this.width-130, this.height+100);

        var pos3 =this.body3.position;
        rectMode(CENTER);
        fill("red");
        rect(pos3.x, pos3.y,this.width-130, this.height+100);

    }

}
