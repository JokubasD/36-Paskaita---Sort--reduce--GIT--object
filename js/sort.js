'use strict';
console.log('sort.js');

const words = ['z', 'a', 'm', 'h']
const nums = [5, 10, 1, 50, 12]
console.log(' words ===',  words);
console.log('nums ===', nums);

// words from a-z
console.log('words.sort() ===', words.sort());
console.log('words.reverse() ===', words.reverse());

//numbers in increasing order
// nums.sort((a, b) => a - b)


nums.sort((a, b) => {
    const difference = a - b
    if (difference > 0){
        return 1;
    } else if (difference < 0){
        return -1;
    } else if (difference === 0){
        return 0;
    }
})
console.log('nums ===', nums);

