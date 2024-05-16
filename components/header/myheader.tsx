import MobileMenu from './mobile-menu'
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