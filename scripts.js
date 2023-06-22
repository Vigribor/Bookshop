//автоматическое перелистывание изображений в слайдере
var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 3){
  counter = 1;
 }
}, 5000);

// код для фильтрации контента по категориям
const filterBox = document.querySelectorAll('.box');

document.querySelector('.goods').addEventListener('click', event => {
  if (event.target.tagName !== "A") return false;

  let filterClass = event.target.dataset['f'];

  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
  return(elem);
});



// //"ленивая загрузка" при нажатии кнопки "LOAD MORE" шести дополнительных карточек товара
const loadMore = document.querySelector('.load_more');
const productsLength = document.querySelectorAll('#card').length;
let items = 6;


  loadMore.addEventListener('click', () => {
    items += 6;
    const array = Array.from(document.querySelector('#products').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));
  });
    
//добавляем товар в корзину, удаляем товар из корзины, меняем название кнопки при добавлении и удаления товара из корзины
let cart = {'1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0, '11':0, '12':0, '13':0, '14':0, '15':0};

document.onclick = event => {
  if (event.target.classList.contains('add_to_cart')) {
    addToCart(event.target.dataset.id);
  } 
}


//добавляем товар в корзину и удаляем товар из корзины, выводим количество товара в корзину
const counter_1 = document.querySelector('.item_count');
const addToCart = id => {
  if (cart[id] != 1) {
    cart[id]++;
    counter_1.innerText = '1';
  }
  else {
    cart[id] = 0;
    counter_1.innerText = '0';
  }


  const renderCart = () => {
  }
  renderCart();
}

//меняем название кнопки при нажатии
const btn = document.querySelectorAll('.add_to_cart');
for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function() {
    this.innerHTML =
      (this.innerHTML === 'buy now') ? this.innerHTML = 'in the cart' : this.innerHTML = 'buy now';
  })

}

//сохранение товаров в localStorage
window.localStorage.setItem('item_count', '1');
const item_count = window.localStorage.getItem('item_count');
window.localStorage.setItem('add_to_cart', 'in the cart');
const add_to_cart = window.localStorage.getItem('add_to_cart');
console.log(add_to_cart)






