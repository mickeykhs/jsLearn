/* 객체 속성 값 변경하기 
객체로 정의된 값을 바꾸고 싶다면 키로 속성에 접근해서 값을 재할당하면 된다.*/

const person = {
    name: "Hong Gildong"
};
person.name = "Kim";  // 또는 person["name"] = "Kim";
console.log(person.name);  // Kim


/* 객체 속성 동적으로 추가하기 */
const person2 = {}; // 빈 객체를 생성
person2.name = "Kim Hyunseok"; // 객체에 값 추가
console.log(person2.name);

const person3 = {};
person3.name = {
    firstName: "hyun",
    lastName: "seok"
};
person3.likes = ["apples", "samsung"];
person3.printHello = function(){
    return "Hello";
}
console.log(person3);
// 이와 같이 만들어진 객체에 나중에 속성을 추가하는 것을 속성을 동적으로 추가한다고 한다.