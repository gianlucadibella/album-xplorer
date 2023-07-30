export const getPhotos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await response.json();
    return data;
}

export const getPhotoById = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await response.json();
    return data;
}