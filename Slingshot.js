class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
     line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y)
     pop()
        }
    
    
}