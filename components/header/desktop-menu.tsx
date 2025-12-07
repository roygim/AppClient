'use client'

import Image from 'next/image';
import twitterIcon from "../../public/images/tailwind.svg";
import Link from 'next/link';
import DarkMode from '../dark-mode/dark-mode';
import { Button } from '../ui/button';
import { User } from '@/lib/types';

export default function DesktopMenu({ currentUser, logout }: { currentUser: User | null, logout: () => void }) {
    return (
        <nav className='hidden lg:flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8'>
            <div className="flex items-center lg:space-x-4">
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
                <Link href="/products" className="text-sm font-semibold hover:text-amber-500">
                    Products
                </Link>
                <Link href="/" className="text-sm font-semibold hover:text-amber-500">
                    Features
                </Link>
                <Link href="/" className="text-sm font-semibold hover:text-amber-500">
                    Marketplace
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <DarkMode />
                {
                    !currentUser ?
                        <div className="flex items-center gap-2">
                            <Link href="/login" className="text-sm font-semibold">
                                Log in
                            </Link>
                            |
                            <Link href="/register" className="text-sm font-semibold">
                                Sign up
                            </Link>
                        </div>
                        :
                        <div className='flex items-center gap-1'>
                            <Link href="/user" className="text-sm font-semibold text-primary hover:underline">
                                Hi, {currentUser.firstname}
                            </Link>
                            <Button
                                variant="link"
                                className='text-sm font-semibold pl-2'
                                onClick={() => logout()}
                            >
                                Log out&nbsp;<span aria-hidden="true">&rarr;</span>
                            </Button>
                        </div>
                }
            </div>
        </nav>
    );
}