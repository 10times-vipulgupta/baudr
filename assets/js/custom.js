$(document).ready(function() {

      $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
      }
      });
      });

      $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $('header').addClass("theBlurry");
            } else {
                $('header').removeClass("theBlurry");
            }
        });

        // $(window).resize(function(){

        if ($(window).width() <= 991) {  

            $("#make-event").click(function() {
                $('html,body').animate({
                    scrollTop: $("#make-event-pane").offset().top - 100 },
                    '1000');
            });
            $("#customize-calendar").click(function() {
                $('html,body').animate({
                    scrollTop: $("#customize-calendar-pane").offset().top - 100 },
                    '1000');
            });
            $("#event-messaging").click(function() {
                $('html,body').animate({
                    scrollTop: $("#event-messaging-pane").offset().top - 100 },
                    '1000');
            });
            $("#generate-share").click(function() {
                $('html,body').animate({
                    scrollTop: $("#generate-share-pane").offset().top - 100 },
                    '1000');
            });
            $("#making-sharing").click(function() {
                $('html,body').animate({
                    scrollTop: $("#making-sharing-pane").offset().top - 100 },
                    '1000');
            });



 
        $("#make-event-comm").click(function() {
            $('html,body').animate({
                scrollTop: $("#make-event-comm-pane").offset().top - 100 },
                '1000');
        });

        $("#synchronize-discovery").click(function() {
            $('html,body').animate({
                scrollTop: $("#synchronize-discovery-pane").offset().top - 100 },
                '1000');
        });
        $("#dashboard-track").click(function() {
            $('html,body').animate({
                scrollTop: $("#dashboard-track-pane").offset().top - 100 },
                '1000');
        });
        $("#reachout-click").click(function() {
            $('html,body').animate({
                scrollTop: $("#reachout-click-pane").offset().top - 100 },
                '1000');
        });
        $("#hassle-asset").click(function() {
            $('html,body').animate({
                scrollTop: $("#hassle-asset-pane").offset().top - 100 },
                '1000');
        });

        $("#discover-event").click(function() {
            $('html,body').animate({
                scrollTop: $("#discover-event-pane").offset().top - 100 },
                '1000');
        });
        $("#save-time").click(function() {
            $('html,body').animate({
                scrollTop: $("#save-time-pane").offset().top - 100 },
                '1000');
        });
        $("#custom-filters").click(function() {
            $('html,body').animate({
                scrollTop: $("#custom-filters-pane").offset().top - 100 },
                '1000');
        });
        $("#search-team").click(function() {
            $('html,body').animate({
                scrollTop: $("#search-team-pane").offset().top - 100 },
                '1000');
        });



        $("#post-event").click(function() {
            $('html,body').animate({
                scrollTop: $("#post-event-pane").offset().top - 100 },
                '1000');
        });

        $("#trach-results").click(function() {
            $('html,body').animate({
                scrollTop: $("#trach-results-pane").offset().top - 100 },
                '1000');
        });
        $("#capture-prosp").click(function() {
            $('html,body').animate({
                scrollTop: $("#capture-prosp-pane").offset().top - 100 },
                '1000');
        });
        $("#clear-picture").click(function() {
            $('html,body').animate({
                scrollTop: $("#clear-picture-pane").offset().top - 100 },
                '1000');
        });

       
        }

// });
});