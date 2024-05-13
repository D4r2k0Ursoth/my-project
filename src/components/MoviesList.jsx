import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MovieList({ onMovieSelect }) {
    const [movieList, setMovieList] = React.useState([]);

    React.useEffect(() => {
        getMovie();
    }, []);

    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=1393e34c469c8fe32ecf5e8d153a609f')
            .then(res => res.json())
            .then(json => {
                setMovieList(json.results);
                if (json.results.length > 0) {
                    onMovieSelect(json.results[0]);
                }
            });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const handleMovieClick = (movie) => {
        onMovieSelect(movie);
    };
    return (
        <div className="absolute bottom-0 left-0 right-0">
            <div className="overflow-hidden">
                <div><h2 className="select-none ml-8 font-sans text-xl font-bold">New Releases</h2></div>
                <section>
                    <Slider {...settings}>
                        {movieList.map((movie) => (
                            <div key={movie.id} className='m-2 transition-transform hover:scale-105' onClick={() => handleMovieClick(movie)}>
                                <div className='relative bg-cover bg-center bg-no-repeat rounded w-[96%] h-40' style={{ 
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                                    backgroundSize: 'cover', // Agregar esta línea para mantener la relación de aspecto y calidad de la imagen
                                }}></div>
                            </div>
                        ))}
                    </Slider>
                </section>
            </div>
        </div>
    );
}
export default MovieList;