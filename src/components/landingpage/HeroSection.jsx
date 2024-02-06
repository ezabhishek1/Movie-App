
function HeroSection() {
    return (
        <div className="flex justify-center items-center flex-col gap-10 h-screen hero">
            <h1 className="text-white text-7xl font-extrabold">CineMate</h1>
            <p className="text-white italic text-2xl font-semibold">Lights, Camera, Action! Experience the Thrill of Cinemate Today!</p>

            <div>
                <a href="/explore">
                    <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">Get Started</button>
                </a>
            </div>
        </div>
    )
}

export default HeroSection