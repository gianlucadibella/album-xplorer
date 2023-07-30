import { AlbumCover } from "@/components/AlbumCover/AlbumCover"
import { AlbumsCounter } from "@/components/AlbumsCounter/AlbumsCounter"
import { SearchInput } from "@/components/SearchInput/SearchInput"
import { getAlbums } from "@/services/albums.service"
import { IAlbum } from "@/types/albums.type"

export default async function Home ()
{

  const albums: IAlbum[] = await getAlbums()


  return (
    <main className="flex flex-col pb-10">
      <div className="flex justify-end m-10 gap-4">
        <AlbumsCounter counter={ albums.length } />
        <SearchInput />
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-14 mt-8">
        { albums.map( ( album ) => (
          <AlbumCover album={ album } key={ album.id } />
        ))}
      </div>
    </main>
  )
}
