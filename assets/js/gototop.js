$(function(){
    var offset = 300;
    var offsetOpacity = 1200;
    var scrollTopDuration = 700;
    var $gotoTopBtn = $('#btn-goto-top');
    var sFadeOut = 'btn-fade-out';

    $(window).scroll(function(){
        if ($(this).scrollTop() > offset) {
            $gotoTopBtn.fadeIn();
        } else {
            $gotoTopBtn.fadeOut();
            $gotoTopBtn.removeClass(sFadeOut);
        }

        if($(this).scrollTop() > offsetOpacity) {
			$gotoTopBtn.addClass(sFadeOut);
		}
    });

    //smooth scroll to top
    $gotoTopBtn.on('click', function(event){
        event.preventDefault();
        $('body, html').animate({scrollTop: 0 }, scrollTopDuration);
    });
});
