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
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
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