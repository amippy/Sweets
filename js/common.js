/*ボタン　イベント　
$('#btn').click(function(){
  $('').slideDown();
});
*/



$(function(){

/*　selectの文言表示
-----------------------------------------------------------------------------------*/
  $('#hide_text').fadeIn(14000); $('#hide_text2').fadeIn(20000);

/*　select-bg & textカラーランダムに変更
---------------------------------------------------------------------------------------*/
$('.select').hover(function(){
  var colors = ["#C5AAF5"," #A3CBF1"," #79BFA1"," #F5A352"," #FB7374"," #FF7182"];
  var pick = Math.floor(Math.random()*5);
  var color = colors[pick];
  $(this).css('background-color',color);
},function(){
  $(this).css('background-color','#f1f6e4');
});

$('.change_txt_color').hover(function(){
  var colors = [" #177F75"," #21B6A8"," #CC1559"," #FF5EAA"," #96B3D3","#32B92D"," #F16745","#7BC8A4"," #4CC3D9","#93648D"," #FFEC94"," #FFBAD2"];
  var pick = Math.floor(Math.random()*5);
  var color = colors[pick];
  $(this).css('color',color);
},function(){
  $(this).css('color','black');
});

/* last
--------------------------------------------------------------------　*/
  $('#getResult').click(function(){
    var name = $('#name').val();  //好きなお菓子取得

    if(name == ""){
      alert("1番スキなお菓子を入力してください！");
      return;
    }

    var hogehoge = ["ママ","パパ","おじいちゃん","おばあちゃん","おじさん","おばさん","お金","セクシーダンサー","マッチョボーイ"];

    var hoge = hogehoge[Math.floor(Math.random() * hogehoge.length)];

    var result = "実は・・・わたしは、「" + name + "」よりも「" + hoge + "」が大好きです！！！" ;
    $('#result').text(result);

    //twitter
    var tweetLink = "<a href='https://twitter.com/intent/tweet?text="
      + encodeURIComponent(result) +" &hashtags=aminoWebSiteTestingNow' target='_blank'>ツイートする</a>";
      $("#tweet").html(tweetLink);


  });

/*　ボタン　イベントクリック
----------------------------------------------------------------------------------------*/


  $('#header_click').click(function(){
    $('#first_show_contents').show();
  });


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

  $('.btn_last').click(function(){
    $('#last').slideDown();
  });

});
