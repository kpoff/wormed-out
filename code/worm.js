class Worm{
  constructor(){
    this.x = 500;
    this.y = 500;
    this.width = 80;
    this.height = 40;
    this.delta = 1;
    this.imageSource = "images/worm.png";
    this.underground = false;
  }

  draw(){

    var theImage = new Image();
    theImage.src = this.imageSource;
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)

    
    
  }

  moveRight(){
    this.x += 5;
  }
  
  moveLeft(){
    this.x -= 5;
  }

  moveAcrossTheScreen(){
    setInterval(()=>{
      this.x += this.delta;
      if(this.x + this.width >= 800 || this.x <= 0){
        this.y += this.height;
        this.delta *= -1;
      }
      if(this.delta > 0){
        this.moveRight();
      }
      if(this.delta < 0){
        this.moveLeft();
      }
      
    },100)
  }



  demise(){

  }

}
