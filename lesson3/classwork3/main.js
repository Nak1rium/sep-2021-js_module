// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let a = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// let i = 0;
// while (i < a.length) {
//     console.log(a[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < a.length) {
//     if (i % 2 === 1) {
//     console.log(a[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < a.length; i++) {
//     if (i % 2 === 1) {
//     console.log(a[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < a.length) {
//     if (a[i] % 2 === 0) {
//         console.log (a[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for ( let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         console.log (a[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for ( let i = 0; i < a.length; i++) {
//     if (a[i] % 3 === 0) {
//         a[i] = 'okten'
//     }
//     console.log(a[i])
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = a.length - 1; i >= 0; i--) {
//     const aElement = a[i];
//     console.log(a[i])
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1.

// let i = a.length - 1;
// while (i >= 0) {
//     console.log(a[i]);
//     i--;
// }

//2.

// for (let i = a.length - 1; i >= 0; i--) {
//      console.log(a[i]);
// }

//3.

// let i = a.length - 1;
// while (i >= 0) {
//     if (i % 2 === 1) {
//     console.log(a[i]);
//     }
//     i--
// }

//4.

// for (let i = a.length - 1; i >= 0; i--) {
//     if (i % 2 === 1) {
//     console.log(a[i]);
//     }
// }

//5.

// let i = a.length - 1;
// while (i >= 0) {
//     if (a[i] % 2 === 0) {
//         console.log (a[i]);
//     }
//     i--
// }

//6.

// for ( let i = a.length - 1; i >=0; i--) {
//     if (a[i] % 2 === 0) {
//         console.log (a[i]);
//     }
// }

//7.

// for ( let i = a.length - 1; i >= 0; i--) {
//     if (a[i] % 3 === 0) {
//         a[i] = 'okten'
//     }
//     console.log(a[i])
// }
