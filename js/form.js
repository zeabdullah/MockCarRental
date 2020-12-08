$(".visaComponents").hide();
$(".cashComponents").hide();

$("#visaRBTN").on("click", function() {
  $("#cashRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons

  $(".cashComponents").hide();
  $(".visaComponents").slideDown('slow');
});

$("#cashRBTN").on("click", function() {
  $("#visaRBTN").removeClass('active');
  $(this).addClass('active'); //Act as radio buttons

  $(".visaComponents").hide();
  $(".cashComponents").slideDown();
});

let Ask = () => {
  alert("Submitted!\nYou will receive an email when request is approved");
}

let giveMSG = () => {
  alert("Car Reserved!");
}

//TODO: replace these alerts with bootstrap's alerts