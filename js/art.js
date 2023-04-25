$(document).ready(function(){
    //버튼 클릭 시 양 옆으로 이동하도록 만들기
    //1. 양 옆 버튼 추가하기
    $(".subnavwrap").append("<button class='next'></button>");
    $(".subnavwrap").prepend("<button class='prev'></button>");
    //.subnavwrap안에 ul을 감싸는 div 추가하기
    $("ul.subnav").wrap("<div class='wsubnav'></div>");
    //버튼 클릭 이벤트
    let currentPlace = 0;
    //현재 이동된 거리에서 +- 200px을 할 순 없을까
    $(".subnavwrap > button").click(function(){
        if(currentPlace === 0 && $(this).hasClass("prev")){
            currentPlace = -1000;//currentPlace = 0 일때 가장 처음/마지막으로 돌아가기
        }
        if($(this).hasClass("prev")){
            currentPlace += 200; 
        }
        if(currentPlace === -800 && $(this).hasClass("next")){
            currentPlace = 200;
        }
        if($(this).hasClass("next")){
            currentPlace -= 200;
            //currentPlace = -800 일때 next가 더 작동되지 않도록 하기
        }
        $("ul.subnav").css({"transform":"translateX("+ currentPlace +"px)"});
            console.log(currentPlace);
        
        
        //버튼 클릭으로 두 가지를 묶어서 관리하기 > button + prev 두번작동되는 오류
        /*$(".prev").click(function(){
            currentPlace += 200;
            $("ul.subnav").css({"transform":"translateX("+ currentPlace +"px)"});
            console.log(currentPlace);
        });
        $(".next").click(function(){
            currentPlace -= 200;
            $("ul.subnav").css({"transform":"translateX("+ currentPlace +"px)"});
            console.log(currentPlace);
        });*/
        //1차문제 click 1회만 작동되는 것처럼 보인다. -> * currentPlace +- 200 해주어 클릭시 마다 증가되는 수로 해줌
        //-
    });
    //ul.subnav 내부 li 클릭시 새로고침되지 않고 색깔 바꾸기
    $("ul.subnav > li").prepend("<div class=''></div>");
    $("ul.subnav > li:first-child div").addClass("bluecircle");
    $("ul.subnav > li").click(function(){
        $(this).children().removeClass("ccc").addClass("blue");
        $(this).children("div").addClass("bluecircle");
        $(this).siblings().children("div").removeClass("bluecircle");
        $(this).siblings().children().addClass("ccc").removeClass("blue");
        return false;
    });
    $("img.more").click(
        function(){
            $(this).parent().siblings("div.hide").fadeIn();
            $("p.show").addClass("h2");
        }
    );
});