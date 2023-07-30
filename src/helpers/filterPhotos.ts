import { IPhoto } from "@/types/photos.type";

export const filterPhotos = ( photos: IPhoto[] ) => {

    const filteredPhotos = [] as IPhoto[];

    photos.forEach( ( photo ) => {
        const found = filteredPhotos.find( ( filteredPhoto ) => filteredPhoto.albumId === photo.albumId );
        if ( !found ) {
            filteredPhotos.push( photo );
        }
    });

    return filteredPhotos;
}
