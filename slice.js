const address = 'Malipur';
const part = address.slice(4, 7);
//console.log(part); // output : pur


const sentence = 'I am a good and hard working person';

// const array = sentence.split(' ');


const array = sentence.split('a');

const friendStr = 'Rahim, fahim, washim, shihab';
const friends = friendStr.split(',');


console.log(friends);

const realFriend = ['Rahim', 'fahim', 'washim', 'shihab' ];
console.log(realFriend.join(''));
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));