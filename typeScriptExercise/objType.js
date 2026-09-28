"use strict";
let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true
};
let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false
};
function solution(number) {
    if (number < 0)
        return 0;
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(solution(10));
