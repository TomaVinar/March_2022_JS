// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header



// b) робить шириниу елементу ul 400px

let listEl = document.getElementsByTagName('ul');

for (let i = 0; i < listEl.length; i++) {
    const listElElement = listEl[i];
    listElElement.style.width = '400px'

}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');

for (let i = 0; i < linkList.length; i++) {
    const linkListElement = linkList[i];
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

const singleItem = document.getElementsByClassName('listElement2');

for (let i = 0; i < singleItem.length; i++) {
    const singleItemElement = singleItem[i];
    console.log(singleItemElement.textContent);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    const liElement = li[i];
    liElement.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

const el = document.getElementsByTagName('a');

for (let i = 0; i < el.length; i++) {
    const elElement = el[i];
    elElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

const  aEl = document.getElementsByTagName('a');

for (let i = 0; i < aEl.length; i++) {
    const aElElement = aEl[i];
    if (aElElement.textContent === 'link3') {
        aElElement.style.fontSize = '40px';
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const single = document.getElementsByTagName('a');

for (let i = 0; i < single.length; i++) {
    const singleElement = single[i];
    singleElement.classList.add('element_' + singleElement.textContent);
    console.log(singleElement);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let enterColor = prompt('Choose the color');
//
// let headerItem = document.getElementsByClassName('sub-header');
//
// for (let i = 0; i < headerItem.length; i++) {
//     const headerItemElement = headerItem[i];
//     headerItemElement.style.background = enterColor;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let sub = document.getElementsByClassName('sub-header');

for (let i = 0; i < sub.length; i++) {
    const subElement = sub[i];
    if (subElement.textContent === 'content 2 segment') {
        subElement.style.color = enterColor;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let newText = prompt('Enter new text');

let content = document.getElementsByClassName('content_1');

for (let i = 0; i < content.length; i++) {
    const contentElement = content[i];
    contentElement.innerText = newText;
}
// l) отримати елементи p та змінити їм padding на 20px

const paragraph = document.getElementsByTagName('p');

for (let i = 0; i < paragraph.length; i++) {
    const paragraphElement = paragraph[i];
    paragraphElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const text2 = document.getElementsByClassName('text2');

for (let i = 0; i < text2.length; i++) {
    const text2Element = text2[i];
    text2Element.innerText = 'September 2021';
}