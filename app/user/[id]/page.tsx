'use client'

import React, { useContext } from 'react'
import UserDetails from '@/components/users/user-details'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import UserNotFound from '@/components/user-not-found'
import { useParams } from 'next/navigation'

function page() {
  const params = useParams()
  const { user, isUserLogin } = useContext(UserContext) as UserContextValue
  
  console.log('params.id', params.id);
  return (
    <div>
      {isUserLogin ? <UserDetails currentUser={user} /> : <UserNotFound />}
    </div>
  )
}

export default page