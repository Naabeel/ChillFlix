// import { startTransition } from "react";
// import react from 'react';
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from './Banner';
import Nav from "./Nav";
// import './Nav.css'; 

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="Netflix originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetcgHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
