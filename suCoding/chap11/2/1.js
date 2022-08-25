/* 대괄호 연산자로 객체 접근하기 */
const person = {
    name: "Hong Gil dong",
    age: 20
};
console.log(person["name"]);  // Hong Gil dong

const person2 = {
    name:{
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "Hello";
    }
};
console.log(person2["name"]["firstName"]);
console.log(person2["likes"][1]);
console.log(person2["printHello"]());

/* dot(.)을 이용하여 객체 접근하기 */

const person3 = {
    name:{
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "Hello";
    }
};
console.log(person3.name.firstName);
console.log(person3.likes[0]);
console.log(person3.printHello());

/* key값에 공백이 있다면 "" 로 감싸줘야한다. 이때는 dot연산자를 이용해 객체에 접근할수 없다.
   따라서 대괄호 연산자로만 접근가능 */