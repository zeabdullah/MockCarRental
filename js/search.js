//creating an array to insert cars images and info
const carList = [
  {
    image: "img/image1.jpg",
    brand: "Toyota Camry",
    model: 2018,
    type: "family-car",
    rentperday: 50,
    description: "Family car",
    rentpermonth: 1350,
  },
  {
    image: "img/image2.jpg",
    brand: "Mercedes Benz",
    model: 2012,
    type: "sport-car",
    rentperday: 75,
    description: "Sports Car",
    rentpermonth: 2500,
  },
  {
    image: "img/image3.jpg",
    brand: "Nissan Micra",
    model: 2018,
    type: "sport-car",
    rentperday: 45,
    description: "Sports Car",
    rentpermonth: 1200,
  },
  {
    image: "img/image4.jpg",
    brand: "Honda Civic",
    model: 2017,
    type: "family-car",
    rentperday: 55,
    description: "Family Car",
    rentpermonth: 1360,
  },
  {
    image: "img/image5.jpg",
    brand: "Nissan Sunny",
    model: 2016,
    type: "family-car",
    rentperday: 40,
    description: "Family Car",
    rentpermonth: 1150,
  },
  {
    image: "img/image6.jpg",
    brand: "BMW 320i",
    model: 2008,
    type: "sport-car",
    rentperday: 50,
    description: "Sports Car",
    rentpermonth: 1400,
  }
];

//Code that adds the cars in the above array to the card-collection
const $cardCollection = $('.card-collection');
carList.forEach(car => {
  $cardCollection.append(`
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card my-2 ${car.type}" data-car="${car.type}">
      <img src="${car.image}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title font-weight-bold">${car.brand} ${car.model}</h5>
        <p class="card-text text-muted font-weight-light">${car.description}</p>
        <hr>
        <p class="car-text">Rent cost per day: $${car.rentperday}</p>
        <p class="car-text">Rent cost per month: $${car.rentpermonth}</p>
        <a href="form.html" class="btn btn-outline-primary btn-reserve">Reserve</a>
      </div>
    </div>
  </div>
  `);
});

$('.btn-reserve').click(function(e) {
  let reservedCarTitle = $(this).parent().children()[0].innerText;
  let reservedCarDRent = $(this).parent().children()[3].innerText;
  let reservedCarMRent = $(this).parent().children()[4].innerText;

  sessionStorage.setItem('carTitle', reservedCarTitle);
  sessionStorage.setItem('carDRent', reservedCarDRent);
  sessionStorage.setItem('carMRent', reservedCarMRent);
});

// const $reserveButtons = $('.btn-reserve'); // will use later

const $carFilter = $('#filter'); //had to use none jQuery selector for...
$('#filter').click(() => {
  let carType = $carFilter[0].options[$carFilter[0].selectedIndex].value; // Use index to be able to use vanilla JS DOM functions

  // We have to access the parent elements since if we didn't we'll be left with an empty card taking space in the page.
  if (carType === 'family') {
    $('.card').parent().hide();
    $('div[data-car="family-car"]').parent().show();
  } else if (carType === "sport") {
    $('.card').parent().hide();
    $('div[data-car="sport-car"]').parent().show();
  } else 
    $('.card').parent().show();
});
