const sentence = 'I am learning web dev.';
// const result = ''



// let reverse = '';
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
//console.log(reverse); // .ved bew gninrael ma I

// let rev = '';
// for(let i = 0; i < sentence.length; i++){
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);

const reserved = sentence.split('').reverse().join('');

console.log(reserved);