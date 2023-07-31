import { getPhotosByAlbumId } from "@/services/photos.service"
import { IPhoto } from "@/types/photos.type"
import dynamic from "next/dynamic"


export default async function AlbumDetail ( { params }: { params: { slug: string } } )
{

    const photos: IPhoto[] = await getPhotosByAlbumId( params.slug )
    const AlbumInformation = dynamic( () => import( "@/components/AlbumInformation/AlbumInformation" ) );
    const PhotosInAlbum = dynamic( () => import( "@/components/PhotosInAlbum/PhotosInAlbum" ) );

    return (
        <div className="flex m-10 gap-4 flex-wrap justify-center">
            <AlbumInformation photos={ photos } albumId={params.slug}/>
            <PhotosInAlbum photos={ photos } />
        </div>
    )
}