
document.addEventListener('DOMContentLoaded', function () {

    //reset watchlist
    // localStorage.setItem('watchlist', '')
    
    function renderMovies (movieData) {
        let movieHTML = movieData.map(function (currentMovie) {
            console.log(currentMovie)
            let movieStringHTML = `
            <div class="card bg-dark text-white">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                    </div>
                    <div>
                        <h5 class="movie-year">${currentMovie.Year}</h5>
                    </div>
                    <a onclick="saveToWatchlist('${currentMovie.imdbID}')" href="#" class="btn btn-primary">Add!</a>
                </div>
            </div>
            `
            return movieStringHTML
        })//map function
        return movieHTML.join('')
    }//render movies

    document.getElementById('search-form').addEventListener('input', function(e) {
        e.preventDefault()

        let searchString = $('.search-bar').val().toLowerCase()
        //formats searchstring to acceptable url format
        let urlEncodedSearchString = encodeURIComponent(searchString)
        //passing searchstring into API
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function (response) {
                console.log(response.data)
                //rendering movies to movie container
        $('#movies-container').html('<div class="card-columns">' + renderMovies(response.data.Search) + '</div>')
                movieData = response.data.Search
        // return responseMovieData
        
            })//then
            
        // let filteredData = movieData.filter(function (currentMovie) {
        //     let foundInTitle = currentMovie.Title.toLowerCase().indexOf(searchString) > -1
        //     return foundInTitle
        // })//filteredData

    })//form event listener

})//DOM Content Loaded

function saveToWatchlist(imdbID) {
    let movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID
    })
    // console.log(imdbID)
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    if (watchlist == null) {
        watchlist = []
    } //if statement
        watchlist.push(movie)
        watchlistJSON = JSON.stringify(watchlist)
        localStorage.setItem('watchlist', watchlistJSON)
      
    console.log(watchlist)
}//saveToWatchList

