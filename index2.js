'use strict';

class RentMovies {
  static name = 'Great choice movies rental';

  constructor(moviesName, movie = '') {
    this.moviesName = moviesName;
    this.movie = movie;
    this.outGoingMovie = [];
  }

  greet() {
    return `Welcome to ${RentMovies.name}`;
  }

  confirmIfAvailable(movie) {
    return this.moviesName.includes(movie);
  }

  rentOut(customerName, rentedMovie, address, dateRented) {
    console.log(this.greet());
    if (this.confirmIfAvailable(rentedMovie)) {
      const getDetails = {
        customerName: customerName,
        address: address,
        rentedMovie: rentedMovie,
        dateRented: dateRented,
      };
      this.outGoingMovie.push(getDetails);
      this.moviesName = this.moviesName.filter((item) => item !== rentedMovie);

      return `Thank you for trusting ${RentMovies.name} for your desired movies`;
    } else {
      return `We don't have the requested movie, please check for another movie`;
    }
  }

  returnedMovie(movie) {
    this.moviesName = this.moviesName.push(movie);
    this.outGoingMovie = this.outGoingMovie.filter(
      (item) => item.rentedMovie !== movie
    );
    return `Thank you for returning the movie you rented`;
  }

  checkAvailableMovies() {
    return this.moviesName.forEach((movies) => console.log(movies));
  }

  checkMoviesRentedOut() {
    return this.outGoingMovie.forEach((movies) =>
      console.log(movies.customerName)
    );
  }
}

let moviesInStock = [
  'lord of the ring',
  'the arrows',
  'avengers',
  'titanic',
  'the game changer',
];
const rentMovies = new RentMovies(moviesInStock);

const customer1 = rentMovies.rentOut(
  'williams',
  'the arrows',
  '11 queens valley',
  '12 october 2024'
);
const customer2 = rentMovies.rentOut(
  'chidi',
  'titanic',
  '15 Robinson valley',
  '12 january 2024'
);
console.log(customer1);
console.log(rentMovies.returnedMovie('the arrows'));
