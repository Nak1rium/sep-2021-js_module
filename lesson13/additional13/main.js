// - Імітуємо наповнення інтернет магазину товарами :
//  Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись
// (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який
// відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let btn = document.getElementById('btn');
let productName = document.forms.productForm.productName;
let productQuantity = document.forms.productForm.productQuantity;
let productPrice = document.forms.productForm.productPrice;
let productImg = document.forms.productForm.productImg;
let key = 'key';

let products = (id,prdName,prdQuantity,prdPrice,prdImg) => {
    let arr = JSON.parse(localStorage.getItem(key)) || [];

    arr.push({id,prdName,prdQuantity,prdPrice,prdImg});
    localStorage.setItem(key, JSON.stringify(arr));
};

btn.addEventListener('click', function (e){
    e.preventDefault();
    let id = Date.now();
    products(id,productName.value,productQuantity.value,productPrice.value,productImg.value);
});



