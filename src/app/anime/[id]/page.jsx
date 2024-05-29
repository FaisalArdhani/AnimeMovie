import { getAnimeResponse } from "@/app/service/api-service"
import VidioPlayer from "@/components/Utilities/VidioPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
            </div>

            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover "
                />
                <p className="text-justify text-xl pt-4">{anime.data.synopsis}</p>
            </div>

            <div className="pb-3" >
                <VidioPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
            <div className="pt-4 px-4 flex gap-2 justify-center  text-color-primary overflow-x-auto pb-3">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Rank</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Favorite</h3>
                    <p>{anime.data.favorites}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Status</h3>
                    <p>{anime.data.status}</p>
                </div>
            </div>
        </>
    )
}

export default Page