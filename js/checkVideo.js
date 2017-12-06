/**
 * Created by JustR10 on 2017/7/11.
 */
$(function () {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    playIcon.src = "images/play.png";
    $("#video-play").mouseenter(function (e) {
        e.preventDefault();
        $(".control-video").show();
    }).mouseleave(function () {
        $(".control-video").hide();
    });
    $(".control-video").click(function (e) {
        e.preventDefault();
        if (video.paused) {
            $(this).children("img").attr("src", "images/play.png");
            video.play();
        }
    });
    video.onplay = function () {
        playIcon.style.display="none";
    };
    video.onpause= function () {
        playIcon.style.display="block";
    };
    $(".wrap-video").on("click","img",function () {
        location.href="checkVideo.html";
    })
});