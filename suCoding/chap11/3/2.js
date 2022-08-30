/* 수학 연산을 다루는 Math 객체 */
/* 
Math.floor() : 내림
Math.ceil() : 올림
Math.round() : 반올림
Math.random() : 0이상 1미만의 난수
 */
const floatNum = 10.52;
Math.floor(floatNum); // 10
Math.ceil(floatNum);  // 11
Math.round(floatNum); // 11

/* 난수 구하기 */
function getMaxRandom(max){
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom);

function getMinMaxRandom(min, max){
    return Math.floor(Math.random()* (max-min) + min + 1);
}
const minmaxRandom = getMinMaxRandom(10,20);
console.log(minmaxRandom); // 10 이상 20 이하의 무작위 정수

/* 다음 배열의 요소 중 가장 큰 수를 출력하는 코드를 완성하세요 */
const arr = [10, 120, 30, 50, 20];
// 1. for문을 이용 값들을 비교하여 새로운 변수에 그 값을 넣어줌
function getMaxRan(){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        if(result<arr[i]){
            result = arr[i];
        }
    }
    return result;
}
const result = getMaxRan(arr);
console.log(result);
// 2. sort() 메서드를 사용 내림/올림 차순으로 정렬하여 뽑아온다
arr.sort(function(a,b){
    if(a < b) return 1;
    else if(a > b) return -1;
    else return 0;
})
const result2 = arr.shift();
console.log(result2);
