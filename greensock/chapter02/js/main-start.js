window.addEventListener('DOMContentLoaded', function () {
    const tl = gsap.timeline();

    tl.from('#page-1',{opacity:0})
    tl.from('.green_right',{opacity:0,x:100,y:100,ease:Power3.easeOut})
    tl.from('.green_left',{duration:1,opacity:0,y:100,ease:Power3.easeIn})
    tl.from('.blue02',{duration:1,y:30,opacity:0},'<')
    tl.from('.blue01',{duration:1,y:30,opacity:0},"+=1")
  
    tl.from('.flower_left',{x:-50,y:-50,opacity:0,ease:Bounce.easeOut})
    tl.from('.flower_right',{x:50,y:30,opacity:0})
    tl.from('.bug',{y:30,opacity:0})
    tl.to('.bug',{y:30,repeat:-1,yoyo:true})
    
    tl.from('.grass01',{duration:1,y:30,opacity:0},2)
    tl.to('.grass01',{duration:2,transformOrigin:"center bottom",rotation:-10,repeat:-1,yoyo:true,ease:"linear"})

    tl.from('.grass02',{duration:1,y:30,opacity:0},2)
    
    tl.from('.main_title .text',{y:50,opacity:0})
    tl.from('.main_title .explore',{y:50,opacity:0},'+=0.5')
    tl.from('.cat',{y:-30,opacity:0},2)

    tl.from('.cloud-small',{duration:10,x:-530,opacity:0},0)
    tl.from('.cloud-big',{duration:10,x:-330,opacity:0},0)






})