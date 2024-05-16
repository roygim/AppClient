'use client'

import React from 'react'
import useUsers from '@/lib/hooks/useUsers';

function UsersList() {
    const { getUsers } = useUsers()

    const { data, isLoading } = getUsers()

    if(isLoading) {
        return (
            <div>
                Loading...
            </div>
        )    
    }

    return (
        <div>
            UsersList
        </div>
    )
}

export default UsersList