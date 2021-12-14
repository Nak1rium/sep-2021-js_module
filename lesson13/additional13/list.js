const key = 'key';
const wrapper = document.getElementsByClassName('wrapper')[0];
let products = JSON.parse(localStorage.getItem(key));
console.log(products);
products.forEach(product => {
   const productDiv = document.createElement('div');
   productDiv.classList.add('product');
   const h3 = document.createElement('h3');
   h3.innerText = product.prdName;
   const h4 = document.createElement('h4');
   h4.innerText = `Quantity: ${product.prdQuantity}`;
   const h5 = document.createElement('h5');
   h5.innerText = product.prdPrice;
   const img = document.createElement('div');
   img.style.backgroundImage = `url(${product.prdImg})`;
   let btn = document.createElement('button');
   btn.innerText = 'delete';
   btn.addEventListener('click',function (){
      products = products.filter(removeProduct => removeProduct.id !== product.id);
      localStorage.setItem(key,JSON.stringify(products));
      productDiv.style.display = 'none';
   });
   productDiv.append(img,h3,h4,h5,btn);
   wrapper.appendChild(productDiv);
});

let button = document.getElementById('btn');
button.addEventListener('click', function (){
   localStorage.setItem(key,JSON.stringify([]));
   wrapper.style.display = 'none';
});