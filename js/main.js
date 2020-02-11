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
    
    // toggle active class in nav links
    $('.nav-link').on('click',function(){
//         $(this).parent('li').parent('ul').children('li').each(function(i,element){
//             element.children('a').removeClass('active');
//         });
//             $(this).addClass('active');
        $('.nav-link').each(function(){
            $(this).removeClass('active');
        }).
        $(this).addClass('active');
    });
    
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
        if($(this).scrollTop() >= 1450){
            let el = $('.company .statistics .counter-up');
            el.each(function(){
                counterUp($(this),$(this).data('max'),$(this).data('delay'))
                $(this).removeClass('counter-up');
            })
            
            // window.alert("this is fine scroll");
        }
    })
    // start servive section
    $('.choose-us .sec > li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.choose-us .feature').each(function(){
            $(this).removeClass('show')
        })

        let feat = $(this).data('class');
        console.log(`.choose-us ${feat}`);
        $(`.choose-us ${feat}`).addClass('show');
        
    })



    // initiate animation using AOS library
    AOS.init({
        once:true
    });
    // start owl carsoul
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        items:1,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        dots:true,
        dotsEach:true,
        center:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
})
