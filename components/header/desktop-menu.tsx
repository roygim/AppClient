import Image from 'next/image';
import twitterIcon from "../../public/images/tailwind.svg";
import Link from 'next/link';
import DarkMode from './dark-mode';

export default function DesktopMenu() {
    return (
        <nav className='hidden lg:flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8'>
            <div className="flex lg:space-x-4">
                <Link href="/">
                    <div className='flex gap-2'>
                        <Image
                            priority
                            src={twitterIcon}
                            alt="Follow us on Twitter"
                            height={32}
                            width={32}
                        />
                        <span className='font-bold'>
                            App Client
                        </span>
                    </div>
                </Link>
                <Link href="/" className="text-sm font-semibold">
                    Products
                </Link>
                <Link href="/" className="text-sm font-semibold">
                    Features
                </Link>
                <Link href="/" className="text-sm font-semibold">
                    Marketplace
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <DarkMode />
                <Link href="/" className="text-sm font-semibold">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </nav>
    );
}