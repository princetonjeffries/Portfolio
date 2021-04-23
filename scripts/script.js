var i = 0;
$(function(){
    $('body').css("background-image", sessionStorage.getItem('background'));
    $('#web1').hover(function(){
        $('this').css('opacity', '10%');
    })
    //$('.fronttext').fadeTo(1000, 1);
    $('.aboutme').fadeTo(1000, 1);
    $("#themeBtn").click(function(){
        // Change src attribute of image
        if(i == 0){ //if i = 0 when button pressed, switch image to sunset
            //$('body').css("background-color", "#5d646e");
            $('body').css("background-image", "url(images/mountains.jpg)");
            i++;
        } else if (i==1){ // when i = 1 and button is pressed, switch to night
            $('body').css("background-image", "url(images/space.jpg)");
            i++;
        } else if (i==2){ //when i = 2 and button is pressed switch to beginning image and reset i.
            $('body').css("background-image", "url(images/citynight.jpg)");
            i = 0;
        }
    });    
});
//Anime JS
document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets:'.intro',
        translateX: [-400,0],
        opacity:[0,1],
        duration:1000,
        delay:500,
        easing:'easeOutExpo',
    });
    anime({
        targets: '.fronttext',
        opacity: 1,
        duration: 5000,
    });
    anime({
        targets:'.edu',
        delay:500,
        opacity:[0,1],
        translateX:[-200,0],
        easing:'easeOutExpo'
    });
    anime({
        targets:'.qual',
        delay:500,
        opacity:[0,1],
        translateX:[200,0],
        easing:'easeOutExpo'
    });
    anime({
        targets:'.vol',
        delay:1000,
        opacity:[0,1],
        translateZ:[200,0],
        easing:'easeOutExpo'
    });
})
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper1 = document.querySelector('.ml13');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");
var textWrapper2 = document.querySelector('.ml14');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");
anime.timeline()
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutQuad",
    duration: 600,
    delay: (el, i) => 500 + 30 * i
  })
  .add({
    targets: '.ml13 .letter1',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutQuad",
    duration: 600,
    delay: (el, x) => 100 + 30 * x
  })
  .add({
    targets: '.ml14 .letter2',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutQuad",
    duration: 200,
    delay: (el, y) => 100 + 30 * y
  })