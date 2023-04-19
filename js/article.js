$(document).ready(function(){
    //메인내용중 전문만 남기고 나머지 감추기
    //$("#governance section article:not(:first-of-type)").hide();
    $("#governance section article").not(":first-of-type").hide();
    //목록클릭시 해당 메인이 보이게 하기
    // $("#governance section div ul li a").click(
    //     function(){
    //         // $("article").fadeIn();
    //         // $("article").slideUp();
    //         // $("article").slideDown();
    //         var num = $(this).parent().index()+1;
    //         $("article:nth-of-type(num)").show();
    //         $("article").not(":nth-of-type(num)").hide();
    //         return false;

    //     }
    // );
    
    $("#governance section div ul li a").click(
        function(){
            let num = $(this).parent().index()+1;
            $("article:nth-of-type("+ num +")").show();
            $("article").not(":nth-of-type("+ num +")").hide();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            return false;
        }
    );
});