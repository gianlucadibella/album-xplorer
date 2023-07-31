import { AlbumGrid } from "@/components/AlbumGrid/AlbumGrid"
import { getAlbums } from "@/services/albums.service"
import { getOnePhotoByAlbum } from "@/services/photos.service"
import { IAlbum } from "@/types/albums.type"
import { IPhoto } from "@/types/photos.type"


export default async function Home ()
{

  const albums : IAlbum[] = await getAlbums()
  const photos : IPhoto[] = await getOnePhotoByAlbum()

  return (
    <main className="flex flex-col pb-10">
      <AlbumGrid albums={ albums } photos={photos}/>
    </main>
  )
}
