import React, { useState } from 'react';

function MovieDetail({ movie, img1, img2}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const trailerUrl = movie.trailerUrl; // Debes obtener la URL del trailer de tu API

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        // Aquí abrir un modal o una ventana emergente para reproducir el video
        // librería de reproductores de video como react-player
        
        console.log('Reproducir video...');
    };

    return (
        <div className=" relative p-8">
            <div className='text-red-600'>
                <span className='font-sans font-bold text-4xl grid text-balance'>TRAILER</span>
                <span className='font-sans font-normal text-4xl'>WATCH</span>
            </div>
            <section className='mt-10'>
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            <div className='mt-10 flex'>
                <div className='pr-4'>
                    <button onClick={handlePlayButtonClick} className="flex font-bold text-xl bg-white text-black px-16 py-5 rounded"><img className='mr-5' src={`${img2}`} alt='event' /><span>Play</span></button>
                </div>
                <div >
                    <button className="bg-black px-16 py-5 rounded">
                        <span className="flex text-lg font-bold text-white"><img className='mr-4'  src={`${img1}`} alt='event' /> More Info</span>
                    </button>
                </div>
            </div>
            <section>
            <div className='mt-10 w-[30%] '>
                <p className=" text-sm font-sans text-balance overflow-hidden line-clamp-3">{movie.overview}</p>
            </div>
            </section>
            </section>
        </div>
    );
}

export default MovieDetail;