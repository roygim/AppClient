'use client'

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/lib/state/user/user.context';
import { UserContextValue } from '@/lib/state/user/user.type';
import useUsers from '@/lib/hooks/useUsers';
import MobileMenu from './mobile-menu'
import DesktopMenu from './desktop-menu';
import { useRouter } from 'next/navigation';

function MyHeader() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const { user, isUserLogin, saveUser, removeUser } = useContext(UserContext) as UserContextValue
    const { loadUserMutation, logoutUserMutation } = useUsers()
    
    const {
        mutateAsync: loadUserAsync
    } = loadUserMutation()

    const { 
        mutateAsync: logoutUserAsync 
    } = logoutUserMutation()

    useEffect(() => {
        if (!mounted && !isUserLogin) {
            loadUser()
        }
        setMounted(true)
    }, [isUserLogin])

    const loadUser = async () => {
        try {
            const res = await loadUserAsync()
            if (res && res.success) {
                saveUser(res.data)
            }
        } catch (error) {
        }
    }

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
        <header className='dark:bg-gray-800'>
            <DesktopMenu currentUser={user} logout={logoutUser} />
            <MobileMenu currentUser={user} logout={logoutUser} />
        </header>
    )
}

export default MyHeader