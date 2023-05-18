import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";

import axios from "./axios";
import './Row.css';


const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl]= useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  // console.log();

  const opts = {
    height: "390" ,
    width: "100%",
    playerVars :{
      autoplay:1
    }
  }

  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);

        setTrailerUrl(urlParams.get('v')) ;
      }).catch((err)=>{
        console.log(err);
      })
    }

  }
 console.log(trailerUrl)
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          // console.log(movie);
          
           <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
           onClick={()=>handleClick(movie)}
          src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
           alt={movie.name} 
           key={movie.id} 
           />
        ))}
        
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;


