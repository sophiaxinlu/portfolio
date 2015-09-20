/*
 * Jquery swiper
 * Created by Sophia Lu
 */
;(function($) {
    $.fn.swipe = function(options) {
        // Default thresholds & swipe functions
        var defaults = {
            threshold: {
                x: 30,
                y: 10
            },
            initiate: function() {},
            swipeLeft: function() {console.log("swipeLeft");},
            swipeRight: function() {console.log("swipeRight");}
        };

        var options = $.extend(defaults, options);

        if (!this) return false;

        return this.each(function() {
            var self = $(this);

            // Private variables for each element
            var originalCoord = { x: 0, y: 0 };
            var finalCoord = { x: 0, y: 0 };

            // starting swipe gesture
            function touchStart(event) {
                event.preventDefault();
                // fire user's initiate event.
                options.initiate.call(this);
                originalCoord.x = (event.targetTouches != undefined) ? event.targetTouches[0].screenX : event.offsetX;
                originalCoord.y = (event.targetTouches != undefined) ? event.targetTouches[0].screenY : event.offsetY;
            }

            // Store coordinates as finger is swiping
            function touchMove(event) {
                event.preventDefault();
                finalCoord.x = (event.targetTouches != undefined) ? event.targetTouches[0].screenX : event.offsetX;
                finalCoord.y = (event.targetTouches != undefined) ? event.targetTouches[0].screenY : event.offsetY;
            }

            // Done Swiping
            // Swipe should only be on X axis, ignore if swipe on Y axis
            // Calculate if the swipe was left or right
            function touchEnd(event) {
                //console.log('Ending swipe gesture...')
                var changeY = originalCoord.y - finalCoord.y;
                if(changeY < defaults.threshold.y && changeY > (defaults.threshold.y*-1)) {
                    changeX = originalCoord.x - finalCoord.x;

                    if(changeX > defaults.threshold.x) {
                        options.swipeLeft.call(this, changeX);
                    }
                    if(changeX < (defaults.threshold.x*-1)) {
                        options.swipeRight.call(this, changeX);
                    }
                }
            }

            // Swipe was canceled
            function touchCancel(event) {
                //console.log('Canceling swipe gesture...')
            }

            // Add gestures to all swipable areas
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener("touchstart", touchStart, false);
                this.addEventListener("touchmove", touchMove, false);
                this.addEventListener("touchend", touchEnd, false);
                this.addEventListener("touchcancel", touchCancel, false);
            } else {
                this.addEventListener("mousedown", touchStart, false);
                this.addEventListener("mousemove", touchMove, false);
                this.addEventListener("mouseup", touchEnd, false);
            }

        });
    };
})(jQuery);