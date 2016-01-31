$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $(".can").show();
        }else{
            $(".can").hide();
        }
        $(".can").click(function(){
            $({top: $(window).scrollTop()}).animate(
                {top: 0},
                {
                    duration: 500,
                    step: function() {
                        $(window).scrollTop(this.top);
                    }
                }
            );
        });
    });


})
