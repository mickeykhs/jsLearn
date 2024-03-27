

// gsap.defaults({ 설정 }) 이런식으로 사용하게 되면 다른 트윈을 만들었을 때 다른 트윈도 적용되어 위험
// 아래와 같은 방식으로 해당 타임라인에만 defaults 를 걸어 tl 에만 걸리도록 해주자.
const tl = gsap.timeline({
    defaults:{
        opacity:0,
        duration:0.8,
        ease:'back'
    }
});


// 애니메이션이 시작되기 전 처음 화면에서 전체화면이 나올수 있음
// autoAlpha : 0 으로 설정해주면 opacity: 1로 변하고 visibility의 값도 초기화 해준다.
tl.from('.stage',{ease:'linear',autoAlpha:0});
tl.from('.stage h1', {x:-50,duration:0.3});
tl.from('.stage h2', {x:50,duration:0.3},'<');
tl.from('.stage p', {y:50},'-=0.2');
tl.from('.stage button', {y:50},'-=0.4');
tl.from('.planet > img', {scale:0,stagger:0.1},'-=0.5');



