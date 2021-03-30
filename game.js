class Game {
    constructor(){

    }

    //read gameState value from database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
 
    start(){
        if(gameState===0){
            player=new Player ()
            player.getCount()
            form= new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)

        car1.addImage(carimg1)
        car2.addImage(carimg2)
        car3.addImage(carimg3)
        car4.addImage(carimg4)

        cars=[car1,car2,car3,car4]
    }

    play(){
        form.title.hide()
        form.button.hide()
        form.input.hide() 
        form.greeting.hide()
       Player.getPlayersInfo()
       //!== not equal to
       if (players!==undefined){
           background("orange")
           image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
           var index=0
           var x=175
           var y
           for(var i in players){
               index++
               x+=200
               y=height-players[i].distance
               cars[index-1].x=x
               cars[index-1].y=y
               if(index===player.index){
                fill("green")
                ellipse(x,y,60)
                  camera.position.x=width/2
                  camera.position.y= cars[index-1].y
               }
           }
       }
       if(keyDown("up")&&player.index!==null){
           player.distance+=10
           player.updateInfo()

       }
       if(player.distance>3620){
           gameState=2
       }
       drawSprites()
    }

    end(){
        console.log("game over")
    }
}