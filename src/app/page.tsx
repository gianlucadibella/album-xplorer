import { AlbumGrid } from "@/components/AlbumGrid/AlbumGrid"
import { getAlbums } from "@/services/albums.service"
import { IAlbum } from "@/types/albums.type"


export default async function Home ()
{

  const albums : IAlbum[] = await getAlbums()

  return (
    <main className="flex flex-col pb-10">
      <AlbumGrid albums={ albums } />
    </main>
  )
}
