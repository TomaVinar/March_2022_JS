// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.createElement('div');
let button = document.createElement('button');

text.innerText = 'Ghost header';
button.innerText = 'Hide';

button.addEventListener('click', function (e) {
    e.preventDefault();
    text.style.visibility = 'hidden';
    // text.style.display = 'none';
})

document.body.append(text, button);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageInput = document.createElement('input');
let buttonInput = document.createElement('button');
let container = document.createElement('div');

ageInput.setAttribute('name', 'age');
ageInput.setAttribute('type', 'number');

buttonInput.innerText = 'Check the age'

buttonInput.addEventListener('click', function (e) {
    e.preventDefault();
    if (ageInput.value < '18') {
        alert("Your age is less than 18");
    }
});

container.append(ageInput, buttonInput);
document.body.append(container);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let firstForm = document.createElement('form');
let inputFirst = document.createElement('input');
let inputFirst1 = document.createElement('input');

let secondForm = document.createElement('form');
let inputSecond = document.createElement('input');
let inputSecond1 = document.createElement('input');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let container1 = document.createElement('div');
let container2 = document.createElement('div');

firstForm.setAttribute('name', 'formFirst');
inputFirst.setAttribute('name', 'firstInput1');
inputFirst.setAttribute('type', 'text');
inputFirst1.setAttribute('name', 'firstInput2');
inputFirst1.setAttribute('type', 'text');
secondForm.setAttribute('name', 'formSecond');
inputSecond.setAttribute('name', 'secondInput1');
inputSecond.setAttribute('type', 'text');
inputSecond1.setAttribute('name', 'secondInput2');
inputSecond1.setAttribute('type', 'text');

button1.innerText = 'Confirm form 1';
button2.innerText = 'Confirm form 2';

container1.style.margin = '40px 0 40px 0';

firstForm.append(inputFirst, inputFirst1);
secondForm.append(inputSecond, inputSecond1);
container1.append(firstForm, button1);
container2.append(secondForm, button2);
document.body.append(container1, container2);

button1.addEventListener('click', function (e) {
    console.log(firstForm.firstInput1.value);
    console.log(firstForm.firstInput2.value);
});

button2.addEventListener('click', function (e) {
    console.log(secondForm.secondInput1.value);
    console.log(secondForm.secondInput2.value);
});

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let mainButton = document.createElement('button');
let block = document.createElement('div');

input1.setAttribute('name', 'rows');
input2.setAttribute('name', 'columns');
input3.setAttribute('name', 'quantity');
input1.setAttribute('type', 'number');
input2.setAttribute('type', 'number');
input3.setAttribute('type', 'text');

mainButton.innerText = 'Add table';
block.style.marginTop = '80px';

block.append(input1, input2, input3, mainButton);
document.body.appendChild(block);

mainButton.addEventListener('click', function (e) {
    const rows = input1.value;
    const columns = input2.value;
    const text = input3.value;

    function createTable(tr, td, innerText) {
        const table = document.createElement('table');
        document.body.append(table);

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');
            table.append(tr);
            for (let j = 0; j < columns; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`;
                tr.append(td);
                document.body.append(table);
            }
        }
    }
    createTable(rows, columns, text);
});




