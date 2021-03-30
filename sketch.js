var database;
var game,player,form,playerCount,gameState = 0
var players, distance = 0
var cars, car1,car2,car3,car4

function preload(){
    carimg1=loadImage("car1.png")
    carimg2=loadImage("car2.png")
    carimg3=loadImage("car3.png")
    carimg4=loadImage("car4.png")
    trackimg=loadImage("track.jpg")
}

function setup(){
    createCanvas(displayWidth-10,displayHeight-100);
    //creating database
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
  if(playerCount===4){
      game.updateState(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }
  if(gameState===2){
      game.end()
  }

}


