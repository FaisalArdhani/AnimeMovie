import { getAnimeResponse } from "@/app/service/api-service"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import Link from "next/link"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <>
            <section>
                <Header title={`Pencarian Anime ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page