import AnimeList from "@/app/components/AnimeList"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
  const anime = await response.json()

  return (
    <div>
      <div className=" flex justify-between items-center py-4 px-10">
        <h1 className="md:text-2xl text-xl font-bold">Populer</h1>
        <Link href='/populer' className="md:text-lg text-sm underline hover:text-[#4070f4] transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4 px-10">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} years={data.year} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home