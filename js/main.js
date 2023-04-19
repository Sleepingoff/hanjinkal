$(document).ready(function(){
    $("ul.submenu").addClass("submenuani");
    $("ul.gnb").mouseleave(function(){
        $("ul.submenu").addClass("submenuUp");
        $(this).find("ul.submenu").removeClass("submenushow");
        $(this).find("button.close").remove();
        $("ul.submenu").addClass("submenuani");
    });
    //버튼을 누르거나 마우스를 떼면 show인 상태에서 up을 실행하고 remove하기
    //show가 없어지면 = ani가 생기면 같이 없어지게 하기
    $("ul.gnb > li").hover( 
        function(){
            if($("ul.submenu").hasClass("submenuani")){
                $("ul.submenu").removeClass("submenuUp");
            }
            if($("ul.submenu").hasClass("submenushow")){
                $("ul.submenu").removeClass("submenuani");
            }
            $(this).find("ul.submenu").addClass("submenushow");
            
            $("ul.submenu").append("<button class='close'>닫기</button>");
            $(this).siblings().find("ul.submenu").removeClass("submenushow");
            $("button.close").click(
                function(){
                    $(".submenu").addClass("submenuUp");
                    $(".submenu").removeClass("submenuani");
                    $(this).remove();
                }
            ); 
        },
        function(){ //hover 종료 시
            $("button.close").remove();
            $(".submenu").addClass("submenuUp");
            $("ul.submenu").removeClass("submenushow");
        }
    );
});