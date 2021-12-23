// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let form = document.getElementById('form');
let btn = document.getElementById('btn');
let value = document.forms.form.inp;

btn.addEventListener('click', function (e) {
    e.preventDefault();

    let string = value.value;

    form.style.display = 'none';

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    let div = document.createElement('div');


    function time() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, Math.random() * (1000 - 100) + 100);
        })
    }

    let promise = Promise.resolve();

    for (let i = 0; i < string.length; i++) {
        promise = promise.then(() => time())
            .then(() => {
                console.log(string[i])
                if (string[i] === ' ') {
                    div.innerText += '\xa0';
                } else {
                    div.innerText += string[i];
                }
            });
    }

    wrapper.appendChild(div);
    document.body.appendChild(wrapper);

});









