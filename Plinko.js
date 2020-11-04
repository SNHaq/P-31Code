class Plinko{
    constructor(x,y,radius){
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,radius);
    World.add(this.body);
    }
    
    display(){
    
    }
    }