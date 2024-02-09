const school = 'RAJ UK uttara Model School';


console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


// uppercase letters = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// lowercase letters = abcdefghijklmnopqrstuvwxyz

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book ');
}
else{
    console.log('I am not reading book');
}

const drink = 'Water   ';
const liquid = '    Water    ';

if(drink.trim === liquid.trim){
    console.log('You got the Water');
}
else{
    console.log('You did not get the Water');
}