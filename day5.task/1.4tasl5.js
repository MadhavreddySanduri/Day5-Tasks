class Movie {
    constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
  
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
    
    console.log(casinoRoyale); 
    // Output: Movie { title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG-13' }