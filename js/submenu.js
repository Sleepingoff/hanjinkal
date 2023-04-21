/*$(document).ready(function(){
    const menu = document.querySelectorAll("ul.gnb > li");
    const submenu = document.querySelectorAll("ul.submenu");
    const ani = "submenuani";
    const show = "submenushow";
    const up = "submenuUp";

    let firstTimeHover = true;
    let showDown = true;

    //class가 존재하는지 확인하는 함수
    function isExist(elem, name) {
        if (elem.classList.contains(name)) return true;
        return false;
    }
    //hover
    //firstTimeHover 시, ani를 추가한다.
    //show 클래스가 존재하면 ani를 지운다.
    //li에 show 클래스가 있으면, 다른 li의 show를 모두 지운다.
    function menuHover() {
        if (firstTimeHover) {
            submenu.classList.add(ani);
            firstTimeHover = false;
            menuHover();
            submenu.classList.remove(ani);
        } else {
            submenu.classList.add(show);
        }
    }
    //mouseleave
    //show 클래스가 없어지면 up을 추가한다. 단, up을 한 다음 show가 없어져야 함. 이게 어려워 재귀..?
    function menuLeave() {
        if (showDown) {
            showDown = false;
            menuLeave();
            //이 함수 내에서는 showDown이 false여서 Up 클래스를 추가하고 나온다.
            submenu.classList.remove(show, up);
        } else {
            submenu.classList.add(up);
            firstTimeHover = true;
            showDown = true;
        }
    }
    let firstTimeHoverIndex
    menu.forEach((el, index) => {
        el.onmouseover = () => {
          console.log(index);
        }
    });
    //배열 요소에 각각 접근해서 이벤트를 준다.
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener("mouseover", function menuHover() {
            let firstTimeHoverIndex = function(){
                //todo
                //mouseover한 첫번째 li의 배열 index를 가지고 와서 그 li에만 ani를 줄 것
                
            };
            submenu[firstTimeHoverIndex].classList.add(ani);
            submenu[i].classList.add(show);
        });
    }
    for(let i = 0; i < menu.length; i++){
        let value = submenu[i];
        menu[i].addEventListener("mouseleave", function menuLeave() {
            if (showDown) {
                showDown = false;
                menuLeave();
                //이 함수 내에서는 showDown이 false여서 Up 클래스를 추가하고 나온다.
                value.classList.remove(show, up);
            } else {
                value.classList.add(up);
                firstTimeHover = true;
                showDown = true;
            }
        });
    }
});*/

$(document).ready(function(){

    const ani = "submenuani";
    const show = "submenushow";
    const up = "submenuUp";
  
    let first = true;
  
    let leaveFrom = null;
  
    $(".gnb > li h2").mouseenter(function(){
      
      $("ul.submenu").removeClass(show).removeClass(up);
  
      $(this).siblings("ul.submenu").addClass(show);
      
      if(first){
        $(this).siblings("ul.submenu").addClass(ani);
  
        first = false;
      }
    });
  
    $(".gnb > li").mouseleave(function(){
      $(this).find("ul.submenu").removeClass(show).removeClass(ani);
      leaveFrom = $(this).find("ul.submenu");
    });
  
    $(".gnb").mouseleave(function(){
      first = true;
      leaveFrom.addClass(show).addClass(up);
    });
    
  });