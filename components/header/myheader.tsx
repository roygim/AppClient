import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image';
import twitterIcon from "../../public/images/tailwind.svg";
import DesktopMenu from './desktop-menu';

function MyHeader() {
    return (
        <header className='dark:bg-gray-800'>
            <DesktopMenu />
            <MobileMenu />
        </header>
    )
}

export default MyHeader