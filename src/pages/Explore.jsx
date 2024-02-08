import Movies from "../components/Explore/Movies"
import TvShow from "../components/Explore/TvShow"

function Explore() {
    return (
        <div className="dark:bg-gray-900">
            <Movies />
            <TvShow />
        </div>
    )
}

export default Explore