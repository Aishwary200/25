class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbin.png")
      World.add(world, this.body);
    }
    display(){
      
      fill("red")
      image(this.image, 0,-this.height/2,this.width, ths.height)
      
    }
  }