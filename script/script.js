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

$(function() {
  
  
    function loop(){
     $('.bi')
       .animate({marginTop:10},900)
       .animate({marginTop:20},900, loop);
    }
    
    loop();
  
  
  }); 