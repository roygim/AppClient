import Image from 'next/image';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import twitterIcon from "../../public/images/tailwind.svg";
import closeIcon from "../../public/images/close.svg";
import Link from 'next/link';
import DarkModeMobile from '../dark-mode/dark-mode-mobile';
import { MdMenu } from "react-icons/md";

export default function MobileMenu() {
    return (
        <nav className='lg:hidden flex justify-between w-full px-5 py-6'>
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
            <Drawer direction="left">
                <div className="flex items-center gap-2">
                    <DrawerTrigger>
                        <MdMenu size={24} />
                    </DrawerTrigger>
                </div>
                <DrawerContent className="rounded-none h-full w-8/12 md:w-5/12" showNotch={false}>
                    <div className='flex justify-between w-full p-4'>
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
                        <DrawerClose>
                            <Image
                                priority
                                src={closeIcon}
                                alt="Follow us on Twitter"
                            />
                        </DrawerClose>
                    </div>
                    <div className='flex flex-col px-4 pt-8'>
                        <Link href="/" className="font-semibold border-b py-3 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
                            Products
                        </Link>
                        <Link href="/" className="font-semibold border-b py-3 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
                            Features
                        </Link>
                        <Link href="/" className="font-semibold border-b py-3 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
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