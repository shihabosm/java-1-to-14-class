// var num = "1010";

// console.log(parseInt(num, 4)); // Output: 10
// 
const findFavoriteMovie = (movieTitle, movieYear, arrOfMovies) => {
  
    for (let i = 0; i < arrOfMovies.length; i++) {
        
        if (arrOfMovies[i].title === movieTitle && arrOfMovies[i].year === movieYear) {
            
            return arrOfMovies[i];
        }
    }
    
    return null;
}

const arrOfMovies = [
    { 
        title: 'Star Wars', 
        director: 'George Lucas', 
        year: 1977
    },
    { 
        title: 'The Dark Knight', 
        director: 'Christopher Nolan', 
        year: 2008
    }
];

// Sample input
const movieTitle = 'Star Wars';
const movieYear = 1977;

// Call the function with the sample input
console.log(findFavoriteMovie(movieTitle, movieYear, arrOfMovies));
