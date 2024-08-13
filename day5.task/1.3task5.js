class Movie {
    constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    
    static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
    }
    }
    
  
    const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
    const movie2 = new Movie("Finding Nemo", "Pixar", "PG");
    const movie3 = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
    const movie4 = new Movie("Toy Story", "Pixar", "PG");
    
    const movies = [movie1, movie2, movie3, movie4];
    const pgMovies = Movie.getPG(movies);
    
    console.log(pgMovies); // [ Movie { title: 'Finding Nemo', studio: 'Pixar', rating: 'PG' }, Movie { title: 'Toy Story', studio: 'Pixar', rating: 'PG' } ]