import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import RecomenAnime from "@/components/RecomendAnime"
import HeaderRecomen from "@/components/RecomendAnime/Header"
import Link from "next/link"
import { getAnimeResponse } from "./service/api-service"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=11")
  const recomenAnime = await getAnimeResponse("seasons/now")

  return (
    <>
      {/* Anime paling populer */}
      <section>
        <Header title='Paling Populer' linkTitle='Lihat Semua' linkHref='/populer' />
        <AnimeList api={topAnime} />
      </section>

      {/* Recomendasi Anime */}
      <section>
        <HeaderRecomen title='Ongoing' />
        <RecomenAnime api={recomenAnime} />
      </section>
    </>
  )
}

export default Page