const numbers = [4,6,7,445,454];
const nums = [5,4,5,6,77,65,2]
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2; 
//     doubled.push(double)
// }

function doubleIT(num){
    return num*2;  
}
const result = numbers.map(doubleIT)
console.log(result);


// another way
const double2 = n =>n*2;
const output = nums.map(double2);
console.log(output);

// another way 

const numbers2 = [4,6,3,2,6,7,74];
const double3 = numbers2.map(num => num*2);
console.log(double3);



