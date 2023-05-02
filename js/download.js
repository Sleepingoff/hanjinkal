$(document).ready(function(){
    $(".download ul.nav li a.blue").parent().addClass("bordertop blue");
    //img popup
    let popupImg;
    $("ul.downloadlist li figure").click(function(){
        $(popupImg).remove();
        popupImg = $(this).clone().prependTo("section.download");
        $(popupImg).addClass("popupImg");
        $(popupImg).click(function(){
            $(popupImg).remove();
        });
    });
});