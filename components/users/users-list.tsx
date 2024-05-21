'use client'

import React from 'react'
import useUsers from '@/lib/hooks/useUsers';
import { LuRefreshCcw } from "react-icons/lu";
import { useQueryClient } from 'react-query';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Spinner from '../spinner';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

function UsersList() {
    const router = useRouter()
    const queryClient = useQueryClient();
    const { getUsers } = useUsers()

    const { data: usersList, isLoading } = getUsers()

    const handleRefreshUsers = () => {
        queryClient.invalidateQueries('users')
    }

    const handleUserClick = (email: string) => {
        try {
            router.push(`/login?email=${email}`)
        } catch (error) {
            alert('אירעה שגיאה')
        }
    }

    if (isLoading) {
        return (
            <Spinner marginTop={200} />
        )
    }

    if (!usersList || usersList.length == 0) {
        return (
            <div>
                No Users
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center'>
            <Table divClassname='h-fit max-h-[486px] overflow-y-auto relative'>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        usersList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Button
                                        variant="link"
                                        className='text-link dark:text-primary underline pl-1'
                                        onClick={() => {
                                            handleUserClick(row.email)
                                        }}
                                    >
                                        {row.id}
                                    </Button>
                                </TableCell>
                                <TableCell>{row.firstname}</TableCell>
                                <TableCell>{row.lastname}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <LuRefreshCcw
                role='button'
                className='text-xl cursor-pointer hover:text-amber-500 mt-5'
                onClick={handleRefreshUsers}
            />
        </div>
    )
}

export default UsersList