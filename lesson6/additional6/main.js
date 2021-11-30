// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let baza = ['someemail@gmail.com'];
// let email = 'some.email@gmail.com';
// const NYSHA = (mail) => {
//
//     const existMail = baza.filter(element => {
//         return element.toLowerCase() === mail.toLowerCase()
//     })
//
//     if (existMail.length) {
//         console.log('email already exist')
//         return
//     }
//
//     if (!mail.includes('@')) {
//         console.log('@ not exist')
//         return
//     }
//
//     if (!mail.indexOf('@')) {
//         console.log('nothing before @')
//         return
//     }
//
//     if (!mail.includes('.')) {
//         console.log('. not exist')
//         return
//     }
//
//     const arrAfterDoggo = (mail.slice(mail.indexOf('@') + 1, mail.length))
//     if (!(arrAfterDoggo.indexOf('.') >= 2)) {
//         console.log('must be at least to letters before .')
//         return
//     }
//
//     baza.push(email);
//     console.log('email saved successful')
//
// }
// const promptmail = prompt('enter ur email')
// NYSHA(promptmail);

//- є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sort = coursesArray.sort((a,b) => a.modules.length - b.modules.length);
// console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
// const count = (str,stringsearch) => {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) ++counter;
//     }
//     return counter;
// }
// console.log(count(str,'о'));


// let str = "Астрономия это наука о небесных объектах";
// const count = (str,stringsearch) => {
//     return  str.split('').filter(x => x === stringsearch).length;
// }
// console.time('FirstWay');
// console.log(count(str,'о'));
// console.timeEnd('FirstWay');


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// const cutString = (str, n) => {
//     let cut = str.split(' ').slice(0,n).join(' ');
//     console.log(cut);
// }
// cutString(str,5);






// function sumDigits(num) {
//     num = num.toString();
//     return num.length === 0
//         ? 0
//         : +num[0] + sumDigits(num.slice(1));
// }
//
// console.log(sumDigits(1234));

// function sumDigits(num, sum) { // num is expected to be a string
//     sum = sum || 0;
//     if (num.length === 0) {
//         return sum;
//     }
//     return sumDigits(num.slice(1), sum + +num[0]);
// }
//
// console.log(sumDigits('1234'));

// const sumDigits = (n = 0, acc = 0) =>
//     n === 0
//         ? acc
//         : sumDigits (n / 10 >> 0, acc + n % 10)
// console.log (sumDigits (1234))

// function sumDigits(stringOfNums) {
//     console.log(stringOfNums.split('').reduce(function(x,y){ return +x + +y}, 0));
// }
// sumDigits("1234");

// function sumDigits(num) {
//     return num ? (num%10) + sumDigits(Math.floor(num/10)) : 0
// }
//
// console.log(sumDigits(1234));

// function sumDigits(num) {
//     if (num === 0) {
//         return 0;
//     } else {
//         let last = num % 10;
//         let rest = Math.floor(num / 10);
//         return last + sumDigits(rest);
//     }
// }
// console.log(sumDigits(1234));