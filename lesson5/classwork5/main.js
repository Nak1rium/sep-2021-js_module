//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const min = (a,b,c) => {
//     if (a < b && a < c) {
//         return a;
//     }
//     else if (b < a && b < c) {
//         return b;
//     }
//     else if (c < a && c < b) {
//         return c;
//     }
// }
// let x = min(33,11,22);
// console.log(x);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const max = (a,b,c) => {
//     if (a > b && a > c) {
//          return a;
//      }
//      else if (b > a && b > c) {
//          return b;
//      }
//      else if (c > a && c > b) {
//         return c;
//      }
// }
// let x = max(22,11,33);
// console.log(x);

//- створити функцію яка повертає найбільше число з масиву

// let numbers = [100,222,44,123,321,32,11];
//
// const maxNumber = (numbers) => {
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//         return max;
// }
// console.log(maxNumber(numbers));

//- створити функцію яка повертає найменьше число з масиву

// let numbers = [100,222,44,123,321,32,11];
//
// const minNumber = (numbers) => {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(minNumber(numbers));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// let numbers = [20,100,10,30,50];
//
// const suma = (numbers) => {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(suma(numbers));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbers = [20,100,10,30,50];
//
// const suma = (numbers) => {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }
// console.log(suma(numbers));

//- створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let arr = [1,22,3,4,5,6,7,8,9,10,11,-12];
//
// const max_min = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//   for (const ar of arr) {
//       if (ar > max) {
//           max = ar;
//       }
//
//       else if (ar < min) {
//           min = ar;
//       }
//   }
//   console.log(max);
//   return min;
// }
// console.log(max_min(arr));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let a = [];
//
// const random = (a) => {
//     for (let i = 0; i < 100; i++) {
//      a[i] = Math.floor(Math.random()*100);
//  }
//     return a;
// }
// console.log(random(a));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// let a = [];
//
// const random = (a,limit) => {
//     for (let i = 0; i < 100; i++) {
//      a[i] = Math.floor(Math.random()*limit);
//  }
//     return a;
// }
//
// let x = random(a,11);
// console.log(x);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1,2,3];
//
// const reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length-1 , ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//     return newArr;
// }
// console.log(reverse(arr));

// let a = [1,2,3];
//
// const reverse = (a) => {
//     let reversedA = [];
//     for (let i = a.length-1; i >= 0; i--) {
//         reversedA.push(a[i]);
//     }
//     return reversedA;
// }
// console.log(reverse(a));