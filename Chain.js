class Chain{
    constructor(b1,b2){
     var options = {
         bodyA : b1,
         bodyB : b2,
         length : 234,
         stiffness : 0.045,
     }

     this.chain = Constraint.create(options);
     World.add(world,this.chain);

    }

    show(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
