'use client';

import { filterAlbums } from "@/helpers/filterAlbums";
import { IAlbum } from "@/types/albums.type";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ChangeEvent, useState } from "react";

interface Props
{
    albums: IAlbum[];
    setAlbums: ( albums: IAlbum[] ) => void;
}

export const SearchInput = ( {
    albums,
    setAlbums,
}: Props ) =>
{


    const [ searchTerm, setSearchTerm ] = useState( '' );

    const handleSearch = ( e: ChangeEvent<HTMLInputElement> ) =>
    {
        setSearchTerm( e.target.value )
        setAlbums( filterAlbums( albums, e.target.value ) )
    }

    return (
        <div className="flex gap-2 bg-white p-2 text-xl rounded-lg border border-zinc-300 shadow-sm">
            <MagnifyingGlassIcon className="w-6 h-6 text-zinc-300" />
            <input className="focus:outline-none w-56"
                type="text" placeholder="Buscar..."
                onChange={ ( e ) => handleSearch( e ) }
                value={ searchTerm }
                id="searchBar" />

        </div>
    )

}