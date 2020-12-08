const $alertContainer = $('.alert-container');
const $form = $('form');

$alertContainer.hide();

//IMP NOTE: ES6 arrow functions make most things in jQuery to not work properly.

$form.submit(function(e) {
  e.preventDefault();

  $alertContainer
  .before(`
    <div class="spinner-border text-primary mb-3" role="status">
      <span class="sr-only">Loading...</span>
    </div>`);

  setTimeout(function() {
    $('.spinner-border').remove();
    $alertContainer.show();
  }, 2500);
});