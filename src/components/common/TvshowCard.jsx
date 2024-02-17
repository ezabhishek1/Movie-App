

function TvshowCard({ id, overview, popularity, poster_path, title }) {
    return (
        <a href={`/tvshow/${id}`} rel="noreferrer">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ">
                        {overview}
                    </p>
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {popularity}
                    </span>
                </div>
            </div>
        </a>
    )
}

export default TvshowCard