

function PeopleCard({ id, poster_path, title }) {
    return (
        <a href={`/people/${id}`} rel="noreferrer">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
            </div>
        </a>
    )
}

export default PeopleCard