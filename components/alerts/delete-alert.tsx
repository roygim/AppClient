'use client'

import React, { useContext } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '../ui/button'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import useUsers from '@/lib/hooks/useUsers'
import { useRouter } from 'next/navigation'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

function DeleteAlert() {
    const router = useRouter()
    const { removeUser } = useContext(UserContext) as UserContextValue
    const { deleteUserMutation } = useUsers()

    const {
        mutateAsync: deleteUserAsync
    } = deleteUserMutation()

    const deleteUser = async () => {
        try {
            const res = await deleteUserAsync()

            if (res && res.success) {
                removeUser()
                router.push(`/`)
            }
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="link"
                    className='p-0'
                >
                    <RiDeleteBin6Line size={20} className='fill-red-700 dark:fill-primary' />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className='flex flex-row items-center justify-between mb-6 mt-0 space-y-0'>
                    <AlertDialogTitle>
                        Delete your account?
                    </AlertDialogTitle>
                    <AlertDialogCancel asChild>
                        <Button
                            variant="link"
                            className='border-none p-0 w-[32px] h-[32px] mt-0'
                        >
                            <IoIosClose size={24} />
                        </Button>
                    </AlertDialogCancel>
                </AlertDialogHeader>
                <AlertDialogFooter className='sm:flex sm:justify-center sm:gap-2'>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteUser()}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAlert