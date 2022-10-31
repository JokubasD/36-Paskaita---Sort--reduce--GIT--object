'use strict';
console.log('simpleSort.js');

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

console.table(users)


// sorted by increasing age
// users.sort((a,b) => a.age - b.age)
// console.table(users)


// sorted by decreasing age
// users.sort((a,b) => b.age - a.age)
// console.table(users)

//sorted by town
users.sort((a, b) => (a.town > b.town ? 1 : -1))
console.table(users)

users.sort((a,b) => a.gender.localeCompare(b.gender))
console.table(users)

//Task 1.1
users.sort((a,b) => (a.name > b.name ? 1 : -1))
console.table(users)

//Task 1.2
users.sort((a,b) => (a.name < b.name ? 1 : -1))
console.table(users)