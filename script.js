function handleToggleButtonClick() {
  $('#js-navbar-toggle').click(function(event) {
    $('#js-menu').toggleClass('active');
  });
}

function handleLinkClick() {
  $('.page-links').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      800
    );

    $('#js-menu').toggleClass('active');
  });
}

function handleClicks() {
  handleToggleButtonClick();
  handleLinkClick();
}

$(handleClicks);
