import PeopleCard from '../../components/common/PeopleCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import SearchBar from '../../components/common/SearchBar.jsx'
import { useState, useEffect } from 'react'



function PeopleExplore() {

    const { data, loading, error } = useFetch("/person/popular")
    const [searchedpeople, setSearchedpeople] = useState([])


    useEffect(() => {
        setSearchedpeople(data.results)
        console.log(data)
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
        <div className='pt-10 dark:bg-purple-400 min-h-screen'>
            <SearchBar path={"person"}

                setData={
                    (data) => {
                        console.log(data)
                        setSearchedpeople(data)
                    }
                }

            />
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-10 justify-items-center'>
                {searchedpeople ? searchedpeople.map((tv, index) => {
                    return <PeopleCard
                        id={tv.id}
                        poster_path={tv.profile_path}
                        title={tv.name}
                        key={index}
                    />
                }) : <span>data not feteched from backend</span>}
            </div>
            <br />
        </div>
    )
}

export default PeopleExplore