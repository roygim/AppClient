'use client'

import Image from 'next/image';
import twitterIcon from "../../public/images/tailwind.svg";
import Link from 'next/link';
import DarkMode from '../dark-mode/dark-mode';
import { useContext } from 'react';
import { UserContext } from '@/lib/state/user/user.context';
import { UserContextValue } from '@/lib/state/user/user.type';
import { Button } from '../ui/button';
import useUsers from '@/lib/hooks/useUsers';
import { useRouter } from 'next/navigation'

export default function DesktopMenu() {
    const router = useRouter()
    const { user, isUserLogin, removeUser } = useContext(UserContext) as UserContextValue
    const { logoutUserMutation } = useUsers()

    const { 
        mutateAsync: logoutUserAsync 
    } = logoutUserMutation()

    const logoutUser = async () => {
        try {
            const res = await logoutUserAsync()

            if (res && res.success) {
                removeUser()
                router.push(`/`)
            }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

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
                {
                    !isUserLogin ?
                        <Link href="/login" className="text-sm font-semibold">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                        :
                        <div className='flex items-center gap-1'>
                            <span className='text-sm font-semibold text-primary'>Hi, {user?.firstname}</span>
                            <Button
                                variant="link"
                                className='text-sm font-semibold pl-2'
                                onClick={() => logoutUser()}
                            >
                                Log out&nbsp;<span aria-hidden="true">&rarr;</span>
                            </Button>
                        </div>
                }
            </div>
        </nav>
    );
}