var playing = false;
var score;
var trialleft;
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
           for(i = 0; i<trialleft ; i++){
              $("trialleft").append("x");
              addHearts();

              $("#start").html("Reset Game");
              startAction();
           }
       
        }
   });
});

function addHearts(){
   for(i=0;i<trialleft;i++){
      $("#trialleft").append('<img src = "images/hearts.png" class = "life">');
   }
}

function startAction(){
   $("#fruits1").show();
   chooseFruit();
   $('#fruits1').css({'left' : 300, 'top' : -100});
}

function chooseFruit(){
   $("#fruits1").attr('src', 'images/' + fruits[Math.round(6*Math.random())] + '.png' );
}