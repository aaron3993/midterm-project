$(document).ready(() => {

  localStorage.setItem('user_order', '{}');

  console.log('doc ready', localStorage.getItem('user_order'));
  // Add evt listener to + button on menu-items
  $('.add-item').each(function() {
    this.addEventListener('click', function(e) {
      const order = JSON.parse(localStorage.getItem('user_order'));
      const cardBody = $(e.target).parent();
      const itemId = cardBody[0].dataset.itemid;
      // If item is in order, increase its qty by one. Else, set its qty to 1
      order[itemId] ? order[itemId] += 1 : order[itemId] = 1;

      // update item qty on card
      const itemQty = cardBody.find('.item-qty')[0];
      itemQty.innerHTML = order[itemId];
      localStorage.setItem('user_order', JSON.stringify(order));
      console.log(localStorage.getItem('user_order'));
    })
  })

   // Add evt listener to - button on menu-items
   $('.remove-item').each(function() {
    this.addEventListener('click', function(e) {
      const order = JSON.parse(localStorage.getItem('user_order'));
      const cardBody = $(e.target).parent();
      const itemId = cardBody[0].dataset.itemid;
      // If item is in order, decrease its qty by one.
      // update qty count on card
      if (order[itemId]) {
        order[itemId] -= 1;
        const itemQty = cardBody.find('.item-qty')[0];
        itemQty.innerHTML = order[itemId];
      }

      // If the item is in the order but its quantity is 0, delete it from the order
      if (order[itemId] === 0) {
        delete order[itemId];
      }
      localStorage.setItem('user_order', JSON.stringify(order));
      console.log(localStorage.getItem('user_order'));
    })
  })
})
