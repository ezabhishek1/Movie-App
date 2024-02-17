import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Loader, } from 'lucide-react';
import MovieCard from '../../components/common/MovieCard';

function DetailedPeople() {

    let { peopleid } = useParams();


    const { data, loading, error } = useFetch(`/person/${peopleid}`)

    const { data: movies, loading: sloading, error: serror } = useFetch(`/person/${peopleid}/movie_credits`)


    if (loading || sloading) {
        return (
            <div className='h-screen bg-gray-500 dark:bg-black flex justify-center items-center'>
                <Loader className='animate-spin dark:text-white h-10 w-10' />
            </div>
        )
    }

    if (error || serror) {
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    }

    if (data) {
        console.log(data);
        console.log(movies);
    }


    if (data?.success === false || movies?.success === false) {
        return (
            <div>
                <h1>{data?.status_message} || {movies?.status_message}</h1>
            </div>
        )
    }



    return (
        <div className='dark:bg-gray-900'>
            <div
                className='h-[750px] bg-gray-900  flex gap-10 justify-start items-start banner'>
                <img src={`${import.meta.env.VITE_CDN_KEY}${data.profile_path}`}
                    className='object-fill w-[550px] h-full ml-10 rounded-xl'
                />
                <div className='text-white mt-10 relative '>

                    <div className='z-10'>
                        <h1 className='text-6xl '>
                            {data.name}
                        </h1>
                        <span className='text-xl flex justify-start items-center mt-2'>{data.birthday}

                            <span>
                                {data.place_of_birth}
                            </span>
                        </span>

                        <div>
                            <span>Known For: {" "} {data.known_for_department}</span>
                        </div>

                        <h2 className='text-4xl mt-10'>biography</h2>
                        <p className='w-[85%] text-lg overflow-hidden break-words my-3'>
                            {data.biography}
                        </p>


                        <div>
                            <h3 className='text-2xl mt-10'>popularity</h3>
                            <span>{data.popularity}</span>
                        </div>
                    </div>
                </div>
            </div >


            <h2 className='text-center my-10 dark:text-white text-6xl font-bold'>Movies Worked on</h2>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 justify-items-center '>
                {movies && movies.cast.map((movie, index) => {
                    return <MovieCard
                        id={movie.id}
                        overview={movie.overview}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        key={index}
                    />
                })}
            </div>
        </div >
    )
}

export default DetailedPeople