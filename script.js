$(function() {

    $('#navbar a').each(function() {
        if ($(this).attr('href') == location.href.split("/").slice(-1)){ $(this).addClass('current_page'); }
    });

    if(document.referrer.split('/')[2]!=location.hostname){
        $('#navbar a').each(function(i){
            var item = $(this);
            setTimeout(function() {
                item.toggleClass('fall-in');
            }, 150*i);
        })
    }else{
        $('#navbar a').each(function(i){
            var item = $(this);
            item.css("transform", "translateY(0%)")
        })
    }

});