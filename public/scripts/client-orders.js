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

  $('.decrement').each(function() {
    this.addEventListener('click', function(e) {
      const parentLi = $(e.target).parent().parent();
      const itemId = (parentLi[0].dataset.itemid);
      const itemPrice = menuObjects[itemId].price;
      //decrement count in localStorage
      userOrder[itemId] -= 1;
      // If item count is now 0, remove it from local storage and from order
      if (!userOrder[itemId]) {
        delete userOrder[itemId];
        localStorage.setItem('user_order', JSON.stringify(userOrder));
        $(parentLi).remove();
      } else {
        // adjust count in li
        $(parentLi).find('.item-count').html(userOrder[itemId]);
        // // adjust price for this li
        $(parentLi).find('.item-total').html(`$${((userOrder[itemId] * menuObjects[itemId].price)/100).toFixed(2)}`);
      }
      // // adjust total price
      setTotalPrice(userOrder, menuObjects);
    });
  });
});







