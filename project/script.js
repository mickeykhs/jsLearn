// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);


let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;

// 우주선 좌표
let spaceshipX = canvas.width/2 - 30;
let spaceshipY = canvas.height-60;


function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/background.gif";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";
}

let keysDown={};
function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;
        console.log("키다운 객체에 들어간 값은 ?" , keysDown);
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];
        console.log("버튼클릭후", keysDown);
    });
}

function update(){
    if(39 in keysDown){
        spaceshipX += 5;  // 우주선의 속도 
    } // right
    if(37 in keysDown){
        spaceshipX -= 5;
    } // left

    // 우주선의 좌표값이 무한대로 업데이트가 되는 것이 아닌! 경기장 안에서만 있게 하려면?!
    if(spaceshipX <=0){
        spaceshipX =0;
    }
    if(spaceshipX >=canvas.width-60){
        spaceshipX = canvas.width-60;
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage,spaceshipX,spaceshipY);
}

function main(){
    update();  // 좌표값을 업데이트하고
    render();  // 그려주고
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();

// 방향키를 누르면
// 우주선의 xy 좌표가 바뀌고
// 다시 render를 그려준다.

