class SlingShot {
    constructor(bodyX,pointB){
        var option ={
            bodyA:bodyX,
            pointB :pointB,
            stiffness:0.04,
            lenght:10
            
        }
        this.chain =Constraint.create (option)
        this.pointB=pointB
        World.add(world,this.chain)
    }
    fly(){
       this.chain.bodyA=null 
    }
    display() {
        if (this.chain.bodyA){
     var pointA= this.chain.bodyA.position
     var pointB=this.pointB
     strokeWeight(4);
     line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
    }    
}
