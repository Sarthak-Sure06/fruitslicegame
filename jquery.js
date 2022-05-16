var playing = false;
var score;
var trialleft;
var step;
var action;
var fruits = ['apple' , 'bananas' , 'cherries' , 'grapes' , 'mango' , 'pineapple' , 'watermelon'];


$(function(){

   $("#start").click(function(){

       if(playing == true){

           location.reload();
       
        }

       else{

           playing = true;

           score = 0;
           $("#scorevalue").html(score);

           $("#trialleft").show();
           trialleft = 3;
           addHearts();

              //hide gameover box
              $("#gameover").hide();

              $("#start").html("Reset Game");
              startAction();
           
       
        }
   });
});

   //cutting fruits
   $("#fruits1").mouseover(function(){
      score++;
      $("#scorevalue").html(score);//update score
   
      //document.getElementById("#slicesound")[0].play();
     $("#slicesound")[0].play(); //play sound

     clearInterval(action); //stop fruit

     $("#fruits1").hide( "explode", 500 ); //slice fruit

     setTimeout(startAction , 800);

   });


function addHearts(){
   $("#trialleft").empty();
   for(i=0;i<trialleft;i++){
      $("#trialleft").append('<img src = "images/hearts.png" class = "life">');
   }
}

//start sending fruits
function startAction(){

   //generate fruits
   $("#fruits1").show();
   chooseFruit(); //choose a random fruit

   $('#fruits1').css({'left' : Math.round(300*Math.random()), 'top' : -100});
   //random position

   //generate random steps
   step = 1 + Math.round(5*Math.random());

   // move fruit down by 1 step
   action = setInterval(function(){

      $("#fruits1").css('top', $("#fruits1").position().top + step);
   
      //check if fruits is too low
      if($("#fruits1").position().top > $("#fruitcontainer").height()){

      //check if trials left
      if(trialleft > 1){

         $("#fruits1").show();
         chooseFruit(); //choose a random fruit

         $('#fruits1').css({'left' : Math.round(300*Math.random()), 'top' : -100});
         //random position

         //generate random steps
         step = 1 + Math.round(5*Math.random());

         //reduce trails by 1
         trialleft--;

         addHearts();
      
      }

      else{
         //game over
         playing = false //we are not playing

         $("#start").html("start game"); //change button to start game

         $("#gameover").show();
         $("#gameover").html('<p>Game Over</p><p>Your Score is ' + score + '</p>');
         stopAction();
      }

     }
   
   } , 10);

}

function chooseFruit(){
   $("#fruits1").attr('src', 'images/' + fruits[Math.round(6*Math.random())] + '.png' );
}

//stop dropping fruits
function stopAction(){
   clearInterval(action);
   $("#fruits1").hide();
}

