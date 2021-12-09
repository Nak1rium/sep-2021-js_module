// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage

let btn = document.getElementById('btn');
let name = document.forms.UserForm.name;
let age =  document.forms.UserForm.age;
let key = 'key';

let user = (userName,userAge) => {
    let x = {
        name: userName,
        age: userAge
    }
    localStorage.setItem(key,JSON.stringify(x));
};

btn.addEventListener('click', function (e) {
    e.preventDefault();
    user(name.value,age.value);
});

// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carBtn = document.getElementById('carBtn');
let model = document.forms.carsForm.model;
let type = document.forms.carsForm.type;
let volume = document.forms.carsForm.volume;
let carKey = 'carKey';

let cars = (carModel,carType,carVolume) => {
    let arr = JSON.parse(localStorage.getItem(carKey)) || [];

    arr.push({carModel,carType,carVolume});
    localStorage.setItem(carKey, JSON.stringify(arr));
};

carBtn.addEventListener('click', function (e) {
   e.preventDefault();
   cars(model.value,type.value,volume.value);
});