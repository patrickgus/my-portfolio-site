function handleToggleButtonClick() {
  $('#js-navbar-toggle').click(function(event) {

    $('#js-menu').toggle("active");
  });
}

function handleLinkClick() {
  $('.page-links').on('click', function(event) {
    event.preventDefault();

    $('html').animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top 
    }, 800);
  });
}

function handleClicks() {
  handleToggleButtonClick();
  handleLinkClick();
}

$(handleClicks);