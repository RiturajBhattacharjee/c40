class Form{
    constructor(){
        this.title=createElement("h1")
       this.input=createInput("name")
        this.button = createButton("Start")
      this.greeting=createElement("h2")
      this.reset= createButton("Restart")
    }

    display(){
        
       this.title.html("asphalt5")
       this.title.position(width/2-50,0)
        
       this.input.position(width/2-70,height/2-80)
       this.reset.position(width-100,20)
       this.button.position(width/2+30,height/2)
       this.button.mousePressed(()=> {
        this.input.hide()
        this. button.hide()
           player.name =  this.input.value()
            playerCount++ 
            player.index=playerCount
            player.updateCount(playerCount)
            player.updateInfo()
           
            this.greeting.html("Hello " + player.name)
            this. greeting.position(width/2-70,height/4)
        })

        this.reset.mousePressed(()=> {
            player.updateCount(0)
            game.updateState(0)
        })
    }
}