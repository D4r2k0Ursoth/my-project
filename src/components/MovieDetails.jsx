import React, { useState } from 'react';

function MovieDetail({ movie, img1, img2,img3,text3,text4}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const trailerUrl = movie.trailerUrl; // Debes obtener la URL del trailer de tu API

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        // Aquí abrir un modal o una ventana emergente para reproducir el video
        // librería de reproductores de video como react-player
        
        console.log('Reproducir video...');
    };

    return (
        <div className=" relative p-7">
            <div>
                <img className='mr-2'src={`${img3}`} alt='event' />
            </div>
            <section className='mt-8'>
            <h2 className="select-none text-3xl font-bold mb-4">{movie.title}</h2>
            <div className='flex'>
                <div className='flex select-none'>
                    <button onClick={handlePlayButtonClick} className="flex font-extrabold text-sm bg-white text-black px-5 py-2.5 rounded"><img className='mr-2 mt-1' src={`${img2}`} alt='event' /><span>{text3}</span></button>
                <div >
                    <button className="ml-2 bg-black px-6 py-2.5 rounded">
                        <div className='flex container'><span className="flex text-nowrap text-sm font-bold text-white"><img className='mr-2'src={`${img1}`} alt='event' />{text4}</span></div>
                   </button>
                </div>
                </div>
            </div>
            <section>
            <div className='mt-4 w-[40%] '>
                <p className="select-none text-ls font-ligth text-balance overflow-hidden line-clamp-3">{movie.overview}</p>
            </div>
            </section>
            </section>
        </div>
    );
}

export default MovieDetail;