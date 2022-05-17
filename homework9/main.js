// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
const divBlock = document.createElement('div');
divBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
divBlock.style.background = 'gold';
divBlock.style.color = 'red';
divBlock.style.fontSize = '42px';
divBlock.innerText = 'Main header';

const newDiv = divBlock.cloneNode(true);

document.body.append(divBlock, newDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

const menu = document.getElementsByTagName('ul');

let array = ['Main','Products','About us','Contacts'];

for (const arrayItem of array) {
    let listItem = document.createElement('li');
    listItem.innerText = arrayItem;
    for (const menuItem of menu) {
       menuItem.append(arrayItem);
    }
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const divItem = document.createElement('div');
//
//     divItem.innerText = coursesAndDurationArrayElement.title + coursesAndDurationArrayElement.monthDuration ;
//     document.body.append(divItem);
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayItem of coursesAndDurationArray) {
    const itemBlock = document.createElement('div');
    const header = document.createElement('h1');
    const description = document.createElement('p');

    itemBlock.classList.add('item');
    header.classList.add('heading');
    description.classList.add('description');

    header.innerText = coursesAndDurationArrayItem.title;
    description.innerText = coursesAndDurationArrayItem.monthDuration;

    itemBlock.append(header, description);
    document.body.append(itemBlock);
}