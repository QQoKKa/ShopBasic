$('document').ready(function() {
    $('#backup').css('cursor', 'pointer');
    $('.moreproducts').css('cursor', 'pointer');
})

$('.moreproducts').click(function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
}); 

$('#backup').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

$('.sitechange').mouseover(function() {
    $(this).css('cursor', 'pointer');
});

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

$('.contact').click(function() {
    $('.contactset').css('visibility', 'hidden');
    $('.moreproducts').css('visibility', 'hidden');
    //set image to .backgroundimage
    $('body').css('background-image', 'url(/images/bg6.png)');
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-position', 'center');
    $('.comebackbutton').css('visibility', 'visible');
    $('.trademark').css('visibility', 'visible');
})

$('.comebackbutton').mouseover(function() {
    $(this).css('cursor', 'pointer');
})

$('.basketicon').mouseover(function() {
    $(this).css('cursor', 'pointer');
})

$('.comebackbutton').click(function() {
    window.location.href = "index.html";
})

$(function() {
    function loop(){
     $('.bi')
       .animate({marginTop:10},900)
       .animate({marginTop:20},900, loop);
    }
    loop();
  }); 

