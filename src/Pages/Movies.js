import { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import "../Styles/Movies.css";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState([true])

  const promises = props.movie.characters.map((url) =>
    fetch(url).then((res) => res.json())
  );

  // useEffect(() => {
  //   Promise.all(promises).then((res) => {
  //     setCharacters(res),
  //     setLoading(false)
  //   }), [isOpen]});

    useEffect(() => {
      Promise.all(promises).then((res) => { 
          setCharacters(res) 
          setLoading(false) 
      })    
  },[isOpen]);

  return (
    <div className="moviesContent">
        <button className="moviesButton" onClick={() => setIsOpen(true)}> {props.movie.title} | {props.movie.release_date}</button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <h2>{props.movie.title}</h2>
        
              {loading && <div>Loading...</div>}

              {characters.sort((a,b) => a.name > b.name ? 1 : -1).map((char, index) =>
              <p className="characters"key={index} > {char.name} </p>
              )}
          </Modal>
    </div>
  );
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const url = ("https://swapi.dev/api/films/")
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((movies) => setMovies(movies.results),
      setLoading(false));
  }, []);

  return (
    <>
    <div>
      {loading && <div>Loading...</div>}
      {movies.map((movie) => (
        <Characters key={movie.episode_id} movie={movie} />
      ))}
    </div>
    </>
  );
};

export default Movies;