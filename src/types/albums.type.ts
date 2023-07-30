export interface IAlbum {
    userId: number;
    id: number;
    title: string;
}

export interface IAlbumsResponse {
    albums: IAlbum[];
}
