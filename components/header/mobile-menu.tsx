import Image from 'next/image';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import twitterIcon from "../../public/images/tailwind.svg";
import Link from 'next/link';
import DarkModeMobile from './dark-mode-mobile';
import { Switch } from '../ui/switch';

export default function MobileMenu() {
    return (
        <nav className='lg:hidden flex justify-between w-full px-5 py-6'>
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
            <Drawer direction="left">
                <div className="flex items-center gap-2">
                    <DrawerTrigger>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </DrawerTrigger>
                </div>
                <DrawerContent className="rounded-none h-full w-8/12 md:w-5/12" showNotch={false}>
                    <div className='flex justify-between w-full p-4'>
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
                        <DrawerClose>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </DrawerClose>
                    </div>
                    <div className='flex flex-col px-4 pt-8'>
                        <Link href="/" className="font-semibold border-b py-3">
                            Products
                        </Link>
                        <Link href="/" className="font-semibold border-b py-3">
                            Features
                        </Link>
                        <Link href="/" className="font-semibold border-b py-3">
                            Marketplace
                        </Link>
                    </div>
                    <div className='flex px-4 pt-8'>
                        <DarkModeMobile />
                    </div>
                </DrawerContent>
            </Drawer>
        </nav>
    );
}