class Bird{
  constructor(theX, theY){
    this.x = theX;
    this.y = theY;
    this.width = 50;
    this.height = 50;
    }

  draw(){
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

}