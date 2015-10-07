$(document).ready(function(){

    /*fade in*/
    $("#main").fadeIn(2400);
    resizeBoxes();
    socialMedia();
    contactBubble();

    /*page scroll*/
    $(window).resize(function() {
        resizeBoxes();
    });


    $('a[href*=#]').click(function(){
        return false;
    });

    $('a[href*=#]').bind("click", jump);



    /*For Portfolio*/
    $('#da-thumbs > li').hoverdir( {
        hoverDelay	: 75
    } );

    setTimeout("contactAnimation()",300);

});


function contactAnimation(){
    cloud1();
}

function cloud1(){
    $("#cloud1").animate({left:"+=200"},8000).animate({left:"-=200"}, 8000);
    setTimeout("cloud1()",16000);

}

function socialMedia(){

    $(".socialMedia li a img").hover(function(){
          var hoverImg = HoverImgOf($(this).attr("src"));
          $this = $(this);
          $this.animate({step : $this.attr("src", hoverImg)}, { duration: "slow" });
        },function(){
           var normalImg = NormalImgOf($(this).attr("src"));
           $this = $(this);
           $this.animate({step : $this.attr("src", normalImg)}, { duration: "slow" });
        }
    );

}


function HoverImgOf(filename)
{
   var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_hover.$2");
}

function NormalImgOf(filename)
{
   var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1.$2");
}


function resizeBoxes() {
    var browserWidth = $(window).width();
    var browserHeight = 900;
    $('#main').css({
        "min-height": browserHeight * 4
    });
    $('.page').css({
        width: browserWidth,
		"min-height":browserHeight
    });

}


function contactBubble(){
    $('.contactImg').hover(
       function(){
         $('.contactBubble').fadeIn(300);
       },  function(){
         $('.contactBubble').fadeOut(300);
    });
}

function jump(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
   //Get the target
   var target = $(this).attr("href");
   //perform animated scrolling
   $('html,body').animate(
   {
           //get top-position of target-element and set it as scroll target
           scrollTop: $(target).offset().top
   //scrolldelay: 2 seconds
   },2000,function()
   {
           //attach the hash (#jumptarget) to the pageurl
           location.hash = target;
   });

}
