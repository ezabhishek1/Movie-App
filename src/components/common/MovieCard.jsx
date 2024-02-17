

function MovieCard({ id, overview, poster_path, title }) {
    return (
        <a href={`/movies/${id}`} rel="noreferrer">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                {poster_path ?
                    <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                    :
                    <img src="https://cdn3.vectorstock.com/i/1000x1000/51/87/404-page-not-found-banner-error-design-vector-21065187.jpg" className="rounded-t-lg" />
                }


                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ">
                        {overview}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default MovieCard