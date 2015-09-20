
(function($) {

    var pageWidth = $(window).width();
    var buttonWidth = $('.itemSwipeOut').outerWidth();
    $(".item").width(pageWidth);

    var listWidth = $(window).width() + buttonWidth;

    $('.itemInner').swipe({
        initiate: function(event) {

        },
        swipeLeft: function(x) {
            var $target = $(this);
            controlDeleteBtn($target, x, 'left')
        },
        swipeRight: function(x) {
            var $target = $(this);
            controlDeleteBtn($target, x, 'right')
        }
    });


    function controlDeleteBtn($target, x, flag) {

        var posX = '-20%';

        if ((Math.abs(x)> buttonWidth/2) && (flag === "left")) {
            $target.css("-webkit-transform", "translateX("+ posX +")");
        } else {
            $target.css("-webkit-transform", "translateX(0)");
        }
    }

    $(".deleteBtn").click(function(){
        $(this).parents(".item").hide();
    });

})(jQuery);