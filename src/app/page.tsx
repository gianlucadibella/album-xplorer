"use client"

import { useEffect, useState } from "react";
import { AlbumCover } from "@/components/AlbumCover/AlbumCover"
import { AlbumsCounter } from "@/components/AlbumsCounter/AlbumsCounter"
import { SearchInput } from "@/components/SearchInput/SearchInput"
import { getAlbums } from "@/services/albums.service"
import { IAlbum } from "@/types/albums.type"


export default function Home ()
{

  const [ albums, setAlbums ] = useState<IAlbum[]>( [] )
  const [ filteredAlbums, setFilteredAlbums ] = useState<IAlbum[]>( [] )

  useEffect( () =>
  {

    const getAlbumData = async () =>
    {
      const albums = await getAlbums()
      setAlbums( albums )
      setFilteredAlbums( albums )
    }

    getAlbumData()

  }, [] )


  return (
    <main className="flex flex-col pb-10">
      <div className="flex justify-end m-10 gap-4">
        <AlbumsCounter counter={ filteredAlbums.length } />
        <SearchInput setAlbums={ setFilteredAlbums } albums={ albums } />
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-14 mt-8">
        { filteredAlbums.map( ( album ) => (
          <AlbumCover album={ album } key={ album.id } />
        ) ) }
      </div>
    </main>
  )
}
