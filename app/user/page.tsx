'use client'

import React, { useContext } from 'react'
import UserDetails from '@/components/users/user-details'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import UserNotFound from '@/components/user-not-found'

function page() {
  const { user, isUserLogin } = useContext(UserContext) as UserContextValue
  
  return (
    <div>
      {isUserLogin ? <UserDetails currentUser={user} /> : <UserNotFound />}
    </div>
  )
}

export default page