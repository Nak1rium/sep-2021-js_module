// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';

// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let AtoUpperCase = a.toUpperCase();
// console.log(AtoUpperCase);
// let BtoUpperCase = b.toUpperCase();
// console.log(BtoUpperCase);
// let CtoUpperCase = c.toUpperCase();
// console.log(CtoUpperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// let AtoLowerCase = a.toLowerCase();
// console.log(AtoLowerCase);
// let BtoLowerCase = b.toLowerCase();
// console.log(BtoLowerCase);
// let CtoLowerCase = c.toLowerCase();
// console.log(CtoLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// const split = (str) => {
//   let strSplit = str.split(' ');
//   return strSplit;
// }
// let arr = split(str);
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//   що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
//   document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// const delete_characters = (str,length) => {
//   return str.substring(0,length);
// }
// console.log(delete_characters(str,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// const insert_dash = (str) => {
//   let replaceAll = str.replaceAll(' ','-');
//   toUpperCase = replaceAll.toUpperCase();
//   console.log(toUpperCase);
// }
// insert_dash(str);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
// з нижнього регістру у верхній.

// const big = (str) => {
//   let toUpperCase = str[0].toUpperCase();
//   console.log(toUpperCase + str.slice(1));
// }
// let str = 'karakos';
// big(str);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// const capitalize = (str) => {
//   return str.split(' ').map(x => x.charAt(0).toUpperCase()+x.slice(1)).join(' ');
// }
// let str = 'chill pill';
// console.log(capitalize(str));
