'use strict';
console.log('reduce.js');

const nums = [5, 10, 1, 50, 12]

nums.reduce((total, value, index) => {
    console.log('total ===', total);
    console.log('value ===', value);
    console.log('index ===', index);
    return total + value
})

{
    let total = 0
    nums.forEach((sk,i,arr) => {
        total += sk
    })
    const avgReduce = nums.reduce((total, sk, i, arr) => total + sk/nums.length, 0)
    console.log('avgReduce ===', avgReduce);
}
let maxNum = nums.reduce((max, sk) => {
    if (max < sk){
        return sk
    } else {
        return max
    }
})
console.log('maxNum ===', maxNum);

{
    // generate a html list from an array
}
const colors = ['red', 'green', 'blue', 'yellow'];


const colEl = document.getElementById('colors');

const htmlString = colors.reduce((acc, color) => acc + `<li>${color}</li>`, '')
console.log('htmlString  ===', htmlString );