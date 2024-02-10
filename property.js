const person = {
    name : 'Meheraz',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['bandarban', 'saintmartin', 'kuakata']
}

// console.log(person);
// dot notation
// const income = person.salary;
// console.log(income);


//bracket notation
// console.log(person['age']);
const income = person['salary'];
// console.log(income);

const favPlace = person['fav places'];
console.log(favPlace);