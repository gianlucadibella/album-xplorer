import { SearchInput } from "@/components/SearchInput/SearchInput"
import { getAlbums } from "@/services/albums.service"
import { IAlbum } from "@/types/albums.type"

export default async function Home() {

  const albums : IAlbum[] = await getAlbums()

  return (
    <main className="flex flex-col">
      <div className="flex justify-end m-10 gap-4">
        <div className="bg-white p-2 text-xl rounded-lg border border-zinc-300 shadow-sm">
              {albums.length}
        </div>
        <SearchInput />
      </div>
      <div>
      </div>
    </main>
  )
}
