
const items = document.querySelectorAll('.item');
console.log(items);

// gsap의 모든 애니메이션의 duration을 설정하는법
gsap.defaults({duration:0.3})

items.forEach((item) => {
    const tl = gsap.timeline({paused:true});
    tl.to(item.querySelector('.text'),{x:5,color:'#fff',x:15});
    tl.to(item.querySelector('.dash'),{opacity:1,x:-5,backgroundColor:'yellow'},'<');
    item.addEventListener('mouseenter',function(){ tl.play() })
    item.addEventListener('mouseleave',function(){ tl.reverse() })
})








