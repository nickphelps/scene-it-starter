document.addEventListener('DOMContentLoaded', function () {
    let myWatchList = localStorage.getItem('watchlist')
    let myWatchListJSON = JSON.parse(myWatchList)
    console.log(myWatchListJSON)
    $('#movies-container').html('<div class="card-columns">' + renderMovies(myWatchListJSON) + '</div>')
    function renderMovies (movieArray) {
        let movieHTML = movieArray.map(function (myWatchListJSON) {
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
                    <a onclick="saveToWatchlist('${myWatchListJSON.imdbID}')" href="#" class="btn btn-primary">Remove!</a>
                </div>
            </div>
            `
            return movieStringHTML
            
        })//map function
        return movieHTML.join('')
    }//render movies
})



