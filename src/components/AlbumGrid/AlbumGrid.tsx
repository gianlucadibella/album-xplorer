"use client";

import { IAlbum } from "@/types/albums.type";
import { AlbumsCounter } from "../AlbumsCounter/AlbumsCounter";
import { SearchInput } from "../SearchInput/SearchInput";
import { AlbumCover } from "../AlbumCover/AlbumCover";
import { useState } from "react";
import { IPhoto } from "@/types/photos.type";

interface AlbumGridProps
{
    albums: IAlbum[];
    photos: IPhoto[];
}

export const AlbumGrid = ( { albums, photos }: AlbumGridProps ) =>
{

    const [ filteredAlbums, setFilteredAlbums ] = useState( albums );

    return (
        <>
        <div className="flex justify-end m-10 gap-4">
        <AlbumsCounter counter={ filteredAlbums.length } />
        <SearchInput setAlbums={ setFilteredAlbums } albums={ albums } />
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-14 mt-8">
        { filteredAlbums.map( ( album ) => (
          <AlbumCover album={ album } photos={photos} key={ album.id } />
        ) ) }
      </div>
      </>
    )
}