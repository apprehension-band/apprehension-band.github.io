$(function() {

    function getScrollPercent() {
        var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
        document.querySelector("body").style.backgroundPositionY = ((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * - 2000) + "px";
    }

    $('#navbar a').each(function() {
        if ($(this).attr('href') == location.href.split("/").slice(-1)){ $(this).addClass('current_page'); }
    });

    if(document.referrer.split('/')[2]!=location.hostname){
        $('#navbar a').each(function(i){
            var item = $(this);
            item.css("animate", "fall-from-top 0.75s ease")
            setTimeout(function() {
                item.toggleClass('fall-in');
            }, 150*i);
            setTimeout(function() {
                item.css("transform", "translateY(0%)");
            }, 250*i);
        })
    }else{
        $('#navbar a').each(function(i){
            var item = $(this);
            item.css("transform", "translateY(0%)")
        })
    }

});