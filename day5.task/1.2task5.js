class Movie {
    constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    // Example usage:
    const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
    const movie2 = new Movie("Finding Nemo", "Pixar");
    
    console.log(movie1); // Movie { title: 'Inception', studio: 'Warner Bros.', rating: 'PG-13' }
    console.log(movie2); // Movie { title: 'Finding Nemo', studio: 'Pixar', rating: 'PG' }