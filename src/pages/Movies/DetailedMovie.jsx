import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Loader, Dot, BadgeDollarSign } from 'lucide-react';
import { getDate, getLongDate, getYear, playTime } from '../../libs/DateFormatter';

import MovieCard from '../../components/common/MovieCard';

function DetailedMovie() {

    let { movieid } = useParams();

    // eslint-disable-next-line no-undef
    const { data, loading, error } = useFetch(`/movie/${movieid}`)

    const { data: similardata, loading: sloading, error: serror } = useFetch(`/movie/${movieid}/similar`)


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
        console.log(similardata);
    }


    if (!data?.success === false || !similardata?.success === false) {
        return (
            <div>
                <h1>{data?.status_message} || {similardata?.status_message}</h1>
            </div>
        )
    }


    return (
        <div className='dark:bg-gray-900'>
            <div
                className='h-[750px] bg-gray-900  flex gap-3 justify-start items-start banner'>

                <div className='absolute -z-10 top-0'>
                    <img src={`${import.meta.env.VITE_CDN_KEY}${data.backdrop_path}`}
                        className='object-contain w-full opacity-25 blur-sm  saturate-200'
                    />
                </div>
                <img src={`${import.meta.env.VITE_CDN_KEY}${data.poster_path}`}
                    className='object-cover w-[550px] h-full'
                />

                <div className='text-white mt-10 relative '>

                    <div className='z-10'>
                        <h1 className='text-6xl '>
                            {data.title} <span className='text-gray-500 text-5xl'>({getYear(data.release_date)})</span>
                        </h1>
                        <span className='text-xl flex justify-start items-center mt-2'>{data.tagline}

                            <Dot />
                            <span>
                                {playTime(data.runtime)}
                            </span>
                        </span>

                        <div>
                            <span>Genres: {" "}
                                {data.genres.map((genre, index) => {
                                    return (
                                        <span key={index} className='text-lg'>{genre.name}
                                            {index === data.genres.length - 1 ? '' : ', '}
                                        </span>
                                    )
                                })}
                            </span>
                        </div>

                        <h2 className='text-4xl mt-10'>OverView</h2>
                        <p className='w-[85%] text-lg overflow-hidden break-words my-3'>
                            {data.overview}
                        </p>


                        <div>
                            <h3 className='text-2xl mt-10'>Status</h3>
                            <span>{data.status}</span>
                            <h3 className='text-2xl mt-2'>Original Language</h3>
                            <span>{data.spoken_languages[0].name}</span>
                            <h3 className='text-2xl mt-2'>Budget</h3>
                            <span className='flex gap-2 items-center justify-start'>
                                <BadgeDollarSign />
                                {data.budget}
                            </span>
                            <h3 className='text-2xl mt-2'>Revenue</h3>
                            <span className='flex gap-2 items-center justify-start'>
                                <BadgeDollarSign className={`${data.revenue > data.budget ? "text-green-500" : "text-red-500"}`} />
                                {data.revenue}
                            </span>
                        </div>
                    </div>
                </div>
            </div >


            <h2 className='text-center my-10 dark:text-white text-6xl font-bold'>Similar Movies you Might Love</h2>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-10 justify-items-center '>
                {similardata && similardata.results.map((movie, index) => {
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
        </div>
    )
}

export default DetailedMovie