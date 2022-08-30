/* 객체 속성 동적으로 삭제하기 
객체 속성에 접근할 때 앞에 delete 키워드를 명시하면 해당 속성이 삭제된다. */
const person = {
    name: "Gildong"
};
delete person.name; // 또는 delete person["name"];
console.log(person);

/* 깊은 복사와 얕은 복사 */
var num = 10;
var num2 = num;
var num = 15;
console.log(num);
console.log(num2);  // num2는 깊은복사가 됨 (참조가 아니라 값 자체가 복사됨)

const person2 = {
    name: "Hyunwoo"
};
const copyPerson = person2;
person2.name = "Jihyun";
console.log(person2.name);
console.log(copyPerson.name);  // copyPerson은 얕은복사가 됨 (객체의 메모리의 주소값을 복사하기 때문에 두 변수는 같은 주소 값을 바라본다)

