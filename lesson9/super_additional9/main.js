let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
//  їх в інший порожній масив.

// for (const user of users) {
//     let newUsers = [];
//     for (const Key in user.address) {
//         newUsers.push( user.address[Key])
//     }
//     console.log(newUsers)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за
// допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//         let div = document.createElement('div');
//     for (const userKey in user) {
//         console.log(userKey);
//         if (userKey !== 'address') div.innerText += user[userKey];
//         document.body.appendChild(div);
//         for (const Key in user[userKey]) {
//             div.innerText += user[userKey][Key];
//         }
//     }
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//         let div = document.createElement('div');
//     for (const userKey in user) {
//         console.log(userKey);
//         let divProps = document.createElement('div');
//         if (userKey !== 'address') divProps.innerText = user[userKey];
//         div.appendChild(divProps);
//         if (userKey === 'address') {
//             for (const Key in user.address) {
//                 let divAddressProps = document.createElement('div');
//                 divAddressProps.innerText = user.address[Key];
//                 div.appendChild(divAddressProps);
//             }
//         }
//         document.body.appendChild(div);
//     }
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з
// адресою зробити окремим блоком, з блоками для кожної властивості


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують
//  тему контенту яка вказана в параграфі.
//  створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), я
//  кий буде змістом того, що знаходиться на сторінці.
//  Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let getH2 = document.getElementsByTagName('h2');
// let containerDiv = document.createElement('div');
// let ul = document.createElement('ul');
// containerDiv.setAttribute('id', 'content');
// for (const h2Element of getH2) {
//     let li = document.createElement('li');
//     li.innerText = h2Element.innerText;
//     ul.appendChild(li);
//     containerDiv.appendChild(ul);
//     document.body.append(containerDiv);
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило
//  в окремому блоці.
//  При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//  Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];

// for (const rule of rules) {
//     let container = document.createElement('div');
//     let titleH2 = document.createElement('h2');
//     let bodyP = document.createElement('p');
//
//     titleH2.innerText = rule.title;
//     bodyP.innerText = rule.body;
//
//     container.append(titleH2,bodyP);
//     document.body.appendChild(container);
// }