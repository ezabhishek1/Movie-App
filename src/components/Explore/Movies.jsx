import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import MovieCard from '../common/MovieCard'
import { Loader } from 'lucide-react'

function Movies() {
    const { data, loading, error } = useFetch("/movie/popular")
    const [limit, setLimit] = useState(4)


    if (loading) {
        return (
            <div className='h-screen bg-gray-500 dark:bg-black flex justify-center items-center'>
                <Loader className='animate-spin dark:text-white h-10 w-10' />
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
        <div className='pt-10'>
            <h1 className="text-4xl dark:text-white text-center">Explore Movies</h1>
            <br />
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 justify-items-center'>
                {data ? data?.results?.slice(0, limit).map((movie, index) => {
                    return <MovieCard
                        id={movie.id}
                        overview={movie.overview}
                        popularity={movie.popularity}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        key={index}
                    />
                }) : <span>data not feteched from backend</span>}
            </div>
            <br />
            <div className='flex justify-center items-center'>
                <button
                    className='px-5 py-3 bg-green-500 rounded-2xl'
                    onClick={() => setLimit(limit + 6)}
                >Load More</button>
            </div>
        </div>
    )
}

export default Movies