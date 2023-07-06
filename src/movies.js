// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(potatoArray) {
    let filteredpotatoArray = potatoArray.map(apple => apple.director)
    return filteredpotatoArray
    }

    /*  if (apple.director.indexOf(word) === apple.director.lastIndexOf(word)) {
      return apple.director;*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(potatoArray) {
    let filteredpotatoArray = potatoArray.filter(apple => apple.director === "Steven Spielberg" && apple.genre.includes("Drama"))
    return filteredpotatoArray.length   
   }
           
 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(potatoArray) {
    if (!potatoArray.length) {return 0}

      let scores = potatoArray.reduce((sum, apple) => {
        if(!apple.score) {
          return sum}
        else {return apple.score + sum}
    }, 0)

      let averageScore = scores / potatoArray.length

      return Math.round((averageScore) * 100) / 100
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(potatoArray) {
    let filteredDramaScores = potatoArray.filter(apple => apple.genre.includes("Drama"))
      return scoresAverage(filteredDramaScores)
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayFilteredByYear = moviesArray.map(movie => movie)

    let filteredmoviesArray = arrayFilteredByYear.sort(
        function (a, b) {
            if (a.year > b.year) return 1 
            if (a.year < b.year) return -1 
            if (a.title[0] > b.title[0]) return 1
            else return -1
        })
        return arrayFilteredByYear
    }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = [];
    for (let i = 0; i < moviesArray.length ; i++) {
      titleArray.push(moviesArray[i].title); 
    }
    const sortedArray = titleArray.sort();
    const reducedArray = sortedArray.slice(0, 20);
    return reducedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
