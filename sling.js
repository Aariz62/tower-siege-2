class Sling{

constructor(a,b){

 var options={
    bodyA=a,
    pointB=b,
    stiffness:0.04,
    length:1

 }

    this.sling=Constraint.creat(options)
    World.add(world,this.sling)

 this.pointB
 


}

dipslay(){

    push ()
    strokeWeight(3)
    stroke("ash")
    line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
    pop ()
}


}