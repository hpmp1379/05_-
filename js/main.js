// $(document).ready(function(){ //without defer attr in script tag
//     $('.header_in a').click(function(){
//         $(this).toggleClass('on');
//     })
// })

// add attr defer to <script> in html
$('.trigger').click(function(){
    $(this).toggleClass('on');
    $('nav').slideToggle(400);
})
$(window).resize(function(){
    let winW = $(window).width(); //브라우저의 가로길이를 변수에
    console.log(winW);

    if(winW >= 768 && $('nav').is(':hidden')){
        console.log('nav 안보여요!')
        $('nav').removeAttr('style');
    }
})