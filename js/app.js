$(window).scroll(function(){
var wScroll = $(this).scrollTop();


if(wScroll > $('.container').offset().top - ($(window).height() / 1.2)) {

  $('.container .thumbnail').each(function(i){

    setTimeout(function(){
      $('.container .thumbnail').eq(i).addClass('is-showing');
    }, (700 * (Math.exp(i * 0.14))) - 700);
  });
}

});

$('.has-animation').each(function(index) {
  		if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){
  			$(this).delay($(this).data('delay')).queue(function(){
      			$(this).addClass('animate-in');
    		});
  		}
	});


$(window).scroll(function() {
	$('.has-animation').each(function(index) {
  		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
  			$(this).delay($(this).data('delay')).queue(function(){
      			$(this).addClass('animate-in');
    		});
  		}
	});
});
