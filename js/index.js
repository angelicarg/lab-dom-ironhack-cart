// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  console.log(price.innerText);
  console.log(quantity.value);
  subtotal.innerText = Number(price.innerText * quantity.value);
  return Number(price.innerText * quantity.value);

  //... your code goes here
}

function calculateAll() {
  const products = document.getElementsByClassName('.product');
  console.log(products);

  let iteracao2 = 0;
  for (let i = 0; i < products.length; i++) {
    iteracao2 += updateSubtotal(products[i]); //  products[i].onclick () => (updateSubtotal) {
    //    return products.length;
    //  }
  }
  // const totalValue = document.querySelector('subtotal span');
  //totalValue.innerText = Number(iteracao2);
  //products += Number(price.innerText * quantity.value);

  //products.addEventListener('click', HTMLButtonElement.calculateAll);
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
const event = document.getElementsByClassName('.btn btn-remove');
function removeProduct(event) {
  const button = event.currentTarget;
  console.log('The target in remove is:', button);
  //... your code goes here
}
button.addEventListener('.btn btn-remove', removeProduct);
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
