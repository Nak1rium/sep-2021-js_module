// Написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// Масив вивести в консоль.

// function TheCurse(main, syka = []) {
//     console.log(main);
//     if (main.children.length) {
//         for (const Element of main.children) {
//             if (!syka.includes(Element.className)) {
//                 syka.push(Element.className)
//             }
//                 if (Element.children.length) {
//                     TheCurse(Element, syka);
//                 }
//
//         }
//     }
//     return syka;
// }
//
// console.log(TheCurse(document.body));

// let AllClasses = [];
//
// let allElements = document.body.getElementsByTagName('*');
// //console.log(allElements);
// for (let i = 0; i <allElements.length; i++) {
//     let classes = allElements[i].className.split(' ');
//    // console.log(classes)
//     for (let j = 0; j < classes.length; j++) {
//         let classOffAll = classes[j];
//         //console.log(classOffAll)
//         if (classOffAll && !AllClasses.includes(classOffAll)) {
//             AllClasses.push(classOffAll);
//         }
//     }
// }
// console.log(AllClasses);










