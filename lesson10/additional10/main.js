// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let div = document.createElement('div');
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nemo!';
// div.classList.add('div');
// div.setAttribute('id','div');
// document.body.appendChild(div);
//
// window.onclick = e => {
//     console.log(e.target.tagName);
//     console.log(e.target.className);
//     console.log(e.target.id);
//     console.log(e.target.innerText);
//     console.log(e.target.offsetWidth);
//     console.log(e.target.offsetHeight);
// };

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі
//     висота*ширина

// let div = document.createElement('div');
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nemo!';
// div.classList.add('div');
// div.setAttribute('id', 'div');
// document.body.appendChild(div);
//
// let div2 = document.createElement('div');
// div2.classList.add('modal');
// let div3 = document.createElement('div');
// div3.classList.add('modal-content');
// let h1 = document.createElement('h3');
// div3.appendChild(h1);
// div2.appendChild(div3);
// document.body.appendChild(div2);
//
// const modal = document.querySelector(".modal");
//
// window.onclick = windowOnClick
//
// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }
//
// function windowOnClick(event) {
//     h1.innerText = `Tag name: ${event.target.tagName},
//     Class Name: ${event.target.className},
//     Id: ${event.target.id},
//     Inner Text: ${event.target.innerText},
//     Element width: ${event.target.offsetWidth},
//     Element height: ${event.target.offsetHeight}
//     `;
//     toggleModal();
// }

// -- взять массив пользователей

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры
// .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам
// войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к
//     следующему, лежащему с ним на одном уровне

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let container = document.createElement('div');
// let sliderDiv = document.createElement('div');
// sliderDiv.classList.add('sliderDiv');
// let slider = document.createElement('div');
// slider.classList.add('slider');
// let img1 = document.createElement('img');
// img1.setAttribute('src','images/1.png');
// img1.classList.add('img');
// let img2 = document.createElement('img');
// img2.setAttribute('src','images/2.png');
// img2.classList.add('img');
// let img3 = document.createElement('img');
// img3.setAttribute('src','images/3.png');
// img3.classList.add('img');
// let img4 = document.createElement('img');
// img4.setAttribute('src','images/4.png');
// img4.classList.add('img');
// let img5 = document.createElement('img');
// img5.setAttribute('src','images/5.png');
// img5.classList.add('img');
// let btn1 = document.createElement('button');
// btn1.innerText = 'Prev';
// let btn2 = document.createElement('button');
// btn2.innerText = 'Next';
//
// let kk = 0;
// btn1.addEventListener('click',function (){
//     kk = kk - 350;
//     if (kk < 0) {
//         kk = 1400;
//     }
//     slider.style.left = -kk + 'px';
// })
// btn2.addEventListener('click',function (){
//     kk += 350;
//     if (kk > 1400) {
//         kk = 0;
//     }
//     slider.style.left = -kk + 'px';
// })
//
// slider.append(img1,img2,img3,img4,img5);
// sliderDiv.appendChild(slider);
// container.appendChild(sliderDiv);
// document.body.append(container,btn1,btn2);

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює
//     свій стан

// let p = document.createElement('p');
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, vero.';
// document.body.appendChild(p);
//
// document.addEventListener('mouseup', x => {
//     let range = window.getSelection().getRangeAt(0);
//     let select = range.extractContents();
//     let span = document.createElement("span");
//     span.appendChild(select);
//     span.style.fontStyle = 'italic';
//     span.style.backgroundColor = "pink";
//     span.style.color = "DeepPink";
//     range.insertNode(span);
// });


