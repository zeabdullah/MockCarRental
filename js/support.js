const $alertContainer = $('.alert-container');
const $form = $('form');

$alertContainer.hide();

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
});