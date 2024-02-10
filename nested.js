const college = {
    name : 'FCI',
    class : ['11', '12', '13'],
    events : ['science fair', 'bijoy dibosh', '21 feb'],
    unique : {
        color : "blue",
        result : {
            gpa : 5,
            info : {
                marks : 100,
                grade : 'A'
            }
        }
    }
}

console.log(college.unique);
console.log(college.unique.result.gpa);