// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const content = document.getElementById('content');
console.log(content.textContent);

// -- отримує текст з блоку з id "rules"

const rules = document.getElementById('rules');
console.log(rules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Please note that for ECMAScript Edition 4 the Ecma standard number “ECMA-262 Edition 4” was ' +
    'reserved but not used in the Ecma publication process. Therefore “ECMA-262 Edition 4” as an Ecma International ' +
    'publication does not exist.';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'JavaScript (JS) — динамічна, обєктно-орієнтована[4] прототипна мова програмування. Реалізація ' +
    'стандарту ECMAScript. ';

// -- змініть кожному елементу колір фону на червоний

content.style.background = 'red';
rules.style.background = 'red';

// const list = document.getElementsByTagName('li');
//
// for (let i = 0; i < list.length; i++) {
//     const listElement = list[i];
//     listElement.style.background = 'red';
//     listElement.style.color = 'blue';
// }
// кожному елемнету зрозуміла як кожному в документі, тому про всяк випадок написала ще такий код як вище)

// -- змініть кожному елементу колір тексту на синій

content.style.color = 'blue';
rules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const listRules = document.getElementsByClassName('fc_rules');

for (let i = 0; i < listRules.length; i++) {
    const listRule = listRules[i];
    listRule.style.color = 'red';
}