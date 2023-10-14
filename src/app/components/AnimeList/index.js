import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ title, images, years, id }) => {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} alt="" width={350} height={350} className="w-full max-h-64 object-cover" />
            <h3 className=" md:text-sm font-semibold text-xs text-center p-4 text-[#4070f4]">{title} {years ? `(${years})` : ""}</h3>
        </Link>
    )
}

export default AnimeList