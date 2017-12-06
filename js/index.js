/**
 * Created by mhout on 2017/7/21.
 */
$(function () {
    //鼠标滑动显示浮动窗口
    $(".hover-show").mouseenter(function () {
        $(".hover-window").show(500).mouseleave(function () {
            $(this).hide(500);
        })
    });
// 换肤栏显示隐藏效果
    $(".change-skin").click(function() {
        $("#show-skin").slideDown();
        $("#wrap-skin").show().click(function (e) {
            if(e.target.id==="wrap-skin"){
                $(this).slideUp().children("#show-skin").slideUp()
            }
        });
    });
    $(".skin-up").click(function () {
        $("#wrap-skin").slideUp().children().slideUp();
    });
    $("#opacity").html('透明度:0%');
    $("#range").change(function () {
        var alpha=$(this).val();
        $("#opacity").html('透明度:'+alpha+'%');
        $(".wrap-box").css("background",`rgba(0,0,0,${alpha/100})`)
    });
});
$(function(){
    //    图片动态
    var imgSrc='images/back1.jpg';
    var fragmentConfig = {
        container : '.img-flex',//显示容器
        line : 10,//多少行
        column : 24,//多少列
        width :1920,//显示容器的宽度
        animeTime :2000,//最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值
        img : imgSrc//图片路径
    };
    fragmentImg(fragmentConfig);
    $("#show-skin .item").on("click","img",function(){
        $(".img-flex").fadeIn(500);
        var skin=$(this).attr("src");
        fragmentConfig.img=skin;
        fragmentConfig.animeTime=0;
        fragmentConfig.line=0;
        fragmentConfig.column=0;
        fragmentImg(fragmentConfig);
    });
    $("a.no-skin").click(function () {
        $(".img-flex").fadeOut(500);
    });
    $("#choose-file").change(function () {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview-skin");

        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            dataURL = $file.val();
            var imgObj = document.getElementById("preview-skin");
            // 两个坑:
            // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
            // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
        }
        $("button:contains('保存')").click(function () {
            fragmentConfig.img=dataURL;
            fragmentConfig.animeTime=0;
            fragmentConfig.line=0;
            fragmentConfig.column=0;
            fragmentImg(fragmentConfig);
        });
    });
    $("#cancel").click(function () {
        $("#show-skin").slideUp();
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
});