import { IPhoto } from "@/types/photos.type";
import Image from "next/image";

interface Props
{
    photos: IPhoto[];
}

export const AlbumInformation = ( { photos }: Props ) =>
{
    return (
        <div className="flex flex-col justify-start h-fit items-center gap-4 
                        border border-zinc-300 py-5">
            <Image src={ photos[ 0 ].thumbnailUrl } alt={ photos[ 0 ].title }
                className="rounded-lg mt-5" width={ 150 } height={ 150 } />
            <div className="flex flex-col justify-center items-center text-center m-4 max-w-[250px]">
                <p className="break-words">Title: <strong>{ photos[ 0 ].title }</strong></p>
                <p className="italic w-full">Album Id: { photos[ 0 ].albumId }</p>
            </div>
        </div>
    )
};