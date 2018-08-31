class Slingshot{
  constructor(){
    this.x = 345;
    this.y = 505;
    this.width = 100;
    this.height = 100;
    this.imageSource = "images/slingshot.png";
    }

  draw(){
    var theImage = new Image();
    theImage.src = this.imageSource;
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
  }

  clear(){
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }
}