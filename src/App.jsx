// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './components/MoviesList.jsx';
import MovieDetail from './components/MovieDetails.jsx';
import MoviesBg from './components/MoviesBg.jsx';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=1393e34c469c8fe32ecf5e8d153a609f')
            .then(res => res.json())
            .then(json => {
                setMovieList(json.results);
                // Seleccionar automáticamente el primer elemento de la lista
                if (json.results.length > 0) {
                    setSelectedMovie(json.results[0]);
                }
            });
    };

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-800 text-white">
                <MoviesBg selectedMovie={selectedMovie} />
                <MovieList movieList={movieList} onMovieSelect={handleMovieSelect} />
                {selectedMovie && <MovieDetail movie={selectedMovie} />}
            </div>
        </div>
    );
}

export default App;
