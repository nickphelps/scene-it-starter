document.addEventListener('DOMContentLoaded', function () {
  let myWatchList = localStorage.getItem('watchlist')
  let myWatchListJSON = JSON.parse(myWatchList)

  movieData = myWatchListJSON

  $('#movies-container').html('<div class="card-columns">' + renderMovies(myWatchListJSON) + '</div>')

  function renderMovies (movieArray) {
    console.log(movieArray)
    let movieHTML = movieArray.map(function (myWatchListJSON) {
      console.log(myWatchListJSON)
      let movieStringHTML = `
            <div class="card bg-dark text-white">
                <img class="card-img-top" src="${myWatchListJSON.Poster}" alt="${myWatchListJSON.Title}">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">${myWatchListJSON.Title}</h5>
                    </div>
                    <div>
                        <h5 class="movie-year">${myWatchListJSON.Year}</h5>
                    </div>
                    <button onclick="removeFromWatchlist('${myWatchListJSON.imdbID}')" type="button" class="btn btn-primary btn-lg btn-block">Remove from Watchlist</button>
                </div>
            </div>
            `
      return movieStringHTML
    })// map function
    return movieHTML.join('')
  }// render movies
})

function removeFromWatchlist (imdbID) {
  // clicked on movie data is stored to movie

  let watchlistJSON = localStorage.getItem('watchlist')
  let watchlist = JSON.parse(watchlistJSON)
  console.log(watchlist)
  if (watchlist == null) {
    watchlist = []
  } // if statement
  // create new array for all elements in watchlist that do not have selected imdbID
  watchlist = watchlist.filter(function (movie) {
    return movie.imdbID !== imdbID
  })// watchlist filter

  watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem('watchlist', watchlistJSON)

  $('#movies-container').html('<div class="card-columns">' + renderMovies(watchlist) + '</div>')
}// remove from Watch List
