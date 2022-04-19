// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = prompt('Введіть довільне число')
//
// if (x > 0) {
//     document.write(`Вірно!`);
// }
// else {
// document.write(`Невірно!`)
// }
//

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Ведіть хвилини для визначення чверті від 0 до 59')
//
// if (time >= 0 && time <= 15) {
//     document.write(`Це перша чверть!`)
// }
// if (time <= 16 && time >= 30) {
//     document.write(`Це друга чверть!`)
// }
// if (time >= 31 && time <= 45) {
//     document.write(`Це третя чверть!`)
// }
// if (time >= 46 && time <= 59) {
//     document.write(`Це четверта чверть!`)
// }else  {
//     document.write(`Ви ввели неправильне число`)
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let a = prompt(`Ввeдіть число від 1 до 31, щоб визначити декаду місця`);
//
// if (a <= 10) {
//     document.write(`Перша декада`);
// }
// if (a >= 10 && a <= 20) {
//     document.write(`Друга декада`);
// }
// if (a >= 20 && a <= 31) {
//     document.write(`Третя декада`);
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt(`Введіть порядковий номер дня тижня від 1 до 7`);
//
// switch (day) {
//     case 1:
//         document.write(`Monday`);
//         break
//     case 2:
//         document.write(`Tuesday`);
//         break;
//     case 3:
//         document.write(`Wednesday`);
//         break;
//     case 4:
//         document.write(`Thursday`);
//         break;
//     case 5:
//         document.write(`Friday`);
//         break;
//     case 6:
//         document.write(`Saturday`);
//         break;
//     case 7:
//         document.write(`Sunday`);
//         break;
//     default:
//         console.log('Something went wrong');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('Enter first number');

let num2 = prompt('Enter second number');

if (num1 > num2) {
    document.write(`First number is bigger!`);
}
if (num2 > num1) {
    document.write(`Second number is bigger!`);
}
if (num1 === num2) {
    document.write(`Numbers are equal`);
}