import Link from 'next/link';
import styles from './Navbar.module.css';
import { TextGradient } from '../TextGradient/TextGradient';

export const Navbar = () => {
    return (
        <nav className={`${styles.wrapper}`}>
        <Link href='/'>
            <TextGradient text="AlbumXplorer" />
        </Link>
      </nav>
    )
}