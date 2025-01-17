$(function() {

    $('#navbar a').each(function() {
        if ($(this).attr('href') == location.href.split("/").slice(-1)){ $(this).addClass('current_page'); }
    });

    if(document.referrer.split('/')[2]!=location.hostname){
        $('#navbar a').each(function(i){
            var item = $(this);
            setTimeout(function() {
                item.toggleClass('fall-in');
                setTimeout(function() {
                    item.css("transform", "translateY(0%)");
                }, 900);
            }, 150*i);
        })
    }else{
        $('#navbar a').each(function(i){
            var item = $(this);
            item.css("transform", "translateY(0%)")
        })
    }

    var yOffset;  
    $(window).scroll(function(){
        yOffset=$(window).scrollTop()*2;
        $("body").css('background-position', '0px '+-yOffset+'px');
        })

});