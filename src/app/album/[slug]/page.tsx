import { AlbumInformation } from "@/components/AlbumInformation/AlbumInformation"
import { PhotosInAlbum } from "@/components/PhotosInAlbum/PhotosInAlbum"
import { getPhotosByAlbumId } from "@/services/photos.service"
import { IPhoto } from "@/types/photos.type"


export default async function AlbumDetail ( { params }: { params: { slug: string } } )
{

    const photos: IPhoto[] = await getPhotosByAlbumId( params.slug )

    return (
        <div className="flex m-10 gap-4">
            <AlbumInformation photos={ photos } albumId={params.slug}/>
            <PhotosInAlbum photos={ photos } />
        </div>
    )
}