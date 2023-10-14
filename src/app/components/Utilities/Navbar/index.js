import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-[#4070f4] px-4">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href='/' className="font-bold text-white text-2xl ">AnimeMovie</Link>
                <input placeholder="Silakan Search Anime..." />
            </div>
        </header>
    )
}

export default Navbar