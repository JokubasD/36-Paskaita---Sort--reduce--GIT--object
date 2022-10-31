'use strict';
console.log('arrObjReduce.js');


const users = [
    {
        name: 'James',
        age: 65,
        gender: 'male',
        town: 'London'
    },
    {
        name: 'Jane',
        age: 27,
        gender: 'female',
        town: 'Kaunas'
    },
    {
        name: 'Mike',
        age: 35,
        gender: 'male',
        town: 'Kaunas'
    },
    {
        name: 'June',
        age: 47,
        gender: 'female',
        town: 'London'
    }
]

const usersAvg = users.reduce((total, userObj, index, arr) => {
    return total + (userObj.age / users.length)
}, 0)
console.log('usersAvg ===', usersAvg);
// const ages = users.map((uObj) => uObj.age).reduce((avg,value) => avg + value/users.length, 0)
const ages = users.map(({age}) => age).reduce((avg,value) => avg + value/users.length, 0)
console.log('ages ===', ages);