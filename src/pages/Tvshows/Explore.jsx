import TvshowCard from '../../components/common/TvshowCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import SearchBar from '../../components/common/SearchBar.jsx'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function TvExplore() {
    const [searchParams] = useSearchParams();
    let page = searchParams.get("page")
    if (page > 500) {
        page = 500
    }
    console.log(page)
    const { data, loading, error } = useFetch(`/tv/popular?page=${page || 1}`)
    const [searchedtvshow, setSearchedTvshow] = useState([])


    useEffect(() => {
        setSearchedTvshow(data.results)
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


    return (
        <div className='pt-10 dark:bg-pink-500 min-h-screen'>
            <SearchBar path={"tv"}

                setData={
                    (data) => {
                        console.log(data)
                        setSearchedTvshow(data)
                    }
                }

            />
            <div className='flex justify-center items-center gap-10 mt-5'>
                {data.page > 1 ? <a href={`/tvshow?page=${data.page - 1}`}
                    className='flex justify-center items-center mt-5 mb-5 dark:text-white'
                >
                    <button className='bg-blue-800 px-3 py-2 rounded-full'>
                        Previous Page
                    </button>
                </a> : null}
                {
                    data.page <= 499 ? <a href={`/tvshow?page=${data.page + 1}`}
                        className='flex justify-center items-center mt-5 mb-5 dark:text-white'
                    >
                        <button className='bg-blue-800 px-3 py-2 rounded-full'>
                            Next Page
                        </button>
                    </a> : null}

            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-10 justify-items-center'>
                {searchedtvshow ? searchedtvshow.map((tv, index) => {
                    return <TvshowCard
                        id={tv.id}
                        overview={tv.overview}
                        popularity={tv.popularity}
                        poster_path={tv.poster_path}
                        title={tv.name}
                        key={index}
                    />
                }) : <span>data not feteched from backend</span>}
            </div>

            <br />
        </div>
    )
}

export default TvExplore