// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n1, '.');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let a = [];
// const randomaizer = (length,diapason) => {
//   for (let i = 0; i < length; i++) {
//     a.push(Math.floor(Math.random()*diapason));
//   }
//   return a;
// }
// let random = randomaizer(20,100);
// console.log(random);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. 
// Відсортувати його за допомоги sort

// random.sort();
// console.log(random);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let a = [];
// const randomaizer = (length,diapason) => {
//   for (let i = 0; i < length; i++) {
//     a.push(Math.floor(Math.random()*diapason));
//   }
//   return a.filter(num => num % 2 === 0);
// }
// let random = randomaizer(20,100);
// console.log(random);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .  
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let a = [];
// const randomaizer = (length,diapason) => {
//   for (let i = 0; i < length; i++) {
//     a.push(Math.floor(Math.random()*diapason));
//   }
//   return a.map(num => num.toString());
// }
// let random = randomaizer(20,100);
// console.log(random);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction. 
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,22,3];
//
// const sortNums = (nums,direction) => {
//   if (direction === 'ascending') return nums.sort((a,b) => a - b);
//   if (direction === 'descending') return nums.sort((a,b) => b - a);
// }
// console.log(sortNums(nums,'descending'));

// - є масив

// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
//  ];

// -- відсортувати його за спаданням за monthDuration

// const sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(x => {
//     return x.monthDuration > 5;
// })
//
// console.log(filter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//   let a = [];
//   while (str.length) {
//     a.push(str.substring(0, n))
//     str = str.slice(n)
//   }
//   console.log(a);
// };
// cutString('наслаждение',3);








