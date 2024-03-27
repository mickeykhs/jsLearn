const button = document.querySelector('.button');

let pulse = gsap.to(button,{scale:1,duration:0.4,repeat:-1,yoyo:true,paused:true});


button.addEventListener('mouseenter',function(){
    pulse.restart();
});

button.addEventListener('mouseleave',() => {
    pulse.pause();
    gsap.to(button,{scale:0.8,duration:0.4})
});


