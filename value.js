const person = {
    name : 'Meheraz',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['bandarban', 'saintmartin', 'kuakata']
}

//update salary
person.salary = 30000;
// update age
person['age'] = 26;
// update fav places
person['fav places'] = ['maldives', 'bali', 'pataya'];
// console.log(person);

const proFName = 'profession';
person[proFName] = 'devops';
console.log(person);