
import useTheme from "../../hooks/useTheme"

function NavBar() {
    const [theme, toggleTheme] = useTheme();
    return (
        <div className="flex justify-around items-center h-16 bg-white dark:bg-black shadow-xl sticky top-0">
            <div>
                <a href="/">
                    <h1 className="text-blue-700 dark:text-white text-4xl">CineMate.</h1>
                </a>
            </div>
            <div className="flex justify-center items-center gap-10 text-black dark:text-white text-xl">
                <a href="/explore">Explore</a>
                <a href="/movies">Movies</a>
                <a href="/tvshow">Tv Shows</a>
                <a href="/people">People</a>
                <a href="/anime">Anime</a>
            </div>
            <div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={theme} className="sr-only peer" onChange={toggleTheme} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {theme ? 'Dark' : 'Light'}
                    </span>
                </label>
            </div>
        </div>
    )
}

export default NavBar