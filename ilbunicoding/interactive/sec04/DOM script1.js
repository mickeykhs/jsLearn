/* DOM(Document Object Model)
하나의 예로 노드 구조를 봐보자
 html -> head , body
   head -> title, meta
   body -> header, section, section
      section -> p, p, p .....

여기서 <body> , <section>, <title> ...등 하나의 태그들은 다 객체로 보겠다(Object)
그 안의 클래스라던지 id라던지 텍스트라던지 다 오브젝트로 본다
*/
const ilbuni = document.querySelector('.a');
// querySelector -> 여러개의 클래스가 있더라도 맨앞에 한개만 가져온다
// querySelectorAll -> 유사 배열 , 배열처럼 사용하면 된다
