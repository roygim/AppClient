'use client'

import React, { useContext, useEffect, useState } from 'react'
import UserDetails from '@/components/users/user-details'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import useUsers from '@/lib/hooks/useUsers'
import UserNotFound from '@/components/user-not-found'

function page() {
  const { user, isUserLogin, saveUser } = useContext(UserContext) as UserContextValue
  const { loadUserMutation } = useUsers()
  const [userNotExists, setUserNotExists] = useState(false)
  
  const {
    mutateAsync: loadUserAsync 
  } = loadUserMutation()

  useEffect(() => {
    if (!isUserLogin) {
      loadUser()
    }
  }, [isUserLogin])

  const loadUser = async () => {
    try {
      const res = await loadUserAsync()
      if (res && res.success) {
        saveUser(res.data)
      } else {
        setUserNotExists(true)  
      }
    } catch (error) {
      setUserNotExists(true)
    }
  }

  return (
    <div>
      { user && <UserDetails currentUser={user} />}
      { userNotExists && <UserNotFound />}
    </div>
  )
}

export default page