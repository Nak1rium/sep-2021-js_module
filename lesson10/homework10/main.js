// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.createElement('button');
// btn.setAttribute('id','text');
// btn.innerText = 'click me';
// document.body.appendChild(btn);
//
// let getIdText = document.getElementById('text');
// getIdText.onclick = function () {
//     document.getElementById('text').removeAttribute('id');
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button');
// btn.setAttribute('id','text');
// btn.innerText = 'click me';
// document.body.appendChild(btn);
//
// let getIdText = document.getElementById('text');
// getIdText.onclick = function () {
//     document.getElementById('text').style.display = 'none';
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Click';
// document.body.appendChild(input);
// document.body.appendChild(btn);
//
// btn.addEventListener('click', function () {
//
//     let a = input.value;
//     if (!parseInt(a) || a < 0) {
//         alert('incorrect value');
//     } else if (a < 18) {
//         alert('younger than 18');
//     }
//
// });

// - Создайте меню, которое раскрывается/сворачивается при клике

// let btn = document.createElement('button');
// btn.setAttribute('id', 'text');
// btn.innerText = 'click me';
// document.body.appendChild(btn);
//
//
// btn.addEventListener('click', function () {
//     btn.style.display = 'none';
//     let menu;
//     let menuBtn;
//     if (document.getElementsByClassName('menu').length) {
//         menu = document.getElementsByClassName('menu')[0];
//         menuBtn = document.getElementsByClassName('menuBtn')[0];
//         menu.style.display = 'flex';
//     } else {
//         menu = document.createElement('div');
//         menu.classList.add('menu');
//         menuBtn = document.createElement('button');
//     }
//     menuBtn.classList.add('menuBtn');
//     menuBtn.innerText = 'click me';
//     menuBtn.addEventListener('click',function () {
//         menu.style.display = 'none';
//         btn.style.display = 'block';
//     });
//     menu.appendChild(menuBtn);
//     document.body.appendChild(menu);
// });

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [{title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'madsa', body: 'madsa dsa dsad sad sa'},
//     {title: 'dsadas', body: 'dsadas as dsa dsa da dass'},
//     {title: 'ksadasd', body: 'ksadasd adsa dsa dsadsad'}
// ];
//
// for (const comment of comments) {
//     let div = document.createElement('div');
//     let titleDiv = document.createElement('div');
//     let bodyDiv = document.createElement('div');
//     let btn = document.createElement('button');
//
//
//     btn.addEventListener('click', function () {
//         if (bodyDiv.innerText.length) {
//             bodyDiv.innerText = '';
//         }
//     })
//
//     btn.innerText = 'click'
//     titleDiv.innerText = comment.title;
//     bodyDiv.innerText = comment.body;
//
//
//     bodyDiv.appendChild(btn);
//     div.append(titleDiv,bodyDiv);
//     document.body.appendChild(div);
// }


// let comments = [{title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'madsa', body: 'madsa dsa dsad sad sa'},
//     {title: 'dsadas', body: 'dsadas as dsa dsa da dass'},
//     {title: 'ksadasd', body: 'ksadasd adsa dsa dsadsad'}
// ];
//
// for (const comment of comments) {
//     let div = document.createElement('div');
//     let titleDiv = document.createElement('div');
//     let bodyDiv = document.createElement('div');
//     let btn = document.createElement('button');
//
//     btn.addEventListener('click', function () {
//         if (bodyDiv.innerText.length) {
//             bodyDiv.innerText = '';
//         } else if (!bodyDiv.innerText.length) {
//             bodyDiv.innerText = comment.body;
//         }
//     })
//
//     btn.innerText = 'click'
//     titleDiv.innerText = comment.title;
//     bodyDiv.innerText = comment.body;
//
//     div.append(titleDiv, bodyDiv, btn);
//     document.body.appendChild(div);
// }



