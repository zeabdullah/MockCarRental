const $alertContainer = $('.alert-container');
const $form = $('form');
const $visaComponents = $(".visaComponents");
const $cashComponents = $(".cashComponents");

$visaComponents.hide();
$cashComponents.hide();
$alertContainer.hide();


//IMP NOTE: ES6 arrow functions make most things in jQuery to not work properly.

$('.car-model')[0].innerText += ` ${sessionStorage.getItem('carTitle')}`;
$('.day-rent')[0].innerText += sessionStorage.getItem('carDRent');
$('.month-rent')[0].innerText += sessionStorage.getItem('carMRent');

$("#visaRBTN").click(function() { 
  $("#cashRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons
  $cashComponents.hide();
  $visaComponents.slideDown('slow');
});

$("#cashRBTN").click(function() {
  $("#visaRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons
  $visaComponents.hide();
  $cashComponents.slideDown();
});


$form.submit(function(e) {
  $alertContainer
  .before(`
  <div class="spinner-border text-success mb-3" role="status">
  <span class="sr-only">Loading...</span>
  </div>`);
  $('.spinner-border')[0].scrollIntoView(); // Use index to be able to use vanilla JS DOM functions
  
  setTimeout(function() {
    $('.spinner-border').remove();
    $alertContainer.show();
    $alertContainer[0].scrollIntoView(); // Use index to be able to use vanilla JS DOM functions
  }, 2500);

  e.preventDefault();
});
