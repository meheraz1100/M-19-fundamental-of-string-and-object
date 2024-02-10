const college = {
    name : 'FCI',
    class : ['11', '12', '13'],
    events : ['science fair', 'bijoy dibosh', '21 feb'],
    unique : {
        color : "blue",
        result : {
            gpa : 5,
            merit : 'top'
        }
    }
}

// console.log(college.unique);
// console.log(college.unique.result.gpa);

// update merit
college['unique'].result.merit = 'top notch';
console.log(college.unique.result.merit);

// update events
college.events[1] = '16 december';
console.log(college.events[1]);

// delete class 
delete college.class;
console.log(college);