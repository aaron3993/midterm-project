

$(document).ready(() => {
  $('.add-item').each(function() {
    this.addEventListener('click', function(e) {
      const card = $(e.target).parent();
      console.log(card);
    })
  })
})
