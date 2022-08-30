const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


let re = /apples/gi;
let str = 'Apples are round, and apples are juicy';
let newStr = str.replace(re,'Oranges');
console.log(newStr);

