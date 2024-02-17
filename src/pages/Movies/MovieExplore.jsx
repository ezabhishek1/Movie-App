import MovieCard from '../../components/common/MovieCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import SearchBar from '../../components/common/SearchBar.jsx'
import { useState, useEffect } from 'react'

function MovieExplore() {

    const { data, loading, error } = useFetch("/movie/popular")
    const [searchedmovies, setSearchedMovies] = useState([])


    useEffect(() => {
        setSearchedMovies(data.results)
    }, [data])

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
        <div className='pt-10 dark:bg-yellow-800 min-h-screen'>
            <SearchBar path={"movie"}

                setData={
                    (data) => {
                        console.log(data)
                        setSearchedMovies(data)
                    }
                }

            />
            <h1 className="text-4xl dark:text-white text-center">Searched Title</h1>
            <br />

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 justify-items-center'>
                {searchedmovies ? searchedmovies.map((movie, index) => {
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
        </div>
    )
}

export default MovieExplore