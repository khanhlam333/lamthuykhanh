$(document).ready(function(){
    $(document).on('scroll', function() {
      $(".menu").css({
        "display": "block",
        "position": "fixed",
        "top": "0"
      }).slideDown();
      
      if($(window).scrollTop() == 0){
        $(".menu").slideUp();
        $(".menu").css({
          "display": "none"
        });
      };
    });
    
    $("#vietnamese").click(function(){
      $("#vietnamese").addClass("chosen");
      $("#vietnamese").removeClass("not-chosen");
      $("#english").removeClass("chosen");
    });
    
    $("#english").click(function(){
      $("#english").addClass("chosen");
      $("#english").removeClass("not-chosen");
      $("#vietnamese").removeClass("chosen");
    });
});