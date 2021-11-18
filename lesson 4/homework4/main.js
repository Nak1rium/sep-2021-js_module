//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calculate_area  (a,b) {
//     let c = a;
//     let g = b;
//     let s = a * b;
//     return s;
// }
//
// let x = calculate_area (20,10);
// console.log(x);

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// function calculate (a) {
//     let r = a;
//     let p = 3.14;
//     let s = p * (a**2);
//     return s;
// }
//
// let x = calculate(5);
// console.log(x);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calculate (a,b) {
//     let r = a;
//     let h = b;
//     let p = 3.14;
//     let s = 2 * p * r * (b + a);
//     return s;
// }
//
// let x = calculate(10,10);
// console.log(x);

//- створити функцію яка приймає масив та виводить кожен його елемент

// function arr (arrr) {
//     for (let i = 0; i <= arrr.length-1; i++) {
//         console.log(arrr[i]);
//     }
// }
//
// let arrr = ['a','b','c',1,2,3,true,false];
// arr(arrr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (text) {
//     document.write(`<p>${text}</p>`);
// }
//
// text(123);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function text (text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
//
// }
//
// text(`text`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text (text,number) {
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//
// }
//
// text(`text`,2);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function mass (masss) {
//     for (let i = 0; i < masss.length; i++) {
//         document.write(`<li>${masss[i]}</li>`);
//     }
// }
// let masss = ['a','b','c',1,2,3,true];
// mass(masss);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [{id:1 , name: 'Ivan' , age: 15},
//     {id:2 , name: 'Vasya' , age: 23},
//     {id:3 , name: 'Max' , age: 25},
//     {id:4 , name: 'Artem' , age: 20}];
//
// function user (arr) {
//     for (let i of users) {
//         document.write(`<div>${i.id}.${i.name}.${i.age}</div>`)
//     }
// }
// user(users);

