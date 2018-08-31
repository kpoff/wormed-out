class Bird{
  constructor(theX, theY){
    this.x = theX;
    this.y = theY;
    this.width = 70;
    this.height = 70;
    this.imageSource = "images/bird.png";
    }

  draw(){
    var theImage = new Image();
    theImage.src = this.imageSource;
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
  }

}