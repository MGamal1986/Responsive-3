$(function(){
    
    // preloader screen fadding
    setTimeout(()=>{
        $('div.loader').fadeOut();
    },2500);
    


    // fade in and out services section
    setInterval(function(){
        $('.slider .slider-item').each(function(){
            $(this).toggleClass('active')
        })
        $('.slider .dots span').each(function(){
            $(this).toggleClass('active')
        })
    },4000)

    // company section toggle actie class with click
    let counterUp = function(el,max,delay){
        let count = 0;
        let d = setInterval(()=>{
            count +=1;
            el.text(count);
            if(count >= max){
                clearInterval(d);
            }
        },delay)
        
    }
    $(window).on('scroll',function(){
        console.log($(this).scrollTop(),$('.company .statistics').offset().top)
        if($(this).scrollTop() >= 1450){
            let el = $('.company .statistics .counter-up');
            el.each(function(){
                counterUp($(this),$(this).data('max'),$(this).data('delay'))
                $(this).removeClass('counter-up');
            })
            
            // window.alert("this is fine scroll");
        }
    })

    // initiate animation using AOS library
    AOS.init({
        once:true
    });
})