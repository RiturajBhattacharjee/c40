class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0

    }

    //read playerCount value from database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }

    //write playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

 //write player name and distance value to the database
 updateInfo(){
    database.ref("players/player"+this.index).set({
        name:this.name,
        distance:this.distance
    })
}

//reads all the players information
static getPlayersInfo(){
   database.ref("players").on("value",(data)=>{
       players=data.val(  )
   })
}

}