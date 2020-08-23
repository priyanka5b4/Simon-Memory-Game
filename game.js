var randomChoosenColor;
var buttonColors = ["blue", "green", "red", "yellow" ];
var gamePatter,level,iter;
function startOver()
{
    gamePattern = [];
    level =0;
    iter =0;

}


function playSound(name){
  
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence(){
    level++;
 
    $("h1").text("level " + level);
  var randomNumber =  Math.floor(Math.random()*4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  $("#"+ randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
   
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
     setTimeout(() =>{
        $("#" + currentColor).removeClass("pressed");    
     }, 100)

}


function checkAnswer(color){
       
        if(gamePattern[iter]!=color)
        return false;
        return true;

}

$(".btn").click( function(){

    var UserChosenColor = this.id;
    
     playSound(UserChosenColor);
     animatePress(UserChosenColor);
    if(checkAnswer(UserChosenColor) === false) {
    $(document).addClass("game-over");
      $("h1").text("GAME_OVER. PRESS ANY KEY TO RESTART");
    }
    else 
      iter++;

    if(iter == level) {
        setTimeout(() =>{
           nextSequence();  
         }, 1000)
       iter=0;
    }
   
});


$(document).keypress(function(){
    startOver();
    setTimeout(() =>{
    nextSequence();  
  }, 1000)
 

});










