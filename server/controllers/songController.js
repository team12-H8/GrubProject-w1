const axios = require("axios");
const iTunesAPI = "https://itunes.apple.com/search";

class Controller {
  static searchSong(req, res, next) {
    axios
      .get(iTunesAPI, {
        params: {
          term: req.query.q,
          limit: 6,
          media: "music",
        },
      })
      .then((response) => {
        let songs = response.data.results.filter(
          (data) => data.kind === "song"
        );
        let results = songs.map((song) => {
          return {
            title: song.trackName,
            artist: song.artistName,
            album: song.collectionName,
            genre: song.primaryGenreName,
            releaseDate: song.releaseDate,
            trackId: song.trackId,
            previewUrl: song.previewUrl,
            artworkUrl: song.artworkUrl100,
            trackTimeMillis: song.trackTimeMillis,
          };
        });
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          next({ name: "NotFound" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Controller;
