// 캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);


let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;
<<<<<<< HEAD

=======
let gameOver = false; // true이면 게임 끝 , false이면 안끝남

let score = 0;
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
// 우주선 좌표
let spaceshipX = canvas.width/2 - 30;
let spaceshipY = canvas.height-60;

<<<<<<< HEAD
=======

>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
let bulletList = []; // 총알들을 저장하는 리스트
function Bullet(){
    this.x=0;
    this.y=0;
    this.init=function(){
        this.x=spaceshipX+19;
        this.y=spaceshipY;
<<<<<<< HEAD

=======
        this.alive=true; // true면 살아있는 총알 false면 죽은 총알
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
        bulletList.push(this);
    };
    this.update = function(){
        this.y -= 7;
    };
<<<<<<< HEAD
}
=======

    this.checkHit = function(){
        // 총알.y <= 적군.y And 
        // 총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 넓이 
        for(let i=0; i<enemyList.length; i++){
            if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <=enemyList[i].x + 40){
                // 총알이 죽게됨 우주선이 없어짐, 점수 획득
                score++;
                this.alive = false // 죽은총알
                enemyList.splice(i,1);
            }

        }
    };
}


function generateRandomValue(min, max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min;
    return randomNum;
}

let enemyList = [];
function Enemy(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x=generateRandomValue(0, canvas.width-48);
        this.y=0;
        enemyList.push(this);
    };
    this.update = function(){
        this.y += 2;

        if(this.y >= canvas.height-48){
            gameOver = true;
            // console.log("gameover");
        }
    };
}

>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
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
<<<<<<< HEAD
        // console.log("키다운 객체에 들어간 값은 ?" , keysDown);
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];

        if(event.keyCode == 32){
            createBullet(); // 총알 생성
        }
        // console.log("버튼클릭후", keysDown);
    });
=======
        console.log("키다운 객체에 들어간 값은 ?" , keysDown);
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];
        
        if(event.keyCode == 32){
            createBullet(); // 총알 생성
        }
        console.log("버튼클릭후", keysDown);
    });
    
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
}

function createBullet(){
    let b = new Bullet();
    b.init();
    console.log("새로운 총알 리스트", bulletList);
}

<<<<<<< HEAD
=======
function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy();
        e.init();
    },500);

}

>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
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

    // 총알의 y좌표 업데이트 하는 함수 포출
    for(let i=0; i<bulletList.length; i++){
<<<<<<< HEAD
        bulletList[i].update();
=======
        if(bulletList[i].alive){
            bulletList[i].update();
            bulletList[i].checkHit();
        }
    }

    for(let i=0; i<enemyList.length; i++){
        enemyList[i].update();
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage,spaceshipX,spaceshipY);
<<<<<<< HEAD

    for(let i=0; i<bulletList.length; i++){
        ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y);
=======
    ctx.fillText(`Score:${score}`, 20, 20);
    ctx.fillStyle ="white";
    ctx.font ="20px Arial";

    for(let i=0; i<bulletList.length; i++){
        if(bulletList[i].alive){
            ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y);
        }
    }

    for(let i=0; i<enemyList.length; i++){
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
    }

    for(let i=0; i<enemyList.length; i++){
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
    }
}

function main(){
<<<<<<< HEAD
    update();  // 좌표값을 업데이트하고
    render();  // 그려주고
    requestAnimationFrame(main);
=======
    if(!gameOver){
        update();  // 좌표값을 업데이트하고
        render();  // 그려주고
        requestAnimationFrame(main);
    } else {
        ctx.drawImage(gameOverImage, 10,100,380,380);
    }
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
}

loadImage();
setupKeyboardListener();
<<<<<<< HEAD
=======
createEnemy();
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
main();

// 방향키를 누르면
// 우주선의 xy 좌표가 바뀌고
// 다시 render를 그려준다.

// 총알 만들기
// 1. 스페이스바를 누르면 총알 발사
// 2. 총알이 발사 = 총알의 y값이 -- , 총알의 x값은? 스페이스를 누른 순간의 우주선의 x좌표
// 3. 발사된 총알들은 총알배열에 저장을 한다
// 4. 모든 총알들은 x,y좌표값이 있어야 한다
// 5. 총알 배열을 가지고 render 그려준다

// 적군 만들기
<<<<<<< HEAD
// x,y, init, update
// 적군은 위치가 랜덤하다
// 적군은 밑으로 내려온다
// 1초마다 하나씩 적군이 나온다
// 적군의 우주선이 바닥에 닿으면 게임 오버
// 적군과 총알이 만나면 우주선이 사라진다 점수 1점획득
=======
// x,y , init , update
// 1. 적군의 위치가 랜덤하다
// 2. 적군은 밑으로 내려온다
// 3. 1초마다 하나씩 적군이 나온다
// 4. 적군의 우주선이 바닥에 닿으면 GameOver
// 5. 적군과 총알이 만나면 우주선이 사라진다 점수 1점획득

// 적군이 죽는다
// 총알이 적군에게 닿는다
// 총알.y <= 적군.y And 
// 총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 넓이 
// => 닿았다 =>총알이 죽게도미 적군의 우주선이 죽게됨 점수획득
>>>>>>> 4ac3c02a08da31f15c41bf45c72f4fba2a586a04
