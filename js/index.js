// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector("#quantityInput");
  quantity.value = Math.floor(quantity.value);
  if (quantity.value < 0 ){
    quantity.value = 0;
  };
  const subtotalPrice = price.innerText * quantity.value;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subtotalPrice;
  return (subtotalPrice);
}

//window.addEventListener('load', () => {
// const quantityChange = document.querySelector('#quantityInput');
 // const product = document.querySelector('.product')
//  quantityChange.addEventListener("keydown", updateSubtotal(product))
//  quantityChange.addEventListener("keyup", updateSubtotal(product))
//})


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let priceTotal = 0;
  products.forEach(product => {
    const priceProduct = updateSubtotal(product);
    priceTotal += priceProduct; 
  });
  //console.log(priceTotal);
  // ITERATION 3
  document.querySelector("#total-value span").innerText = priceTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode;
  const chart = product.parentNode;
  chart.removeChild(product);

  //console.log(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const arrayValueProduct = document.querySelectorAll('.create-product input');
  const productName = arrayValueProduct[0].value;
  const productPrice = arrayValueProduct[1].value;
  const newProduct = document.querySelector('.product-template').cloneNode(true);
  newProduct.querySelector('.name span').innerText = productName;
  newProduct.querySelector('.price span').innerText = productPrice;
  const productParent = document.querySelector('tbody');
  productParent.appendChild(newProduct);
  changeProductAttribute(newProduct);
  const removeBtn = newProduct.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  calculateAll();
  //console.log(productParent);
}

function changeProductAttribute(product) {
  product.removeAttribute("class");
  product.setAttribute("class", "product");
}

function onLoadListeners() {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //const inputup = document.getElementById('quantityInput');
  //inputup.addEventListener('keyup', calculateAll);
  //inputup.addEventListener('input', calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
}


window.addEventListener('load', onLoadListeners);
