// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let changeId = document.getElementById('main_header').id = 'sep-2021';

// b) робить шириниу елементу ul 400px

// let changeWidth = document.getElementsByTagName('ul');
// for (const changeWidthElement of changeWidth) {
//     changeWidthElement.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let changeWidth = document.getElementsByClassName('linkList');
// for (const changeWidthElement of changeWidth) {
//     changeWidthElement.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let getText = document.getElementsByClassName('listElement2')[0].textContent;
// console.log(getText)

// let getText = document.getElementsByClassName('linkList');
// for (let i = 0; i < getText.length; i++) {
//     console.log(getText[i].textContent);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let changeColor = document.getElementsByTagName('li');
// for (const changeColorElement of changeColor) {
//     changeColorElement.classList.add('silver');
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let addClass = document.getElementsByTagName('a');
// for (const addClass1 of addClass) {
//     addClass1.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// let changeTextSize = document.getElementsByTagName('a');
// for (let i = 0; i < changeTextSize.length; i++) {
//     if (changeTextSize[i].textContent === 'link3') {
//         changeTextSize[i].style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let addNewClass = document.getElementsByTagName('a');
// for (let i = 0; i < addNewClass.length; i++) {
//     for (const addNewClass1 of addNewClass) {
//         if (addNewClass1.textContent === addNewClass[i].textContent) {
//             addNewClass1.classList.add(`element_${addNewClass[i].textContent}`);
//         }
//     }
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let getElements = document.getElementsByClassName('sub-header');
// let color = prompt('enter color name');
// for (const colorElement of getElements) {
//     colorElement.style.backgroundColor = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
// Колір отримати з prompt()

// let getElements = document.getElementsByClassName('sub-header');
// let color = prompt('enter color name');
// for (const colorElement of getElements) {
//     if (colorElement.textContent === 'content 2 segment') {
//     colorElement.style.backgroundColor = color;
//         }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let getText = document.getElementsByClassName('content_1');
// let text = prompt('enter some text');
// for (let i = 0; i < getText.length; i++) {
//     getText[i].innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px

// let getP = document.getElementsByTagName('p');
// for (const pElement of getP) {
//     pElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let getText = document.getElementsByClassName('text2');
// for (const textElement of getText) {
//     textElement.innerText = 'sep-21';
// }

