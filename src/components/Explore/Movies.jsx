import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import MovieCard from '../common/MovieCard'


function Movies() {
    const { data, loading, error } = useFetch("/movie/popular")
    const [limit, setLimit] = useState(11)


    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    }

    // we need to do an api call here :)
    return (
        <div>
            <h1 className="text-2xl">Explore Movies</h1>
            <br />
            <div className='grid grid-cols-6 gap-4 mx-10'>
                {data.slice(0, limit).map((movie, index) => {
                    return <MovieCard
                        id={movie.id}
                        overview={movie.overview}
                        popularity={movie.popularity}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        key={index}
                    />
                })}
                <MovieCard
                    id={"wef wef edfs"}
                    overview={"Explore more movies"}
                    popularity={"Explore Now"}
                    poster_path={"https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"}
                    title={"CineMate"}
                />
            </div>
            <br />
            <div className='flex justify-center items-center'>
                <button
                    onClick={() => setLimit(limit + 6)}
                >Load More</button>
            </div>
        </div>
    )
}

export default Movies