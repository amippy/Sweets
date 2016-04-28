/*ボタン　イベント　
$('#btn').click(function(){
  $('').slideDown();
});
*/



$(function(){

/*　selectの文言表示*/
  $('#hide_text').fadeIn(14000); $('#hide_text2').fadeIn(20000);

/*　select-bg カラーランダムに変更 */
$('.select').hover(function(){
  var colors = ["#C5AAF5"," #A3CBF1"," #79BFA1"," #F5A352"," #FB7374"," #FF7182"];
  var pick = Math.floor(Math.random()*5);
  var color = colors[pick];
  $(this).css('background-color',color);
},function(){
  $(this).css('background-color','#f1f6e4');
});



/* */

/*　ボタン　イベントクリック*/
  $('#btn1').click(function(){
    $('.kinoko').slideDown();
  });

  $('#btn2').click(function(){
    $('.takenoko').slideDown();
  });

  $('#btn3').click(function(){
    $('.pockey').slideDown();
  });

  $('#btn4').click(function(){
    $('.toppo').slideDown();
  });

  $('#btn5').click(function(){
    $('.jagariko').slideDown();
  });

  $('#btn6').click(function(){
    $('.jagabee').slideDown();
  });

  $('#btn7').click(function(){
    $('.chipstar').slideDown();
  });

  $('#btn8').click(function(){
    $('.pringles').slideDown();
  });

  $('#btn9').click(function(){
    $('.calbee').slideDown();
  });

  $('#btn10').click(function(){
    $('.koikeya').slideDown();
  });

  $('#btn11').click(function(){
    $('.almond').slideDown();
  });

  $('#btn12').click(function(){
    $('.macadamia').slideDown();
  });

  $('#btn13').click(function(){
    $('.apolo').slideDown();
  });

  $('#btn14').click(function(){
    $('.marble').slideDown();
  });






});
