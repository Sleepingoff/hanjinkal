$(document).ready(function(){
    $("ul.submenu").addClass("submenuani");
    //버튼을 누르거나 마우스를 떼면 show인 상태에서 up을 실행하고 remove하기
    //show가 없어지면 = ani가 생기면 up이 없어지게 하기
    //문제1: show가 사라지지 않는다.
    $("ul.gnb > li").hover(
        function(){
            $("ul.submenu").removeClass("submenuUp");
            if($("ul.submenu").hasClass("submenushow")){
                $("ul.submenu").removeClass("submenuani");
            }
            $(this).find("ul.submenu").addClass("submenushow");

            $("button.close").remove();
            $("ul.submenu").append("<button class='close'>닫기</button>");
            $(this).siblings().find("ul.submenu").removeClass("submenushow");
            $(this).find("button.close").click(
                function(){
                    $("ul.submenu").animate({top: "-100px", opacity: "0" },function(){
                        $("ul.submenu").removeClass("submenushow");
                        $("ul.submenu").css({"top":"0", "opacity" : "1"});
                    });
                }
            )
        },
    );
    $("ul.gnb").mouseleave(
        function(){
            $(this).find("button.close").remove();
            $("ul.submenu").addClass("submenuani");
            $("ul.submenu").animate({top: "-100px", opacity: "0" }, function(){
                    $("ul.submenu").removeClass("submenushow");
                    $("ul.submenu").css({"top":"0", "opacity" : "1"});
            }); //시간이 다 지나지 않고 다시 hover하면 렉걸림 그지같음
            
        }
    );
});