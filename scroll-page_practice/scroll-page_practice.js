(function(){

var pageNum = 1;

function throttle(fn, _this, wait){
    var time = Date.now();
    return function(){
      if ((time + wait - Date.now()) < 0) {
        fn.apply(_this, arguments);
        time = Date.now();
      }
    }
};

function debounce(fn, _this, wait){
    let timerId;
    return () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(_this, arguments);
      }, wait);
    }
};

function scrollFn(e){
    var idnow = Number(e.target.getAttribute("id").slice(-1));
    if(e.deltaY > 0){goDown(idnow,e)}else{goUp(idnow,e)};
};

function goUp(idnow){
    var idnext = idnow - 1;
    if(idnext != 0){
        var windowHeight = window.innerHeight;
        window.scrollBy({top:-windowHeight,behavior:"smooth"});
        pageNum--;
    }
};

function goDown(idnow){
    var idnext = idnow + 1;
    if(idnext != 4){
        var windowHeight = window.innerHeight;
        window.scrollBy({top:windowHeight,behavior:"smooth"});
        pageNum++;
    }
};

function resizeElement(){
    var element = document.getElementById(`wrap-${pageNum}`);
    var py = window.pageYOffset + element.getBoundingClientRect().top;
    window.scroll({top:py});
};

document.addEventListener("mousewheel",throttle(scrollFn,this,600));

window.addEventListener("resize",debounce(resizeElement,this,300));

}());