$(document).ready(function () {
  $('#myCarousel').carousel({ interval: 2000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#myCarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    }
    else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#myCarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });
});

// Show Modals
$('#loginLink').click(function () {
  $('#loginModal').modal('show');
});

$('#reserveButton').click(function () {
  $('#reserveModal').modal('show');
});

// Close Modals
$('#loginCloseButton').click(function () {
  $('#loginModal').modal('hide');
});

$('#reserveCloseButton').click(function () {
  $('#reserveModal').modal('hide');
});

// Cancel Modals
$('#loginCancelButton').click(function () {
  $('#loginModal').modal('hide');
});

$('#reserveCancelButton').click(function () {
  $('#reserveModal').modal('hide');
});