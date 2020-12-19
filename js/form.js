const $alertContainer = $('.alert-container');
const $form = $('form');
const $visaComponents = $(".visaComponents");
const $cashComponents = $(".cashComponents");
const $carModel = $('.car-model');
const $carDRent = $('.day-rent');
const $carMRent = $('.month-rent');

$visaComponents.hide();
$cashComponents.hide();
$alertContainer.hide();


//IMP NOTE: ES6 arrow functions make most things in jQuery to not work properly.

$carModel[0].innerText += ` ${sessionStorage.getItem('carTitle')}`;
$carDRent[0].innerText += sessionStorage.getItem('carDRent');
$carMRent[0].innerText += sessionStorage.getItem('carMRent');

if(sessionStorage.getItem('carTitle') === null) {
  $('form').remove();

  $('footer').before(`
  <div class="jumbotron bg-danger text-white">
    <div class="container">
      <h1 class="display-4">No Car Ordered</h1>
      <p class="lead">Please reserve a car to be able to view this page</p>
    </div>
  </div>`);
}

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
