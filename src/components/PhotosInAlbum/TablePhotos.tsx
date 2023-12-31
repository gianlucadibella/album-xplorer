'use client';

import { useState } from "react";
import { IPhoto } from "@/types/photos.type";
import Image from "next/image";
import dynamic from "next/dynamic";

interface Props
{
    photos: IPhoto[];
}

export const TablePhotos = ( { photos }: Props ) =>
{

    const [ open, setOpen ] = useState( false )
    const [ photo, setPhoto ] = useState<IPhoto>( {} as IPhoto )
    
    const Modal = dynamic( () => import( '@/components/Modal/Modal' ) )

    return (
        <>
            <table className='w-full mt-6 rounded-lg text-left  border-separate border-tools-table-outline w-full'>
                <thead className=''>
                    <tr className='border border-zinc-300'>
                        <th className='text-center'>
                            Cover
                        </th>
                        <th className='text-center'>
                            Title
                        </th>
                        <th className='text-center'>
                            Photo Id
                        </th>
                        <th className='text-center'>
                            Album Id
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { photos.map( ( photo, index ) =>
                    {
                        const backgroundColor = index % 2 === 0 ? '#FAF9F6' : '#E5F3FD'
                        return (
                            <tr
                                key={ index + `photo.title` }
                                style={ {
                                    backgroundColor: backgroundColor,
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                } }
                                onClick={ () => {
                                        setOpen( true )
                                        setPhoto( photo )
                                }}
                                id={ `photo-${ photo.id }`}
                            >
                                <td className="flex justify-center p-2">
                                    <Image src={ photo.thumbnailUrl } title={ photo.title } alt={ photo.title }
                                        width={ 50 } height={ 50 } className="rounded-lg" />
                                </td>
                                <td>
                                    { photo.title }
                                </td>
                                <td>
                                    { photo.id }
                                </td>
                                <td >
                                    { photo.albumId }
                                </td>
                            </tr>
                        )
                    } )
                    }
                </tbody>
            </table>
            <Modal open={ open } setOpen={ setOpen } photo={photo}/>
        </>
    );
}

export default TablePhotos;