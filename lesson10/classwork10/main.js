// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
// на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement('form');
// form1.setAttribute('name','f1');
//
// let form2 = document.createElement('form');
// form2.setAttribute('name','f2');
//
// let input1 = document.createElement('input');
// input1.setAttribute('name','name1');
// let input2 = document.createElement('input');
// input2.setAttribute('name','name2');
// let input3 = document.createElement('input');
// input3.setAttribute('name','name3');
// let input4 = document.createElement('input');
// input4.setAttribute('name','name4');
//
// let btn = document.createElement('button');
// btn.innerText = 'click';
//
// form1.append(input1,input2);
// form2.append(input3,input4);
// document.body.append(form1,form2,btn);
//
//
// btn.addEventListener('click',function (){
//
//     let formData = new FormData(document.forms.f1);
//     console.log(formData.get('name1'));
//     console.log(formData.get('name2'));
//     let formData2 = new FormData(document.forms.f2);
//     console.log(formData2.get('name3'));
//     console.log(formData2.get('name4'));
//
// // console.log(document.forms.f1.name1.value);
// // console.log(document.forms.f1.name2.value);
// // console.log(document.forms.f2.name3.value);
// // console.log(document.forms.f2.name4.value);
//
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let inp1 = document.createElement('input');
// let inp2 = document.createElement('input');
// let inp3 = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'click';
// document.body.append(inp1, inp2, inp3, btn);
//
// btn.addEventListener('click', function () {
//
//     let value1 = inp1.value;
//     let value2 = inp2.value;
//     let value3 = inp3.value;
//
//     if (!parseInt(value1) || !parseInt(value2) || value1 < 0 || value2 < 0) {
//         alert('in the first and second form should be a number');
//
//     } else {
//
//         let table = document.createElement('table');
//         for (let i = 0; i < value1; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < value2; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = value3;
//                 tr.appendChild(td);
//                 table.appendChild(tr);
//             }
//         }
//         document.body.appendChild(table);
//     }
//
// });


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let imp = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'click';
// document.body.append(imp, btn);
//
// btn.addEventListener('click', function () {
//     let a = imp.value;
//     let badWords = ['k', 'm', 'l', 's'];
//     for (let i = 0; i < badWords.length; i++) {
//         if (a === badWords[i]) {
//             alert('Bad word')
//             console.log(a);
//         }
//     }
// });

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let imp = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'click';
// document.body.append(imp, btn);
//
// btn.addEventListener('click', function () {
//     let a = imp.value;
//     let badWords = ['kaka', 'makaka', 'lykaka', 'skaka'];
//     console.log(a.split(' '))
//     for (let i = 0; i < badWords.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (a.split(' ')[j] === badWords[i]) {
//                 alert('Bad word');
//             }
//         }
//     }
// });