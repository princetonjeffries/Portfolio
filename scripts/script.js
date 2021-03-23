function changeTheme(){

}
var i = 0;
$(document).ready(function(){
    $("#themeBtn").click(function(){
        
        // Change src attribute of image
        if(i == 0){
            $('body').css("background-image", "url(images/backgroundsunset.gif)");
            i++;
        } else if (i == 1){
            $('body').css("background-image", "url(images/backgroundnight.gif)");
            i++;
        } else if (i == 2){
            $('body').css("background-image", "url(images/backgroundtest3.gif)");
            i = 0;
        }
    });    
});