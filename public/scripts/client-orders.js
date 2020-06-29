const populateOrder = function(userOrder, menuObjects){
  const orderList = $('.order-list');
  console.log(userOrder);
  for (let [key, value] of Object.entries(userOrder)) {
    const childLI = `
    <li class="list-group-item">
      <span> ${value} X </span>
      <span> ${menuObjects[key].name} </span>
      <span>
        <a href="#" class="btn btn-dark">+</a>
        <a href="#" class="btn btn-dark">-</a>
        <a href="#" class="btn btn-dark">X</a>
      </span>
      <span>$${((menuObjects[key].price * value)/100).toFixed(2)}</span>
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

  // addClickHandlers();
});
