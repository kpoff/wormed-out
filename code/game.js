let theGame;
let ctx;
let canvas;

window.onload = function(){

  class Game{
    constructor(){
      this.worm = new Worm();
      this.rock = new Rock();
      this.birds = [];
      this.shots = [];
      this.food = [];
      this.rocks = [];
    }

    checkWormBirdCollision(){
     this.gameOver = false;
     this.birds.forEach((eachBird)=>{
        if((this.worm.x + this.worm.width >= eachBird.x && this.worm.x <= eachBird.x+eachBird.width) &&
        (this.worm.y + this.worm.height >= eachBird.y && this.worm.y <= eachBird.y+eachBird.height)){
        this.gameOver = true;
        }
     })
    }

    checkBirdRockCollision(){
      this.emptyRock = true;
      this.birds.forEach((eachBird, index)=>{
         if((this.rock.x + this.rock.width >= eachBird.x && this.rock.x <= eachBird.x+eachBird.width) &&
         (this.rock.y + this.rock.height >= eachBird.y && this.rock.y <= eachBird.y+eachBird.height)){
         this.birds.splice(index, 1);
         this.emptyRock = false;
         }
      })
     }

    checkWormRockCollision(){
      this.gameOver = false;
      this.emptyRock = true;
         if((this.worm.x + this.worm.width >= this.rock.x && this.worm.x <= this.rock.x+this.rock.width) &&
         (this.worm.y + this.worm.height >= this.rock.y && this.worm.y <= this.rock.y+this.rock.height)){
         console.log("you killed your worm")
         this.gameOver = true;
         this.emptyRock = false;
         }
      }

    // checkGameOver(){
    //  if(this.gameOver === true){
    //     stop();
    //     ctx.clearRect(0,0,800,600);
    //     var theImage = new Image();
    //     theImage.src = "";
    //     ctx.drawImage(theImage, 200, 300, 200, 200)
    //   // ctx.font="40px Fantasy";
    //   // ctx.fillText("GAME OVER!!!!!",200,300);
    //   }
    // }

    drawEverything(){
      this.worm.draw();
      this.birds.forEach((bird) => {
      bird.draw()
      });
      this.rock.draw();
    }

    moveWorm(){
      this.worm.moveAcrossTheScreen();
    }

    createBirds(){
      for(let i = 0; i < 5; i++){
        const theX = Math.floor(Math.random()*750);
        const theY = Math.floor(Math.random()*550);
        this.birds.unshift(new Bird(theX, theY));
      }
    }

    updatePoints(){
    }

    throwRock(){
      this.rock.move(mouseX, mouseY); 
    }  //either food or rock. tells you what it collided with so that you can grow, get hurt etc

  };

  ctx = document.getElementById('canvas').getContext('2d');
  canvas = document.getElementById('canvas');
 

  document.getElementById("start-game-button").onclick = function(){
     startGame();
     animate();
  };
    

  function startGame(){
    theGame = new Game();
  //  theGame.this.rock.draw();
    theGame.moveWorm();
    theGame.createBirds();
    document.getElementById('canvas').onmousedown = mouseDown;

  }


   function mouseDown(evt) {
    var rect = this.getBoundingClientRect();
    mouseX = evt.clientX - rect.left;
    mouseY = evt.clientY - rect.top;
    theGame.throwRock();
    

    // setTimeout(()=>{
    //   if(this.emptyRock === true){
    //     this.rock.x = 355;
    //     this.rock.y = 596;
    //   }
    // },50)
    
    }
    
  

  var requestId;


  function animate(){
    requestId = undefined;
    ctx.clearRect(0,0,800,600);
    start();
    theGame.drawEverything();
    theGame.checkWormBirdCollision();
    theGame.checkWormRockCollision();
    theGame.checkBirdRockCollision();
   
    
 //   theGame.checkGameOver();
  };


  function start() {
    if (!requestId) {
       requestId = window.requestAnimationFrame(animate);
    }
  }

  function stop() {
    if (requestId) {
       window.cancelAnimationFrame(requestId);
       requestId = undefined;
    }
  }


};