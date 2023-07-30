import { filterPhotos } from "@/helpers/filterPhotos";

export const getPhotos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await response.json();
    return data;
}

export const getPhotosByAlbumId = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    const data = await response.json();
    return data;
}

export const getOnePhotoByAlbum = async () => {
    const photos = await getPhotos();
    return filterPhotos(photos);
}