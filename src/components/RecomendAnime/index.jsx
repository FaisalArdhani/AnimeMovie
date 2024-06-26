import Image from "next/image"
import Link from "next/link"

const RecomenAnime = ({ api }) => {
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4 px-10">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image
                            src={anime.images?.webp.image_url}
                            alt={anime.images?.jpg.image_url}
                            width={350}
                            height={350}
                            className="w-full max-h-64 object-cover" />
                        <h3 className=" md:text-sm font-semibold text-xs text-center p-4 ">{anime.title} {anime.year ? `(${anime.year})` : ""}</h3>
                    </Link>
                )

            })}
        </div>

    )
}

export default RecomenAnime