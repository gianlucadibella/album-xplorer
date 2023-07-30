import { IAlbum } from "@/types/albums.type";

export const filterAlbums = (albums: IAlbum[], filter: string): IAlbum[] => {
    return albums.filter(album => album.title.toLowerCase().includes(filter.toLowerCase()));
}