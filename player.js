class PlayerCount {
    constructor(){

    }
getcount() {
 var playerCountRef = database.ref("playerCount");
 playerCountRef.on("value",function(data){
     playerCount=data.val();
 });
    }
    updateCount(count){
     database.ref('/').update({
        playerCount : count
     })
    }
 update(name){
  var playerIndex = "player"+playerCount;
   database.ref(playerIndex).set({
       Name : name
   })
 }
}