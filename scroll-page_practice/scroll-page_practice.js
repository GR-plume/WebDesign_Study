(function(){

    var pagenum = 1;

    window.addEventListener("resize",function(){
        window.scroll({top:$(`#wrap-${pagenum}`).offset().top});
    });

    $("[id^=wrap-]").on("wheel", function(e){
        var deltaY = e.originalEvent.deltaY;
        var wrapnow = $(this).prop("id").split("-")[1];
        var vector = 1;
        if(0 < deltaY){vector = 1}else{vector = -1};
        if($(this).prop("id") === "wrap-1" && deltaY > 0||
           $(this).prop("id") === "wrap-3" && deltaY < 0||
           $(this).prop("id") === "wrap-2"){
                var wrapnext = $(`#wrap-${Number(wrapnow) + vector}`).offset().top;
                window.scroll({top:wrapnext,behavior:"smooth"});
                pagenum = Number(wrapnow) + vector;
        };
    });

}());