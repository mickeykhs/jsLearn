
const item = document.querySelector('.item');

const tl = gsap.timeline({paused:true});
tl.to('.dash',{opacity:1,x:-5,backgroundColor:'yellow'})
tl.to('.text',{x:5,color:'#fff'},'<')

item.addEventListener('mouseenter',function(){ tl.play() })
item.addEventListener('mouseleave',function(){ tl.reverse() })







