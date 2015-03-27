$(function() {
    var _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var _screenHeight = $('#start').outerHeight(true);
    var _previousScroll = 0;

    // Fix top navigation
    $(window).on('scroll', function() {
        var _currentScroll = $(window).scrollTop();
        if(_currentScroll > _screenHeight){
            $('#navigation').fadeIn('normal');
        } else {
            $('#navigation').fadeOut('normal');
        }
        _previousScroll = _currentScroll;
    })

    $(window).on("load", function() {
        // oembed
        $(".oembed").oembed(
            null,
            {
                includeHandle: false,
            }
        );
    });
});

