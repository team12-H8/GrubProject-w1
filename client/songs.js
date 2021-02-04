let baseUrl = 'http://localhost:3000'

$('#searchBtn').click(function(e) {
  e.preventDefault()

  let query = encodeURIComponent($('#search').val())
  $.ajax({
    method: 'GET',
    url: `${baseUrl}/song/search?q=${query}`,
  })
    .done(function(response) {
      $('#songCard').empty()
      response.forEach(song => {
        $('#songCard').append(`
        <div class="card shadow" style="width: 22rem;">
          <img src="${song.artworkUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h3 class="card-title">${song.title}</h3>
            <p class="card-text song-artist"><b>Artist:</b> ${song.artist}</p>
            <p class="card-text song-album"><b>Album:</b> ${song.album}</p>
            <p class="card-text song-genre"><b>Genre:</b> ${song.genre}</p>
            <audio controls>
              <source src="${song.previewUrl}" type="audio/ogg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        `)
      })
    })
    .fail(err=>{
      console.log(err, '=> error')
    })
    .always( () => {
      encodeURIComponent($('#search').val(''))
    })
})