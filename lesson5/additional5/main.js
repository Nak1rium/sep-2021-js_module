// - Дано натуральное число n. Выведите все числа от 1 до n.

// const mars = (n) => {
//   for (let i = 1; i < n; i++) {
//       console.log(i);
//   }
// }
// mars(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

// const kaka = (A,B) => {
//     if (A > B) {
//   for (let i = B; i <= A; i++) {
//       console.log(i);
//    }
//   }
//     else if (A < B) {
//         for (let i = B; i >= A; i--) {
//           console.log(i);
//         }
//     }
//     else {
//         console.log('they are same');
//     }
// }
// kaka(100,20);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = [9,8,0,4];
// const desu = (foo,a) => {
//   let tmp = foo[a];
//   foo[a] = foo[a+1];
//   foo[a+1] = tmp;
//   return foo;
// }
// let x = desu(foo,0);
// console.log(x);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3];

// const NYSHA = (arr) => {
//   for (let i = 0 , j = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[j], arr[i]] = [arr[i], arr[j]];
//       j++;
//     }
//   }
//   return arr;
// }
//
// console.log(NYSHA([1,2,0,3,0,10,0,33,0,0,213,1,3,0]));





