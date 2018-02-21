(function() {
    var css = {};
    var c = false;
    var open = false;
    var closeIt = function() {
        open = false;
        $('.drawer').css({'left' : '0px'});
        $('.side-menu').css({'left' : '-130px'});
        $('.profile-detail').css({'left' : '-120px'});
    }
    
    $('.profile-detail, .about').click(function(e) {
        e.preventDefault();
        if(c) {
            return;
        }
        
        c = true;
        var offset = $('.profile-detail').offset();
        css = {
            'position' : 'fixed',
            'top' : offset.top,
            'left' : offset.left
          };

        if ($(window).width() < 750) {
            $('.drawer').show();
        }
        
        $('.profile-detail').css(css);
        $('.footer').hide();
        $('.main-content').css({'margin-top' : '50px'});
        $('h1, .slogan, .all-right, hr').hide();
        setTimeout(function() {
            var mCss = $('.main-content').offset();
            $('.profile-detail').css({'top' : '30px', 'left' : mCss.left-130, 'width' : '112px'});
            $('.profile-img').css({'width' : '100px', 'height': '100px', 'max-width' : '100px'})
            $('.profile-img img').css({'margin-left' : '-20px'});
            $('h1').css({'text-align' : 'left'});
            $('.slogan').css({'text-align' : 'left'});
            $('h1, .slogan, .all-right, hr').fadeIn(500);
            $('.me').fadeIn(500);
            setTimeout(function() {
                var nOffset = $('.profile-detail').offset();
                var sTop = nOffset.top+130;
                if ($(window).width() < 750) {
                    sTop = 0;
                    $('.drawer').show();
                }
                
                $('.side-menu').css({'left' : mCss.left-130, 'top' : sTop});
                $('.side-menu').fadeIn(500);
            }, 300);
        }, 0);
    });

    $('.home-back').click(function(e) {
        e.preventDefault();
        c = false;
        closeIt();
        $('.drawer').hide();
        $('.profile-detail').css({top: css.top, left: css.left, width: 312, 'max-width': 312});
        $('.profile-img').css({'width' : '300px', 'height': '300px', 'max-width' : '300px'})
        $('.profile-img img').css({'margin-left' : '-50px'});
        $('.me').fadeOut(100);
        $('.main-content').removeAttr('style');
        $('h1').fadeOut(100);
        $('.slogan').fadeOut(100);
        $('.side-menu').fadeOut(100);
        $('hr').fadeOut(100);
        $('.all-right').fadeOut(100);
        setTimeout(function() {
            $('.profile-detail').removeAttr('style');
            $('.profile-img').removeAttr('style');
            $('.profile-img img').removeAttr('style');
            $('h1').fadeIn(300);
            $('.slogan').fadeIn(300);
            $('hr').fadeIn(300);
            $('.all-right').fadeIn(300);
            $('h1').removeAttr('style');
            $('.slogan').removeAttr('style');
            $('.side-menu').removeAttr('style');
            $('.side-menu').css({'left' : '0px', 'padding-top' : '150px', 'border' : '1px solid #eee'});
            $('')
            $('.footer').removeAttr('style');
        },500);
    })

    $('.drawer').click(function() {
        if (open) {
            closeIt();
            return;
        }

        open = true;
        $(document).scrollTop(0);
        setTimeout(function() {
            $('.profile-detail').css({'left' : '10px'});
            $('.side-menu').css({'left' : '0px'});
            $('.side-menu').css({'left' : '0px', 'padding-top' : '150px', 'border' : '1px solid #eee', 'top' : '0px'});
            $('.drawer').css({'left' : '130px'});
        }, 300);
    });
    
    $(window).resize(function() {
        if (!c) {
            return;
        }
        
        var mCss = $('.main-content').offset();
        var nOffset = $('.profile-detail').offset();
        $('.profile-detail').css({'top' : '30px', 'left' : mCss.left-130, 'width' : '112px'});
        $('.side-menu').css({'left' : mCss.left-130, 'top' : nOffset.top+130, 'border' : 'none', 'padding-top' : 0});
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 10) {
            closeIt();
        }
    });

    if ($(window).width() < 750) {
        $('.profile-detail').css({'left' : '10px'});
        $('.side-menu').css('cssText', 'top 0px !important');
        $('.side-menu').css({'left' : '0px', 'padding-top' : '150px', 'border' : '1px solid #eee'});
    }
    
}(jQuery));
