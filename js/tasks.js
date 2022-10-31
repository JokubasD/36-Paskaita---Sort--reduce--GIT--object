'use strict';
console.log('tasks.js');
//Task 1 and 2
const numbers =  [5, 10, 1, 50, 12];
crEl('p', 'paragraph', numbers.join(', '), document.body)

const htmlEls = {
    paragraph: document.querySelector('.paragraph'),
    btn1: document.getElementById('btn1'),
}
console.log(htmlEls.listValues)
htmlEls.paragraph.addEventListener('click', () => {
    numbers.sort((a,b) => a-b)
    htmlEls.paragraph.textContent = numbers.join(', ')
})
//Task 3
const colors = ['red', 'green', 'blue', 'yellow'];
crEl('ol', 'orderedList', null, document.body)
colors.forEach((item) => {
    crEl('li', null, item, document.querySelector('.orderedList'))
})
//Task 4

htmlEls.btn1.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('JS is in control')

    const listValues = document.querySelectorAll('.orderedList > li')
    const sortedArray = colors.sort()
    sortedArray.forEach((value, index) => {
        listValues[index].textContent = value
    })
})


//Helper functions

function crEl(tagName, givenClass, text, destination){
    const El = document.createElement(tagName);
    if (givenClass) El.className = givenClass;
    if (text) El.textContent = text;
    destination.append(El);
    return El;
}