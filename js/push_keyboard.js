var score=0
$("#getvalue").on('keyup', function (e) {
	if (e.keyCode == 13) {
		var inputValue=$('#getvalue').val();
		$('.wordsscreen span').each(function (){
  if(inputValue === $(this).text()){
	  $('#getvalue').val('');
	  $(this).remove();
	  $('.score-board b').text(score+=1);
  }
			else{
				$('.error').show().delay(1000).fadeOut();
			}
			});
	}
});


(function(){
$('#getvalue').focus();
var words = [
	"나날이",
	"텍사스",
	"벨벳",
	"미국",
	"키보드", 
	"컴퓨터", 
	"바이올린", 
	"책상", 
	"사과", 
	"하드디스크", 
	"물병", 
	"장난감", 
	"아싸라비야콜롬비야",
	"대한민국",
	'제주도',
	'여기가지 어떻게 온거지 이제 죽을때가 되었군',
	'기분',
	'햇빛',
	'기름',
	'슬픔',
	'알렉스트라자',
	'다운타운',
	'아이돌',
	'콘서트',
	'악수',
	'고양이',
	'발코니',
	'호텔'
	], i = 0;
setInterval( function(){
	// generatign new span element
	 var elem = $("<span />", {
		"class": "quote"
	  });
	  $('.wordsscreen').append(elem);
	elem.slideDown(function(){
		$(this).html(words[i=(i+1)%words.length]).animate({
			top:'100%'
		}, 4000);
	})
	var position = $('span').position()
	if(position.top > 280){
		$('.gameover').fadeIn();
	}

}, 2000);
	
})();