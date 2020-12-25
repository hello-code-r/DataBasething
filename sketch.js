var database, form, game, player;
var gameState = 0;
var playerCount = 0;
function setup(){
  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getstate();
  game.start();
}
function draw(){
 background("red");


}