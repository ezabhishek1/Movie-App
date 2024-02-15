import { useState } from 'react'


function SearchBar({ path, setData }) {

    const [search, SetSearch] = useState("")


    async function fetchData() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/${path}?query=${search}&include_adult=true&page=1`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_Access_Token_Auth}`
                },
            });
            const data = await response.json();
            console.log(data)
            setData(data.results)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='flex justify-center items-center gap-3'>
            <input type="text"
                value={search}
                className=' border-blue-500 focus:outline-green-500 outline-none border-2 px-3 py-1 rounded-full w-1/2'
                onChange={(e) => SetSearch(e.target.value)} />
            <button
                onClick={fetchData}
                className='bg-green-500 px-3 py-1 rounded-full'
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar