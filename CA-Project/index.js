const myCar = [
  {
    title: "Filmo pavadinimas",
    date: ["12:00", "14:00", "17:00"],
    city: "Vilnius",
    desc: "Lorem ipsum dolor sit ameus dolores suscipit, beatae quam enim. Accusamus vitae error exercitationem.",
    genre: "Siaubo, trileris",
    duration: "2h 20min",
    cast: "Jonas Jonaitis, Petras Petraitis",
    price: 5.99,
    imageUrl:
      "https://www.59e59.org/media/filer_public_thumbnails/filer_public/6f/7b/6f7b8c01-950b-415c-97ea-3fd51b57d632/memory_exam_thumbnail_sold_out.jpg__360x540_q85_crop_subsampling-2_upscale.jpg",
  },
  {
    title: "Joker",
    date: ["12:00", "14:00", "17:00", "18:00"],
    city: "Kaunas",
    desc: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    genre: "Drama, trileris, kriminalinis",
    duration: "2h 20min",
    cast: "Joaquin Phoenix",
    price: 5.99,
    imageUrl:
      "https://www.dramamilk.com/wp-content/uploads/2019/10/Joker-movie-dominates-Korean-box-office-thumbnail.jpg-copy.jpg",
  },
  {
    title: "Fight Club",
    date: ["12:00", "14:00", "17:00", "18:00"],
    city: "Vilnius",
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    genre: "Drama",
    duration: "2h 20min",
    cast: "Bradd Pitt, Edward Norton",
    price: 5.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
  },
  {
    title: "Scarface",
    date: ["12:00"],
    city: "Vilnius",
    desc: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    genre: "Drama, Kriminalinis",
    duration: "2h 02min",
    cast: "Al Pacino, Michelle Pfeiffer, Steven Bauer",
    price: 5.99,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
];

const moviesList = document.querySelector(".movie-list-container");

myCar.forEach((singleMovie) => {
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
  movieGenreImageEl.classList.add("fa-regular", "fa-face-smile");
  movieLengthImageEl.classList.add("fa-regular", "fa-clock");
  movieCastImageEl.classList.add("fa-regular", "fa-user");
  moviePriceImageEl.classList.add("fa-solid", "fa-euro-sign");

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

  movieDescEl.textContent = singleMovie.desc;
  movieGenreEl.textContent = singleMovie.genre;
  movieLengthEl.textContent = singleMovie.duration;
  movieCastEl.textContent = singleMovie.cast;
  moviePriceEl.textContent = singleMovie.price;
  movieTitleEl.textContent = singleMovie.title;

  movieCityEl.textContent = singleMovie.city;
  addToCartBtn.textContent = "Į krepšelį";

  countInput.type = "number";
  countInput.placeholder = "1";
  imageEl.src = singleMovie.imageUrl;

  movieContainerEl.classList.add("movie-container");
  movieDetailsEl.classList.add("movie-inside");
  movieDescEl.classList.add("movie-desc");
  imageEl.classList.add("movie-image");
  movieTitleEl.classList.add("movie-title");

  addToCartBtn.classList.add("btn", "btn-cart");
  countInput.classList.add("input");

  movieGenreContainerEl.append(movieGenreImageEl, movieGenreEl);
  movieLengthContainerEl.append(movieLengthImageEl, movieLengthEl);
  movieCastContainerEl.append(movieCastImageEl, movieCastEl);
  moviePriceContainerEl.append(moviePriceImageEl, moviePriceEl);
  imageContainerEl.append(imageEl);
  movieInfoEl.append(movieTitleEl);
  for (let i = 0; i < singleMovie.date.length; i++) {
    const movieTimeBtn = document.createElement("button");
    movieTimeBtn.textContent = singleMovie.date[i];
    movieTimeBtn.classList.add("btn", "btn-time");
    movieInfoEl.append(movieTimeBtn);
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
});
