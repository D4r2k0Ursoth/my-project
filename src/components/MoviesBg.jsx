import React from 'react';

function MoviesBg({ selectedMovie }) {
    const backgroundImageStyle = {
        backgroundImage: selectedMovie ? `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full" style={backgroundImageStyle}></div>
    );
}

export default MoviesBg;
