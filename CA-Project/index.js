// VARIABLES

const buttonVilnius = document.querySelector("#btn-vilnius");
const buttonKaunas = document.querySelector("#btn-kaunas");
const buttonKlaipeda = document.querySelector("#btn-klaipeda");
const moviesList = document.querySelector(".movie-list-container");
const cartSum = document.querySelector(".cart-sum");
const cartSummary = document.querySelector(".cart-summ");
const cartContainer = document.querySelector(".cart-container");
const cartArrowContainer = document.querySelector(".cart-arrow-container");
const mainEl = document.querySelector("main");
const cartWrapper = document.querySelector(".cart-wrapper");
const btnCheckout = document.querySelector(".btn-checkout");

const movies = [
  {
    title: "Joker",
    date: ["12:00", "14:00", "17:00", "18:00"],
    city: "Kaunas",
    desc: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    genre: "Drama, trileris, kriminalinis",
    duration: "2h 20min",
    cast: "Joaquin Phoenix",
    price: 6.99,
    imageUrl: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg",
  },
  {
    title: "American Psycho",
    date: ["18:30", "21:00"],
    city: "Klaipėda",
    desc: "A wealthy New York City investment banking executive, Patrick Bateman, hides his psychopathic ego.",
    genre: "Siaubo, trileris",
    duration: "2h 20min",
    cast: "Jonas Jonaitis, Petras Petraitis",
    price: 8.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Fight Club",
    date: ["12:00", "14:00", "17:00", "18:00"],
    city: "Vilnius",
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    genre: "Drama",
    duration: "2h 20min",
    cast: "Bradd Pitt, Edward Norton",
    price: 4.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
  },
  {
    title: "Scarface",
    date: ["12:00"],
    city: "Klaipėda",
    desc: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    genre: "Drama, Kriminalinis",
    duration: "2h 02min",
    cast: "Al Pacino, Michelle Pfeiffer",
    price: 3.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  // UNCOMMENT THE OBJECT FOR TESTING
  // {
  //   title: "Filmo pavadinimas",
  //   date: ["12:00", "14:00", "17:00"],
  //   city: "Vilnius",
  //   desc: "Lorem ipsum dolor sit ameus dolores suscipit, beatae quam enim. Accusamus vitae error exercitationem.",
  //   genre: "Siaubo, trileris",
  //   duration: "2h 20min",
  //   cast: "Jonas Jonaitis, Petras Petraitis",
  //   price: 8.99,
  //   imageUrl:
  //     "https://www.59e59.org/media/filer_public_thumbnails/filer_public/6f/7b/6f7b8c01-950b-415c-97ea-3fd51b57d632/memory_exam_thumbnail_sold_out.jpg__360x540_q85_crop_subsampling-2_upscale.jpg",
  // },
];

const cities = [buttonKaunas, buttonKlaipeda, buttonVilnius];
let sum = 0;
let cartMovies = [];
listMovies();

window.addEventListener("DOMContentLoaded", () => {
  const persistedCart = window.localStorage.getItem("cartMovies");
  const persistedPrice = window.localStorage.getItem("cartPrice");
  if (persistedCart && persistedPrice) {
    cartMovies = JSON.parse(persistedCart);
    sum = JSON.parse(persistedPrice);
    toDouble();
    renderCart();
  }
});

// EVENT LISTENERS

cartArrowContainer.addEventListener("click", () => {
  cartContainer.classList.remove("visible");
});

mainEl.addEventListener("click", () => {
  cartContainer.classList.remove("visible");
});

cartSummary.addEventListener("click", () => {
  cartContainer.classList.add("visible");
  cartWrapper.textContent = "";
  renderCart();
});

cities.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-active")) {
      moviesList.textContent = "";
      button.classList.remove("btn-active");
      listMovies();
    } else {
      button.classList.add("btn-active");
      moviesList.textContent = "";
      listMovies();
    }
  });
});

// FUNCTIONS

function toDouble() {
  if (sum == 0) {
    cartSum.textContent = "0.00 €";
  } else {
    cartSum.textContent = Math.round(sum * 100) / 100 + " €";
  }
}

function persistData() {
  window.localStorage.setItem("cartMovies", JSON.stringify(cartMovies));
  window.localStorage.setItem("cartPrice", JSON.stringify(sum));
}

function renderMovie(city) {
  movies.forEach((singleMovie) => {
    let timeArr = [];
    if (singleMovie.city === city) {
      const movieContainerEl = document.createElement("div");
      const movieDetailsEl = document.createElement("div");
      const movieDescEl = document.createElement("h2");
      const movieGenreContainerEl = document.createElement("div");
      const movieLengthContainerEl = document.createElement("div");
      const movieCastContainerEl = document.createElement("div");
      const moviePriceContainerEl = document.createElement("div");
      const movieGenreImageEl = document.createElement("i");
      const movieLengthImageEl = document.createElement("i");
      const movieCastImageEl = document.createElement("i");
      const moviePriceImageEl = document.createElement("i");
      const movieGenreEl = document.createElement("h3");
      const movieLengthEl = document.createElement("h3");
      const movieCastEl = document.createElement("h3");
      const moviePriceEl = document.createElement("h3");
      const addToCartBtn = document.createElement("button");
      const countInput = document.createElement("input");
      const imageContainerEl = document.createElement("div");
      const imageEl = document.createElement("img");
      const movieInfoEl = document.createElement("div");
      const movieTitleEl = document.createElement("h1");
      const movieCityEl = document.createElement("h2");
      const movieTimeContainer = document.createElement("div");

      movieDescEl.textContent = singleMovie.desc;
      movieGenreEl.textContent = singleMovie.genre;
      movieLengthEl.textContent = singleMovie.duration;
      movieCastEl.textContent = singleMovie.cast;
      moviePriceEl.textContent = singleMovie.price;
      movieTitleEl.textContent = singleMovie.title;

      movieCityEl.textContent = singleMovie.city;
      addToCartBtn.textContent = "Į krepšelį";

      countInput.type = "number";
      countInput.value = 1;
      countInput.min = 1;
      imageEl.src = singleMovie.imageUrl;

      movieContainerEl.classList.add("movie-container");
      movieDetailsEl.classList.add("movie-inside");
      movieDescEl.classList.add("movie-desc");
      imageEl.classList.add("movie-image");
      movieTitleEl.classList.add("movie-title");
      addToCartBtn.classList.add("btn", "btn-cart");
      countInput.classList.add("input");
      movieGenreImageEl.classList.add("fa-regular", "fa-face-smile");
      movieLengthImageEl.classList.add("fa-regular", "fa-clock");
      movieCastImageEl.classList.add("fa-regular", "fa-user");
      moviePriceImageEl.classList.add("fa-solid", "fa-euro-sign");

      movieGenreContainerEl.append(movieGenreImageEl, movieGenreEl);
      movieLengthContainerEl.append(movieLengthImageEl, movieLengthEl);
      movieCastContainerEl.append(movieCastImageEl, movieCastEl);
      moviePriceContainerEl.append(moviePriceImageEl, moviePriceEl);
      imageContainerEl.append(imageEl);
      movieInfoEl.append(movieTitleEl);

      for (let i = 0; i < singleMovie.date.length; i++) {
        let date = singleMovie.date[i];
        const movieTimeBtn = document.createElement("button");
        movieTimeBtn.textContent = date;
        movieTimeBtn.classList.add("btn", "btn-time");
        movieTimeContainer.append(movieTimeBtn);
        timeArr.push(movieTimeBtn);
      }
      movieInfoEl.append(movieTimeContainer);

      for (let i = 0; i < timeArr.length; i++) {
        let time = timeArr[i];

        time.addEventListener("click", () => {
          if (time.classList.contains("btn-active")) {
            time.classList.remove("btn-active");
          } else {
            // Deactivates every active button, so only one button can be active at a time
            for (let j = 0; j < timeArr.length; j++) {
              let time2 = timeArr[j];
              if (time2.classList.contains("btn-active")) {
                time2.classList.remove("btn-active");
              }
            }
            time.classList.add("btn-active");
          }
        });
      }
      movieInfoEl.append(movieCityEl);
      movieDetailsEl.append(
        movieDescEl,
        movieGenreContainerEl,
        movieLengthContainerEl,
        movieCastContainerEl,
        moviePriceContainerEl,
        addToCartBtn,
        countInput
      );
      movieContainerEl.append(movieDetailsEl, imageContainerEl, movieInfoEl);
      moviesList.append(movieContainerEl);

      addToCartBtn.addEventListener("click", () => {
        let chosenTime = "";
        for (let i = 0; i < timeArr.length; i++) {
          if (timeArr[i].classList.contains("btn-active")) {
            chosenTime = timeArr[i].textContent;
          }
        }
        if (chosenTime !== "") {
          let price = countInput.value * singleMovie.price;
          sum += price;
          toDouble();
          persistData();
          if (
            cartMovies.some(
              (movie) =>
                movie.title === singleMovie.title && movie.date === chosenTime
            )
          ) {
            let movieAmount = Number(
              cartMovies.find(
                (movie) =>
                  movie.title === singleMovie.title && movie.date === chosenTime
              ).amount
            );
            cartMovies.find(
              (movie) =>
                movie.title === singleMovie.title && movie.date === chosenTime
            ).amount = movieAmount += Number(countInput.value);
            cartWrapper.textContent = "";
            renderCart();
          } else {
            const cartItem = {
              ["title"]: singleMovie.title,
              ["city"]: singleMovie.city,
              ["date"]: chosenTime,
              ["price"]: singleMovie.price,
              ["amount"]: countInput.value,
              ["imageUrl"]: singleMovie.imageUrl,
            };
            cartMovies.push(cartItem);
            cartWrapper.textContent = "";
            renderCart();
          }
        } else {
          alert("PASIRINKITE SEANSO LAIKĄ");
        }
      });
    }
  });
}

function renderCart() {
  if (cartMovies.length == 0) {
    cartWrapper.textContent = "";
    const cartItemContainer = document.createElement("div");
    const cartItemName = document.createElement("h2");
    cartItemContainer.className = "cart-item-empty";
    cartItemName.textContent = "Jūsų krepšelis yra tuščias!";
    cartItemContainer.append(cartItemName);
    cartWrapper.append(cartItemContainer);
    btnCheckout.classList.add("hidden");
  } else {
    cartMovies.forEach((cartMovie) => {
      btnCheckout.classList.remove("hidden");
      const cartItemContainer = document.createElement("div");
      const cartImage = document.createElement("img");
      const cartItemDetails = document.createElement("div");
      const cartItemName = document.createElement("h2");
      const cartItemCity = document.createElement("p");
      const cartItemTime = document.createElement("p");
      const cartItemPrice = document.createElement("h2");
      const cartItemAmountContainer = document.createElement("div");
      const cartItemAmount = document.createElement("p");
      const cartCountInput = document.createElement("input");
      const cartItemDeleteEl = document.createElement("i");

      cartImage.src = cartMovie.imageUrl;
      cartItemPrice.textContent =
        Math.round(cartMovie.price * cartMovie.amount * 100) / 100 + " €";
      +" €";

      cartItemName.textContent = cartMovie.title;
      cartItemCity.textContent = cartMovie.city;
      cartItemTime.textContent = cartMovie.date;

      cartItemAmount.textContent = "Kiekis:";

      cartCountInput.type = "number";
      cartCountInput.value = cartMovie.amount;
      cartCountInput.min = 1;
      cartCountInput.onchange = function () {
        let temp = cartMovie.amount;
        cartMovie.amount = cartCountInput.value;
        let price = 1 * cartMovie.price;
        if (temp < cartCountInput.value) {
          sum += price;
        } else {
          sum -= price;
        }

        if (sum == 0) {
          cartSum.textContent = "0.00 €";
        } else {
          toDouble();
          cartItemPrice.textContent =
            Math.round(cartMovie.amount * cartMovie.price * 100) / 100 + " €";
        }
        persistData();
      };

      cartItemContainer.className = "cart-item";
      cartImage.className = "cart-image";
      cartItemDetails.className = "cart-item-details";
      cartItemAmountContainer.className = "cart-amount";
      cartCountInput.className = "input-cart";
      cartItemDeleteEl.classList.add("fa-solid", "fa-x");

      cartItemAmountContainer.append(cartItemAmount, cartCountInput);
      cartItemDetails.append(
        cartItemName,
        cartItemCity,
        cartItemTime,
        cartItemPrice,
        cartItemAmountContainer
      );
      cartItemContainer.append(cartImage, cartItemDetails, cartItemDeleteEl);

      cartWrapper.append(cartItemContainer);

      cartItemDeleteEl.addEventListener("click", () => {
        cartMovies.splice(cartMovies.indexOf(cartMovie), 1);
        let price = cartCountInput.value * cartMovie.price;
        sum -= price;
        toDouble();
        persistData();
        cartWrapper.textContent = "";
        renderCart();
      });
    });
    persistData();
  }
}

function listMovies() {
  if (
    !buttonKaunas.classList.contains("btn-active") &&
    !buttonVilnius.classList.contains("btn-active") &&
    !buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Vilnius");
    renderMovie("Kaunas");
    renderMovie("Klaipėda");
  } else if (
    !buttonKaunas.classList.contains("btn-active") &&
    !buttonVilnius.classList.contains("btn-active") &&
    buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Klaipėda");
  } else if (
    !buttonKaunas.classList.contains("btn-active") &&
    buttonVilnius.classList.contains("btn-active") &&
    !buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Vilnius");
  } else if (
    buttonKaunas.classList.contains("btn-active") &&
    !buttonVilnius.classList.contains("btn-active") &&
    !buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Kaunas");
  } else if (
    !buttonKaunas.classList.contains("btn-active") &&
    buttonVilnius.classList.contains("btn-active") &&
    buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Vilnius");
    renderMovie("Klaipėda");
  } else if (
    buttonKaunas.classList.contains("btn-active") &&
    buttonVilnius.classList.contains("btn-active") &&
    !buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Vilnius");
    renderMovie("Kaunas");
  } else if (
    buttonKaunas.classList.contains("btn-active") &&
    !buttonVilnius.classList.contains("btn-active") &&
    buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Kaunas");
    renderMovie("Klaipėda");
  } else if (
    buttonKaunas.classList.contains("btn-active") &&
    buttonVilnius.classList.contains("btn-active") &&
    buttonKlaipeda.classList.contains("btn-active")
  ) {
    renderMovie("Kaunas");
    renderMovie("Klaipėda");
    renderMovie("Vilnius");
  }
}
