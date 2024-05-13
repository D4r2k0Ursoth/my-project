import React from 'react';

function MovieDetail({ movie, img1, img2, img3, text3, text4 }) {
    return (
        <div className='relative p-7'>
            <div>
                <img className='mr-2' src={`${img3}`} alt='event' />
            </div>
            <section className='mt-36'>
                <h2 className='select-none text-5xl font-bold mb-4'>{movie.title}</h2>
                <div className='flex'>
                    <div className='flex select-none'>
                        <button className='flex font-extrabold text-sm bg-white text-black px-5 py-2.5 rounded hover:bg-gray-200 hover:text-black'>
                            <img className='mr-2 mt-1' src={`${img2}`} alt='event' />
                            <span>{text3}</span>
                        </button>
                        <div>
                            <button className='ml-2 bg-black px-6 py-2.5 rounded hover:bg-gray-800 hover:text-white'>
                                <div className='flex container'>
                                    <span className='flex text-nowrap text-sm font-bold text-white'>
                                        <img className='mr-2' src={`${img1}`} alt='event' />
                                        {text4}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='mt-4 w-[40%]'>
                        <p className="select-none text-sm font-ligth text-balance overflow-hidden line-clamp-3">{movie.overview}</p>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default MovieDetail;
