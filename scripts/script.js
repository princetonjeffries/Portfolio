var i = 0;
$(function(){
    $('#web1').hover(function(){
        $('this').css('opacity', '10%');
    })
    $('.fronttext').fadeTo(1000, 1);
    $('.aboutme').fadeTo(500, 1);
    $("#themeBtn").click(function(){
        
        // Change src attribute of image
        if(i == 0){ //if i = 0 when button pressed, switch image to sunset
            $('body').css("background-color", "#5d646e");
            i++;
        } else if (i == 1){ // when i = 1 and button is pressed, switch to night
            $('body').css("background-color", "#5e6e5d");
            i++;
        } else if (i == 2){ //when i = 2 and button is pressed switch to beginning image and reset i.
            $('body').css("background-color", "rgb(85, 55, 55)");
            i = 0;
        }
    });    
});