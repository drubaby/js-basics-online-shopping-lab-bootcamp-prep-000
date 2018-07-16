var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * (100) + 1);
 var newItem = { itemName: item, itemPrice: price };
 cart.push(newItem);
return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartList = [];
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else{  
    for (let i = 0; i < cart.length-1; i++){
      cartList += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    cartList += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return `In your cart, you have ${cartList}`
  }
}
function total() {
  var prices = 0
  for (let i = 0; i < cart.length; i++){
  prices += cart[i].itemPrice;
  }
  return prices;
}

function removeFromCart(item) {
  // write your code here
  //for loop checking if item === i, if true return .splice()
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
    }
    else
    return "That item is not in your cart."
}
}
function placeOrder(cardNumber) {
  // write your code here
}
