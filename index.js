document.addEventListener('DOMContentLoaded', function () {

    // let movieContainer = document.getElementById('movies-container')
    // movieContainer.innerHTML = renderMovies(movieData)
    function renderMovies (movieArray) {
        let movieHTML = movieArray.map(function (currentMovie) {
            let movieStringHTML = `
            <div class="card">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <h5>${currentMovie.Year}</h5>
                    </div>
                    <a href="#" class="btn btn-primary">Add!</a>
                </div>
            </div>
            `
            return movieStringHTML
            
        })//map function
        return movieHTML.join('')
    }//render movies
    
    

    document.getElementById('search-form').addEventListener('input', function(e) {
        e.preventDefault()
        let userInput = $('.search-bar').val().toLowerCase()
        console.log( userInput )
            
        let filteredData = movieData.filter(function (currentMovie) {
            let foundInTitle = currentMovie.Title.toLowerCase().indexOf(userInput) > -1
            return foundInTitle
        })//filteredData
        
        console.log( filteredData )
        $('#movies-container').html('<div class="card-columns">' + renderMovies(filteredData) + '</div>')

    })//form event listener

})//DOM Content Loaded
