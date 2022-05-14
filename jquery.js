var playing = false;
var score;
var trialleft;

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
           }
       
        }
   });
});

function addHearts(){
   for(i=0;i<trialleft;i++){
      $("#trialleft").append("x");
   }
}