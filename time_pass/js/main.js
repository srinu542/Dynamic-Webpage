$(document).ready(()=>{
    var imLeftPre = parseInt($(".build").css("left"));
    var imTopPre = parseInt($(".build").css("top"));
    
    $(document).mousemove((e)=>{

    var X = e.pageX;
    var Y = e.pageY;

    var div = 15;
    
    parseInt($(".build").css("left",imLeftPre - (X/div)));
    parseInt($(".build").css("top",imTopPre - (Y/div)));
    });
})