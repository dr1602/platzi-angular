import { Component } from '@angular/core';

type Movie = {
  name: string;
  maxTickets: number;
  quantity: number;
  noMoreAllowed: boolean;
  noLessAllowed: boolean;
};

type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String = 'Peliculas';
  movies: Movies = [
    {
      name: 'Revengers',
      maxTickets: 12,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'Spuder Moon',
      maxTickets: 10,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'Baturu Man',
      maxTickets: 8,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'Journey Rabbit',
      maxTickets: 2,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'Blue Penter',
      maxTickets: 3,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'River Gens, Mid Game',
      maxTickets: 5,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
    {
      name: 'Finally, The One Piece',
      maxTickets: 10,
      quantity: 0,
      noMoreAllowed: false,
      noLessAllowed: false,
    },
  ];

  addMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName,
    );

    if (
      this.movies[movieIndex].quantity <= this.movies[movieIndex].maxTickets
    ) {
      this.movies[movieIndex].quantity += 1;
      this.movies[movieIndex].noLessAllowed = false;
    } else {
      this.movies[movieIndex].noMoreAllowed = true;
    }
  }

  removeMovieQuantity(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName,
    );

    if (this.movies[movieIndex].quantity > 0) {
      this.movies[movieIndex].quantity -= 1;
      this.movies[movieIndex].noMoreAllowed = false;
    } else {
      this.movies[movieIndex].noLessAllowed = true;
    }
  }
}
