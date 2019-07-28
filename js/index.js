(function($) {
        
    var card = $('.single-card');

    card.map(function(index, item) {

        $(item).on("mousemove", function(e) {
            var mX = e.clientX
            var mY = e.clientY
            var winHalfWidth = window.innerWidth/2
            var winHalfHeight = window.innerHeight/2 
            var xdeg = (mX - winHalfWidth)/winHalfWidth;
            var ydeg = (mY - winHalfHeight)/winHalfHeight;
            
            $(this).css({
                transition: '0ms',
                transform: `rotateX(${ydeg * 10}deg) rotateY(${xdeg * 10}deg)`
            });
        });

        window.ondevicemotion = function(event) {
            var acX = event.accelerationIncludingGravity.x;
            var acY = event.accelerationIncludingGravity.y;
            var acZ = event.accelerationIncludingGravity.z;
            let xdeg = acX/10;
            let ydeg = acY/10;
            $(this).css('transform', `rotateX(${ydeg * 20}deg) rotateY(${xdeg * 20}deg)`);
        }

        $(item).on('mouseout', function(){

            $(this).css({
                transition: 'transform 300ms linear 0s',
                transform: 'rotateX(0deg) rotateY(0deg)'
            });
        });

    });

})(jQuery);