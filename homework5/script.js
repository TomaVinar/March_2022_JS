// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// let num = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += arr[i];
//     }
//     let result = sum / array.length;
//     document.write(`<div>${result}</div>`)
// }
//
// num(array);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let newArr = (...arguments) => {
//     let minNum = arguments[0];
//     let maxNum = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         const arg = arguments[i];
//         if (minNum < arguments[i]) {
//             maxNum = arguments[i];
//         }
//         else minNum = arguments[i];
//     }
//     console.log(minNum);
//     console.log(maxNum);
//     return minNum;
// }
//
// newArr(1, 2, 3, 4, 5, 6, 7, 8, 9);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrayNums = () => {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//         arr[arr.length] = Math.round(Math.random() * 100)
//     }
//     document.write(`<div>${arr}</div>`);
// }
//
// arrayNums();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let newArray = (limit) => {
//     let mas1 = [];
//     for (let i = 0; i < 10; i++) {
//         mas1[mas1.length] = Math.round(Math.random() * limit);
//     }
//     document.write(`<div>${mas1}</div>`);
// }
//
// newArray(200);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [100, 200, 300, 400, 500, 600];
//
// let xxx = (arr) => {
//     let newArr = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         const num = array[i];
//         newArr.push(num);
//     }
//     document.write(`<div>${newArr}</div>`);
// }
//
// xxx();

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let s = (a, b) => (a + b) * 2;
//
// s(5, 7);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let sCircle = (r) => Math.PI * r * 2;
//
// sCircle(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let square = (h, r) => 2 * Math.PI * r(h + r);
//
// square(5, 9);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1000, 2000, 3000, 4000, 5000];
//
// let nums = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement}</div>`)
//     }
// }
//
// nums(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}

paragraph('У геометрії, площа, що замикає коло радіусом r дорівнює π r2. У цій формулі грецька літера π є ' +
    'математичною сталою, що приблизно дорівнює числу 3,14159…, і яке дорівнює відношенню довжини окружності кола до ' +
    'його діаметра.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write(`<ul>`);
let listItems = (list) => {
    for (let i = 0; i <= 2; i++) {
        document.write(`<li>${list}</li>`);
    }
}
document.write(`</ul>`);

listItems('Item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write(`<ul>`);
let newList = (item, limit) => {
    for (let i = 0; i <= limit; i++) {
        document.write(`<li>${item}</li>`);
    }
}
document.write(`</ul>`);

newList('Одним із методів отримання цієї формули', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [true, false, 'Hello', 'string', 123, 6443, 1234, 'name', 0];
//
// document.write(`<ol>`);
//
// let newItems = (items) => {
//     for (let i = 0; i < items.length; i++) {
//         document.write(`<li>${items[i]}</li>`);
//     }
// }
// document.write(`</ol>`);
//
// newItems(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: 'Ivan',
        age: 32
    },
    {
        id: 2,
        name: 'Vasyl',
        age: 23
    },
    {
        id: 3,
        name: 'Oksana',
        age: 28
    }
]

let user = (array) => {
    for (const person of array) {
        document.write(`<div>Id: ${person.id} - ${person.name} ${person.age}</div>`);
    }
}

user(users);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
//
// let foo = (arr) => {
//     let numMax = arr[0];
//     let numMin = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if (numMax > arr[i]) {
//             numMin = arr[i];
//         }
//         else numMax = arr[i];
//     }
//     return numMin;
// }
//
// foo(numbers);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = (arr) => {
//     let summary = 0;
//     for (let i = 0; i < arr.length; i++) {
//         summary+=arr[i];
//     }
//     return summary;
// }
//
// sum(mas);

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

let customers = [
    {
        id: 1,
        name: 'Tetyana',
        age: 25,
        city: 'Lviv'
    },
    {
        id: 2,
        name: 'Oleksandr',
        age: 30,
        city: 'Kyiv'
    }
];

let newListIfCustomers = (array) => {
    let newCustomers = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newCustomers.push(array[i]);
    }
    return newCustomers;
}

newListIfCustomers(customers);