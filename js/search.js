//creating an array to insert cars images and info
var carList = [
  {
    image: "img/image6.jpg",
    brand: "BMW 320i",
    model: 2008,
    type: "sport-car",
    rentperday: 50,
    description: "Sports Car",
    rentpermonth: 1400,
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
];

//Code that adds the cars in the above array to the card-collection
var $cardCollection = $(".card-collection");
carList.forEach(function (car) {
  $cardCollection.append(`
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card my-2 ${car.type}">
      <img src="${car.image}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title font-weight-bold">${car.brand} ${car.model}</h5>
        <p class="card-text text-muted font-weight-light">${car.description}</p>
        <p class="car-text">Rent cost per day: $${car.rentperday}</p>
        <p class="car-text">Rent cost per month: $${car.rentpermonth}</p>
        <a href="form.html" class="btn btn-outline-primary">Reserve</a>
      </div>
    </div>
  </div>
  `);
});

var carFilter = document.querySelector("#filter"); //had to use none jQuery selector for...
$("#filter").on("click", function (e) {
  var carType = carFilter.options[carFilter.selectedIndex].value; // ...this

  // We had to access the parent elements since if we didn't we'll be left with an empty card taking space in the page.
  if (carType === "family") {
    $(".card").parent().hide();
    $(".family-car").parent().show();
  } else if (carType === "sport") {
    $(".card").parent().hide();
    $(".sport-car").parent().show();
  } else $(".card").parent().show();
});
