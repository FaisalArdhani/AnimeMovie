import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent px-4">
            <div className="flex md:flex-row flex-col justify-between md:items-center  p-4 gap-2">
                <Link href='/' className="font-bold text-color-primary text-2xl ">AnimeMovie</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar