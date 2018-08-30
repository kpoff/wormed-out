class Rock{
  constructor(){
    this.x = 355;
    this.y = 596;
    this.width = 20;
    this.height = 20;
    }

  draw(){
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  clear(){
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }

  moveRight(){
    this.x += 1;
  }
  
  moveLeft(){
    this.x -= 1;
  }

  moveUp(){
    this.y -= 1;
  }

  move(newX, newY){

    setInterval(()=>{
        if(this.y > newY){
        this.moveUp();
        }
        if(this.x > newX){
          this.moveLeft();
        }
        if(this.x < newX){
          this.moveRight();
        }
          console.log("hello")  
    },10)
    console.log("goodbye")
    
    
  }

  

}

