"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IAlbum } from "@/types/albums.type";
import { IPhoto } from "@/types/photos.type";
import { getOnePhotoByAlbum } from "@/services/photos.service";

interface IAlbumCoverProps
{
    album: IAlbum;
}

export const AlbumCover = ( {
    album,
}: IAlbumCoverProps ) =>
{

    const [ photos, setPhotos ] = useState<IPhoto[]>( [] )

    useEffect( () =>
    {

        const getAlbumData = async () =>
        {
            const photos = await getOnePhotoByAlbum()
            setPhotos( photos )
        }

        getAlbumData()

    }, [] )

    return (
        <Link href={ `/album/${ album?.id }` } key={ album?.id }>
            <div className="flex flex-col justify-center items-center 
                        rounded-lg border border-zinc-300 w-[300px]
                        p-2 shadow-sm relative hover:bg-gray-100
                        pb-6">
                <div className="flex flex-col justify-center items-center -mt-12 gap-4">
                    <Image src={ photos[ album?.id - 1 ]?.thumbnailUrl } alt={ photos[ album?.id - 1 ]?.title }
                        width={ 100 } height={ 100 } className="rounded-full relative" />
                    <div className="flex flex-col justify-center items-center">
                        <p className="break-words line-clamp-2 w-2/3 text-center">Title: <strong>{ album?.title }</strong></p>
                        <p className="italic">Album Id: { album?.id }</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}