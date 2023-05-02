$(document).ready(function(){
    let clickCount = 1;
    let subnavChild = $("ul.subnav > li");
    //버튼 클릭 시 양 옆으로 이동하도록 만들기
    //1. 양 옆 버튼 추가하기
    $(".subnavwrap").append("<button class='next'></button>");
    $(".subnavwrap").prepend("<button class='prev'></button>");
    //.subnavwrap안에 ul을 감싸는 div 추가하기
    $("ul.subnav").wrap("<div class='wsubnav'></div>");
    subnavChild.prepend("<div class=''></div>");
    //클릭한 대상 표시하기
   
    $("ul.subnav > li:first-child div").addClass("bluecircle");
    subnavChild.click(function(){
        $(this).children().removeClass("ccc").addClass("blue");
        $(this).children("div").addClass("bluecircle");
        $(this).siblings().children("div").removeClass("bluecircle");
        $(this).siblings().children().addClass("ccc").removeClass("blue");
        clickCount = $(this).index();
        console.log(clickCount);
        return false;
    });
    //버튼 클릭 이벤트
    let currentPlace = 0;
    //현재 이동된 거리에서 +- 200px을 할 순 없을까
    $(".subnavwrap > button").click(function(){
        
        if($(this).hasClass("prev")){
            clickCount--;
            
            if(currentPlace === 200){
                $("ul.subnav > li:nth-child("+clickCount+")").children().removeClass("ccc").addClass("blue");
                $("ul.subnav > li:nth-child("+clickCount+")").siblings().children().addClass("ccc").removeClass("blue");
                $("ul.subnav > li:nth-child("+clickCount+")").children("div").addClass("bluecircle");
                $("ul.subnav > li:nth-child("+clickCount+")").siblings().children("div").removeClass("bluecircle");
            } else{
                $("ul.subnav").css({"transform":"translateX("+ currentPlace +"px)"});
                currentPlace += 200;
            }
        }
        
        if($(this).hasClass("next")){
            clickCount++;
            if(currentPlace === -800){
                $("ul.subnav > li:nth-child("+clickCount+")").children().removeClass("ccc").addClass("blue");
                $("ul.subnav > li:nth-child("+clickCount+")").siblings().children().addClass("ccc").removeClass("blue");
                $("ul.subnav > li:nth-child("+clickCount+")").children("div").addClass("bluecircle");
                $("ul.subnav > li:nth-child("+clickCount+")").siblings().children("div").removeClass("bluecircle");
            }else{
                currentPlace -= 200;
                $("ul.subnav").css({"transform":"translateX("+ currentPlace +"px)"});
            }
            //currentPlace = -800 일때 next가 더 작동되지 않도록 하기
        }
        console.log(currentPlace);
        //clickCurrent를 기준으로 좌우로 왔다갔다하기
        //currentPlace = -800 || 0일때 clickCurrent next || prev하기
        $("ul.subnav > li:nth-child("+clickCount+")").children().removeClass("ccc").addClass("blue");
        $("ul.subnav > li:nth-child("+clickCount+")").siblings().children().addClass("ccc").removeClass("blue");
        $("ul.subnav > li:nth-child("+clickCount+")").children("div").addClass("bluecircle");
        $("ul.subnav > li:nth-child("+clickCount+")").siblings().children("div").removeClass("bluecircle");
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
    $("div.hide").append("<button class='showAll'><a>전문보기</a></button>");
    $("div.hide").append("<button class='close'>닫기</button>");
    $("img.more").click(
        function(){
            $(this).parent().siblings("div.hide").fadeIn();
            $("p.show").addClass("h2");
            $("div.hide button.close").click(function(){
                $("div.hide").fadeOut();
                $(this).remove();
            });
            $("div.hide button.showAll").click(function(){
                $(this).children().attr("href", "art_1.html");
                $(this).children().attr( "target", "_blank");
               
            });
        }
    );
    let cloneImg;
    //이미지 클릭 시 해당이미지와 캡션이 화면에 확대되어 보여지는 이벤트
    $(".imglist figure img").click(function(){
        //이전 이미지를 먼저 지우기
        $(cloneImg).remove();
        let currentImg = $(this).parent();
        cloneImg = $(currentImg).clone().prependTo("div.imglist").addClass("figwrap");
        $(cloneImg).children("figcaption").addClass("popuptext");
        //확대한 이미지 클릭하면 지우기
        $(cloneImg).click(function(){
            $(cloneImg).remove();
        });
    });
});