$(function(){ //document.ready 축약 표현
    $("#president div.flex").prepend("<figure><img src='img/cm1.jpg' alt =''></figure>");
    //prepend와 append()를 사용하기 위해 div로 태그가 추가될 위치를 정확하게 해준다.

    $("#president .wrap ul.gallery li:nth-child(1)").addClass("blueborder");
    $("#president .wrap ul.gallery li").click(
        function(){
            let imgNum = $(this).index()+1;
            $(this).addClass("blueborder");
            $(this).siblings().removeClass("blueborder");
            if($(this).hasClass("blueborder")){
                $("#president div.flex > figure img").attr("src", "img/cm"+ imgNum +".jpg"); //이미지 교체하기
                //todo: blueborder를 가진 이미지 링크 복사해서 가져오기
            }
            return false;
        }
    )

    let year = $("#president ul.year");
    $(year).children("li:nth-of-type(1)").show();
    $(year).children().not(":nth-of-type(1)").hide();

    $(".clickCurrent").children("li").not(":first-child").addClass("clickCurrentNotfirstchild");
    $(".clickCurrent").find("a").addClass("clickCurrentInnerA");
    
    $(".clickCurrent").children("li").click(
        function(){
            let num = $(this).index()+1;
            $(year).children("li:nth-of-type("+ num +")").show();
            $(year).children().not(":nth-of-type("+ num +")").hide();

            $(this).addClass("current");
            $(this).siblings().removeClass("current");
            //밖에서 실행되는데 click내부에서만 실행이 안되는 이유가 뭘까
            //이유: 다른 js 파일에서 a태그에 event를 붙여서!!
            $("li.current").find("a.clickCurrentInnerA").addClass("blue").removeClass("ccc");
            $("li.current").siblings().find("a.clickCurrentInnerA").removeClass("blue").addClass("ccc");
            return false;
        }
    )
    
});