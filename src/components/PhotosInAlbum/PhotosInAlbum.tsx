import { IPhoto } from "@/types/photos.type";
import dynamic from "next/dynamic";

interface Props
{
    photos: IPhoto[];
}

export const PhotosInAlbum = ( {
    photos
}: Props ) => 
{

    const TablePhotos = dynamic( () => import( '@/components/PhotosInAlbum/TablePhotos' ) )

    return (
        <div className="flex flex-col flex-1 h-fit justify-center items-center gap-5">
            <div className="border border-zinc-300 rounded-md p-4
                                w-full">
                Photos: { photos.length }
            </div>
            <div className="border border-zinc-300 rounded-md p-4
                                w-full">
                <div>
                   <TablePhotos photos={ photos } />
                </div>
            </div>
        </div>
    )
}

export default PhotosInAlbum;