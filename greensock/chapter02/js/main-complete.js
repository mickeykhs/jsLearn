window.addEventListener('DOMContentLoaded', function () {






  let tl = gsap.timeline();

  tl.from('#page-1',{opacity:0})
  tl.from('.green_right',{x:30,y:30,opacity:0},0)
  tl.from('.green_left',{y:30,opacity:0})
  tl.from('.blue02',{y:30,opacity:0},"<")
  tl.from('.blue01',{y:30,opacity:0},"<")
  
  tl.from('.flower_left',{x:-50,y:-50,opacity:0})
  tl.from('.flower_right',{x:50,y:30,opacity:0})
  
  tl.from('.bug',{y:30,opacity:0})
  tl.to('.bug',{y:30,repeat:-1,yoyo:true})
  
  tl.from('.grass01',{y:30,opacity:0},2)
  tl.to('.grass01',{duration:2,transformOrigin:"center bottom",rotation:-10,repeat:-1,yoyo:true,ease:"linear"})

  tl.from('.grass02',{y:30,opacity:0},2)
  
  tl.from('.main_title .text',{y:30,opacity:0})
  tl.from('.main_title .explore',{y:30,opacity:0},'+=0.5')
  tl.from('.cat',{y:-30,opacity:0},2)

  tl.from('.cloud-small',{duration:10,x:-530,opacity:0},0)
  tl.from('.cloud-big',{duration:10,x:-330,opacity:0},0)











})



