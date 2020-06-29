const populateOrder = function(userOrder, menuObjects){
  const orderList = $('.order-list');
  console.log(userOrder);
  for (let [key, value] of Object.entries(userOrder)) {
    const childLI = `
    <li class="list-group-item" data-itemID="${key}">
      <span class="item-count"> ${value} X </span>
      <span> ${menuObjects[key].name} </span>
      <span>
        <a href="#" class="btn btn-dark increment">+</a>
        <a href="#" class="btn btn-dark decrement">-</a>
        <a href="#" class="btn btn-dark remove">X</a>
      </span>
      <span class="item-total">$${((menuObjects[key].price * value)/100).toFixed(2)}</span>
    </li>`
    $(orderList).append(childLI);
  };
};



// Move this to client helpers
const formatMenu = function(menu) {
  const menuObjects = {};
  menu.forEach(menuItem => {
    menuObjects[menuItem.id] = menuItem;
  });
  return menuObjects;
}

const setTotalPrice = function(userOrder, menuObjects) {
  // $${(orders.map(order => order.price_charged * order.qty).reduce((a, b) => a + b) / 100).toFixed(2)}`
  let totalInCents = 0;
  for (let [key, value] of Object.entries(userOrder)) {
    totalInCents += menuObjects[key].price * value;
  }
  $('.order-total').html((totalInCents/100).toFixed(2));
}


$(document).ready(() => {
  userOrder = JSON.parse(localStorage.getItem('user_order'));
  const menuObjects = formatMenu(menu);
  populateOrder(userOrder, menuObjects);
  setTotalPrice(userOrder, menuObjects);

  console.log(userOrder);
  // addClickHandlers();

  // Increment count and price when user clicks +
  $('.increment').each(function() {
    this.addEventListener('click', function(e) {
      const parentLi = $(e.target).parent().parent();
      const itemId = (parentLi[0].dataset.itemid);
      const itemPrice = menuObjects[itemId].price;

      // increment count in localStorage
      userOrder[itemId] += 1;
      localStorage.setItem('user_order', JSON.stringify(userOrder));
      // adjust count in li
      $(parentLi).find('.item-count').html(userOrder[itemId]);
      // adjust price for this li
      $(parentLi).find('.item-total').html(`$${((userOrder[itemId] * menuObjects[itemId].price)/100).toFixed(2)}`)
      // adjust total price
      setTotalPrice(userOrder, menuObjects);
    });
  });

  // (data.itemId)

  // const order = JSON.parse(localStorage.getItem('user_order'));
  // const cardBody = $(e.target).parent();
  // const itemId = cardBody[0].dataset.itemid;
  // // If item is in order, increase its qty by one. Else, set its qty to 1
  // order[itemId] ? order[itemId] += 1 : order[itemId] = 1;

  // // update item qty on card
  // const itemQty = cardBody.find('.item-qty')[0];
  // itemQty.innerHTML = order[itemId];
  // localStorage.setItem('user_order', JSON.stringify(order));
  // console.log(localStorage.getItem('user_order'));











});







//  // Add evt listener to - button on menu-items
//  $('.remove-item').each(function() {
//   this.addEventListener('click', function(e) {
//     const order = JSON.parse(localStorage.getItem('user_order'));
//     const cardBody = $(e.target).parent();
//     const itemId = cardBody[0].dataset.itemid;
//     // If item is in order, decrease its qty by one.
//     // update qty count on card
//     if (order[itemId]) {
//       order[itemId] -= 1;
//       const itemQty = cardBody.find('.item-qty')[0];
//       itemQty.innerHTML = order[itemId];
//     }

//     // If the item is in the order but its quantity is 0, delete it from the order
//     if (order[itemId] === 0) {
//       delete order[itemId];
//     }
//     localStorage.setItem('user_order', JSON.stringify(order));
//     console.log(localStorage.getItem('user_order'));
//   })
