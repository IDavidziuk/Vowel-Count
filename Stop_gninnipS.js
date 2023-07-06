function spinWords(string){
const wordsArr = string.split(' ');
 return wordsArr.map((el) => {
return  el.length > 4 ?el.split('').reverse().join('') : el
 })
}