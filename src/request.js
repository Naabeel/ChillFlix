const API_KEY = "4a9517a5e59794c14b5afb567b3d0ba1";

const requests ={
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals  : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated   : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies     : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies       : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetcgHorrorMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries  : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;