'use client'

import React, { useContext, useEffect, useState } from 'react'
import UserDetails from '@/components/users/user-details'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import UserNotFound from '@/components/user-not-found'
import { useParams } from 'next/navigation'
import useUsers from '@/lib/hooks/useUsers'
import { User } from '@/lib/types'

function page() {
  const params = useParams()
  const { isUserLogin } = useContext(UserContext) as UserContextValue
  const { getUsersQuery } = useUsers()
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const { data: usersList } = getUsersQuery()
  
  useEffect(() => {
    if (usersList) {
      const user = usersList.find(u => u.id === Number(params.id))
      if (user) {
        setCurrentUser(user)
      }
    }
  }, [usersList])

  if (!isUserLogin || !currentUser)
    return

  return (
    <div>
      {isUserLogin ? <UserDetails currentUser={currentUser} /> : <UserNotFound />}
    </div>
  )
}

export default page