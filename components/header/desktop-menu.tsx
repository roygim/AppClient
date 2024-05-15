import Image from 'next/image';
import twitterIcon from "../../public/images/tailwind.svg";
import Link from 'next/link';

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
                <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                    Products
                </Link>
                <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                    Features
                </Link>
                <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                    Marketplace
                </Link>
            </div>
            <div className="hidden lg:block">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
    );
}