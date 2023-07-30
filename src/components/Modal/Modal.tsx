import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from './Modal.module.css';
import { IPhoto } from '@/types/photos.type';
import Image from 'next/image';

interface ModalProps
{
    open: boolean;
    setOpen: ( open: boolean ) => void;
    photo?: IPhoto;
}

export const Modal = ( {
    open,
    setOpen,
    photo
}: ModalProps ) =>
{
    return (
        <Dialog.Root open={ open }>
            <Dialog.Trigger />
            <Dialog.Portal>
                <Dialog.Overlay className={`${styles.dialogOverlay}`} />
                <Dialog.Content className={`${styles.dialogContent}`}>
                    { photo && (
                        <Image src={ photo.url } title={ photo.title } alt={ photo.title }
                            width={ 500 } height={ 500 } className="rounded-lg" />
                    )}
                    <Dialog.Close asChild onClick={ () => setOpen( false ) } className='absolute top-2 right-2 cursor-pointer'>
                        <XMarkIcon className="w-6 h-6" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal;