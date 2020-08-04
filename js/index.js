
//************************* Scroll ETC ****************************//

//スムーススクロール
$(document).ready(function() {
	$('a[href^=#]').click(function() {
		var speed = 300; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// fadeIn & Out
$(function() {
	// page_top
	var topBtn = $('.page_top');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 550) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
});

//************************* Side Nav ****************************//

//side Gnav
$(function () {
	$('#baseContainer').on('click', function(){});

	var body = $('body');
	$('#js__sideMenuBtn').on('click', function () {
	  body.toggleClass('side-open');
	  $('html').toggleClass('scroll-fix');
	  $('#js__overlay').on('click', function () {
	    body.removeClass('side-open');
	    $('html').toggleClass('scroll-fix');
	  });
	});
});



// ************************* Parallax ****************************//

$(document).ready(function() {
	// 画面読み込み時パララックス読み込み
	showParallax();

	// ウィンドウサイズ変更イベント時
	$(window).scroll(function() {
		showParallax();
	});

	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 2000; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

});
function showParallax() {
	$('.fade').each(function() {
		var elemPos      = $(this).offset().top;
		var scroll       = $(window).scrollTop();
		var windowHeight = $(window).height();
		if(scroll > (elemPos - windowHeight + 100) && elemPos > scroll){
			if($(this).is(':visible')){
				$(this).addClass('fadein');

				if($(this).hasClass('od_01')){
					$(this).find('strong').html('70');
				}else if($(this).hasClass('od_02')){
					$(this).find('strong').html('300');
				}else if($(this).hasClass('od_03')){
					$(this).find('strong').html('7000');
				}else if($(this).hasClass('od_04')){
					$(this).find('strong.-01').html('300');
					$(this).find('strong.-02').html('1000');
				}
			}
		}
		else{
			if($(this).children('h2').length > 0){
				if($(this).hasClass('fadein')){
					$(this).removeClass('fadein');
				}
			}
		}
	});

	$('.od').each(function() {
		var elemPos      = $(this).offset().top;
		var scroll       = $(window).scrollTop();
		var windowHeight = $(window).height();
		if(scroll > (elemPos - windowHeight + 100) && elemPos > scroll){
			if($(this).hasClass('od_01') && $(this).find('strong').text() == '0'){
				$(this).find('strong').html('70');
			}else if($(this).hasClass('od_02') && $(this).find('strong').text() == '0'){
				$(this).find('strong').html('300');
			}else if($(this).hasClass('od_03') && $(this).find('strong').text() == '0'){
				$(this).find('strong').html('7000');
			}else if($(this).hasClass('od_04')){
				if($(this).find('strong.-01').text() == '0'){
					$(this).find('strong.-01').html('300');
				}
				if($(this).find('strong.-02').text() == '0'){
					$(this).find('strong.-02').html('1000');
				}
			}
		}
	});
}


