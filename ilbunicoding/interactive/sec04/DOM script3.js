const pElem = document.createElement('p');
pElem.innerHTML = '<a href="#">안녕</a>???';
pElem

const charactersElem = document.querySelector('.characters');
charactersElem.appendChild(pElem);
charactersElem.removeChild(document.querySelector('.b'));

// 클래스 붙이는것
const ilbuni = document.querySelector('.ilbuni');
ilbuni.classList.add('special');
