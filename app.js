$(document).ready(function(){
    
    $(".owl-carousel").owlCarousel({
 
        margin: 10,
        nav: false,
        dots: true,
        dotClass: 'owl-dot-mv',

        responsive: {
            600: {items:1},
            700: {items:2},
            1000: {items:4}

        }

    });

    const historyText = document.getElementById('historymenutext');
    const teamText = document.getElementById('teammenutext');
    const secondContainer = document.getElementById('historysection');
    const nav = document.querySelector('.navbar');
    const laMountainText = document.querySelector('.brandtext-container');
   

    ScrollTrigger.defaults({
        toggleActions: "play resume pause reset"
    });
    
    gsap.to([historyText,teamText], {
        scrollTrigger: {
            trigger: secondContainer,
            start: 'top 5%'            
        },
        color: '#414f6b'
    });

    gsap.to(nav, {
        scrollTrigger: {
            trigger: secondContainer,
            start: 'top 5%'         
        },
        backgroundColor: 'white'
    });

    gsap.to(laMountainText, {
        scrollTrigger: {
            trigger: secondContainer,
            start: 'top 5%'    
        },
        visibility: 'visible'
    });









  });


