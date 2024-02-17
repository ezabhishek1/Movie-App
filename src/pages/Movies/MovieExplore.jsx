import MovieCard from '../../components/common/MovieCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import SearchBar from '../../components/common/SearchBar.jsx'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function MovieExplore() {
    // https://developer.themoviedb.org/reference/discover-movie

    const [searchedmovies, setSearchedMovies] = useState([])
    const [searchParams] = useSearchParams();
    const [sortby, setSortby] = useState(searchParams.get("sort_by") || "popularity.desc")
    const page = searchParams.get("page")


    const { data, loading, error } = useFetch(`/discover/movie?page=${page}`)

    useEffect(() => {
        setSearchedMovies(data.results)
        async function sortbyfun() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=${sortby}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${import.meta.env.VITE_Access_Token_Auth}`
                    },
                });
                const data = await response.json();
                console.log(data)
                setSearchedMovies(data.results)
            } catch (error) {
                console.error(error)
            }
        }
        sortbyfun()
    }, [data, page, sortby])

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
        <div className='pt-10 dark:bg-yellow-800 min-h-screen px-10'>
            <SearchBar path={"movie"}

                setData={
                    (data) => {
                        console.log(data)
                        setSearchedMovies(data)
                    }
                }

            />
            <div className='flex justify-start items-center'>
                <span className='text-3xl text-white'>Showing Page : {data.page}</span>
            </div>
            <h1 className="text-4xl dark:text-white text-center">Searched Title</h1>
            <br />

            <select name="sortby"
                value={sortby}
                onChange={(e) => {
                    setSortby(e.target.value)
                    console.log(sortby)
                }}
            >
                <option value="popularity.desc">Popularity (desc)</option>
                <option value="popularity.asc">Popularity (asc)</option>
                <option value="revenue.desc">revenue (desc)</option>
                <option value="revenue.asc">revenue (asc)</option>
                <option value="title.desc">Title (desc)</option>
                <option value="title.asc">Title (asc)</option>
            </select>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
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
            <div className='flex justify-center items-center gap-10 mt-5'>
                {data.page > 1 ? <a href={`/movies?page=${data.page - 1}`}
                    className='flex justify-center items-center mt-5 mb-5 dark:text-white'
                >
                    <button className='bg-blue-800 px-3 py-2 rounded-full'>
                        Previous Page
                    </button>
                </a> : null}
                {
                    data.page <= 499 ? <a href={`/movies?page=${data.page + 1}&sort_by=${sortby}`}
                        className='flex justify-center items-center mt-5 mb-5 dark:text-white'
                    >
                        <button className='bg-blue-800 px-3 py-2 rounded-full'>
                            Next Page
                        </button>
                    </a> : null}

            </div>
            <br />
        </div>
    )
}

export default MovieExplore