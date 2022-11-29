$('document').ready(function() {
    $('#backup').css('cursor', 'pointer');
    $('.moreproducts').css('cursor', 'pointer');
})

$('.moreproducts').click(function() {
    //scroll to the bottom of page
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

$('#backup').click(function() {
    //scroll to the top of page
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

// $('.moreproducts').mouseover(function() {
//     $('.bi').animate({}, 'fast');
// })
$('.aboutuspage').click(function() {
    const changesite = document.createElement('div');
    document.body.appendChild(changesite);
    changesite.className = 'changesite';
    changesite.style.position = 'absolute';
    changesite.style.top = '0';
    changesite.style.left = '-200vw';
    changesite.style.width = '200vw';
    changesite.style.height = '100vh';
    changesite.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    changesite.style.transition = 'all 1s linear';
    $('.changesite').animate({ left: '0vw' }, 'slow');
    setTimeout(function() {
        window.location.href = "about.html";
    }, 2000);
    setTimeout(function() {
        if (window.location.href != "about.html") {
            $('.changesite').animate({ left: '-1000vw' }, 'slow');
            $('.warning').css('visibility', 'visible');
        }
    }, 3000);
})
$('.trans').animate({ left: '-1000vw' }, 'slow');



$(function() {
  
  
    function loop(){
     $('.bi')
       .animate({marginTop:10},900)
       .animate({marginTop:20},900, loop);
    }
    
    loop();
  
  
  }); 

  function wait(){
    for(let i = 0; i < 2; i++){
        i.delay(1000);
        i++;
        if(i == 1){
            return true;
        }
    }
  }