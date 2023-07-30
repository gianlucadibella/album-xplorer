export const getAlbums = async () =>
{
    const response = await fetch( `https://jsonplaceholder.typicode.com/albums` );
    const data = await response.json();
    return data;
}

export const getAlbumById = async ( id: string ) =>
{
    const response = await fetch( `https://jsonplaceholder.typicode.com/albums/${ id }` );
    const data = await response.json();
    return data;
}