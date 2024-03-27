(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x : 0 , y : 0 };
    let maxScrollValue;
                        
    

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
        /*                      화면의 전체 높이     -   현재화면의 높이(스크롤바의 양)    */
    }

    window.addEventListener('scroll', function(){
        const scrollPer = pageYOffset/maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        // progress bar
        barElem.style.width = scrollPer * 100 + '%';

    });

    window.addEventListener('mousemove', function(e){
        // 마우스 위치를 가운데로 원점으로 잡기위한 공식
        mousePos.x = -1 + (e.clientX / window.innerWidth)*2;
        mousePos.y = 1 - (e.clientY / window.innerHeight)*2; 
        // console.log(mousePos);
        stageElem.style.transform = 'rotateX(' + (mousePos.y*7) + 'deg) rotateY(' + (mousePos.x*7) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    // resize 기억해두자!! 화면이 변경될때 많이 사용함.

})();
