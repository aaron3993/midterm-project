$(document).ready(() => {
  $('.index-button').each(function() {
    this.addEventListener('click', (e) => {
      console.log(localStorage.setItem('user_order', '{}'));
    })
  })
});
