class Rock{
  constructor(){
    this.x = 355;
    this.y = 596;
    this.width = 40;
    this.height = 40;
    this.imageSource = "images/rock.png";
    }

  draw(){
    var theImage = new Image();
    theImage.src = this.imageSource;
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
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
    intid =  setInterval(()=>{
      if(this.y > newY){
        this.moveUp();
      }
      if(this.x > newX){
        this.moveLeft();
      }
      if(this.x < newX){
        this.moveRight();
      }
      if(this.x === newX && this.y === newY){
        clearInterval(intid);
        if(theGame.emptyRock === true){
            this.x = 355;
            this.y = 596;
        }
      }       
    },10)
  }

}

var intid;

