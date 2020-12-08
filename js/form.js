const $alertContainer = $('.alert-container');
const $form = $('form');
const $visaComponents = $(".visaComponents");
const $cashComponents = $(".cashComponents");

$visaComponents.hide();
$cashComponents.hide();
$alertContainer.hide();

$("#visaRBTN").click(() => {
  $("#cashRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons
  $cashComponents.hide();
  $visaComponents.slideDown('slow');
});

$("#cashRBTN").click(() => {
  $("#visaRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons
  $visaComponents.hide();
  $cashComponents.slideDown();
});


$form.submit(e => {
  e.preventDefault();

  $alertContainer
  .before(`
    <div class="spinner-border text-primary mb-3" role="status">
      <span class="sr-only">Loading...</span>
    </div>`);

  setTimeout(() => {
    $('.spinner-border').remove();
    $alertContainer.show();
  }, 2500);
})