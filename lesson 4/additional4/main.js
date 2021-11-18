//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//  якщо два аргументи - складає або конкатенує їх між собою.

// function kaka () {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         console.log(arguments[0] + arguments[1]);
//     }
// }
// kaka(10,30);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// let a = [1,2,3,4];
// let b = [2,3,4,5];
//
// function plus (a,b) {
//         let c = [];
//         for (let i = 0; i < a.length; i++) {
//             if (a[i] && b[i]) {
//                 c[i] = a[i] + b[i];
//             }
//         }
//
//        return c;
// }
// console.log(plus(a,b));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function key(user) {
//     let userKeyArr = [];
//     for (let i = 0; i < user.length; i++) {
//         for (const userKey in user[i]) {
//             userKeyArr.push(userKey);
//         }
//     }
//     return userKeyArr;
// }
// console.log(key(user));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function key(user) {
//     let userKeyArr = [];
//     for (const U of user) {
//         for (const userKeyArrElement in U) {
//             userKeyArr.push(U[userKeyArrElement]);
//         }
//     }
//     return userKeyArr;
// }
// console.log(key(user));










