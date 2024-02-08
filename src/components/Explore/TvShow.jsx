import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import MovieCard from '../common/MovieCard'

function TvShow() {
    const { data, loading, error } = useFetch("/tv/popular")
    const [limit, setLimit] = useState(6)


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
            <h1 className="text-2xl">Explore Tv Shows</h1>
            <br />
            <div className='grid grid-cols-6 gap-4 mx-10'>
                {data?.results?.slice(0, limit).map((movie, index) => {
                    return <MovieCard
                        id={movie.id}
                        overview={movie.overview}
                        popularity={movie.popularity}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        key={index}
                    />
                })}
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

export default TvShow