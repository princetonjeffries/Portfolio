var i = 0;
$(function(){
    $('.fronttext').fadeTo(1000, 1);
    $('.aboutme').fadeTo(500, 1);
    $("#themeBtn").click(function(){
        
        // Change src attribute of image
        if(i == 0){ //if i = 0 when button pressed, switch image to sunset
            $('body').css("background-color", "navy");
            i++;
        } else if (i == 1){ // when i = 1 and button is pressed, switch to night
            $('body').css("background-color", "#2C7BD4");
            i++;
        } else if (i == 2){ //when i = 2 and button is pressed switch to beginning image and reset i.
            $('body').css("background-image", "url(images/backgroundsunset.gif)");
            i = 0;
        }
    });    
});