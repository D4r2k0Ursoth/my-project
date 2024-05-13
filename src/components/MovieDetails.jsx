import React, { useState } from 'react';

function MovieDetail({ movie }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const trailerUrl = movie.trailerUrl; // Debes obtener la URL del trailer de tu API

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        // Aquí podrías abrir un modal o una ventana emergente para reproducir el video
        // También podrías utilizar una librería de reproductores de video como react-player
        // Para simplificar, mostraré un mensaje en la consola cuando se presione el botón Play
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
                    <button onClick={handlePlayButtonClick} className="flex font-bold text-xl bg-white text-black px-16 py-5 rounded"><svg className='mt- ' width="20" height="20" viewBox="0 0 358 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 369V0L358 205L0 369Z" fill="black" />
                    </svg>Play</button>
                </div>
                <div>
                    <button className="bg-black px-20 py-5 rounded">
                        <span className="text-lg font-bold text-white"> More Info</span>
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