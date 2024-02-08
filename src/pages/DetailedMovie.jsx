import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function DetailedMovie() {

    let { movieid } = useParams();

    // eslint-disable-next-line no-undef
    const { data, loading, error } = useFetch(`/movie/${movieid}`)


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

    if (data) {
        console.log(data);
    }


    if (data?.success === false) {
        return (
            <div>
                <h1>{data?.status_message}</h1>
            </div>
        )
    }

    return (
        <div>DetailedMovie : {movieid}
            {JSON.stringify(data, null, 2)}
        </div>
    )
}

export default DetailedMovie