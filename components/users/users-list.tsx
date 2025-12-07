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
import { FiPlusCircle } from "react-icons/fi";
import Link from 'next/link';

function UsersList() {
    const router = useRouter()
    const queryClient = useQueryClient();
    const { getUsersQuery } = useUsers()
    const { data: usersList, isLoading } = getUsersQuery()

    const handleRefreshUsers = () => {
        queryClient.invalidateQueries('users')
    }

    const handleUserClick = (id: number) => {
        try {
            router.push(`/user/${id}`)
            window.scrollTo({ top: 0, behavior: "smooth" });
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
                                            handleUserClick(row.id)
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
            <div className='flex items-center justify-start mt-5 px-4 gap-4 w-full'>
                <Link href="/register">
                    <FiPlusCircle size={32} className='text-link dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-500' title='add user' />
                </Link>
                <LuRefreshCcw
                    role='button'
                    size={32}
                    className='text-xl cursor-pointer  text-link dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-500'
                    title='refresh table'
                    onClick={handleRefreshUsers}
                />
                <div></div>
            </div>
        </div>
    )
}

export default UsersList