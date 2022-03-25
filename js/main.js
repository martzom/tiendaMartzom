$(document).ready(function(){
    //cambio de firo
    $(window).on('scroll', function(){
        let posicion =$('#pr').offset();
        if ($(window).scrollTop() >= posicion.top){
            $('header').removeClass('transparente');
        }else{
            $('header').addClass('transparente');
        }
    })
    //hamburgeusa
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    //smooth scrol
    $('a').on('click', function(){
        if(this.has !== ''){
            let hash= this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000)
        }
    })

})