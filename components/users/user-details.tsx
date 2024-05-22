'use client'

import React, { useContext, useEffect } from 'react'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '../spinner'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useUsers from '@/lib/hooks/useUsers'
import { useRouter } from 'next/navigation'

interface UpdateInputs {
    firstname: string
    lastname: string
    email: string
}

function UserDetails() {
    const router = useRouter()
    const { user, isUserLogin, removeUser } = useContext(UserContext) as UserContextValue
    const { logoutUserMutation } = useUsers()
    
    const {
        mutateAsync: logoutUserAsync,
        isLoading: isLogoutLoading,
        isError: isLogoutError,
        error: logoutError } = logoutUserMutation()

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<UpdateInputs>({
        defaultValues: {
            firstname: user?.firstname ?? '',
            lastname: user?.lastname ?? '',
            email: user?.email ?? '',
        },
    })

    useEffect(() => {
        console.log('isUserLogin')
        console.log(isUserLogin)
    }, [isUserLogin])

    const updateUser: SubmitHandler<UpdateInputs> = async (data) => {
        const { firstname, lastname, email } = data

        try {
            // const res = await loginUserAsync({ email, password })
            // if (res && res.user) {
            //     saveUser(res.user)
            //     router.push(`/user`)
            // }
        } catch (error: any) {
            console.log(error)
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
        <div className="sm:flex sm:justify-center">
            <form onSubmit={handleSubmit(updateUser)}>
                <Card className='dark:bg-darkMode-card sm:w-[500px]'>
                    <CardHeader>
                        <CardTitle>
                            User Details:
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='pb-[4px]'>
                        <Controller
                            name="firstname"
                            control={control}
                            rules={{
                                required: "First name is required"
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="text" placeholder="First name" {...field} className='focus-visible:ring-1' />
                                    {errors.firstname && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.firstname.message}</span>}
                                </div>
                            }
                        />
                        <Controller
                            name="lastname"
                            control={control}
                            rules={{
                                required: "Last name is required"
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="text" placeholder="Last name" {...field} className='focus-visible:ring-1' />
                                    {errors.lastname && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.lastname.message}</span>}
                                </div>
                            }
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "email is not valid",
                                }
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="email" placeholder="Email" {...field} className='focus-visible:ring-1' />
                                    {errors.email && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.email.message}</span>}
                                </div>
                            }
                        />
                    </CardContent>
                    <CardFooter>
                        <div className='flex justify-between px-1 w-full'>
                            <Button
                                type="submit"
                                variant="link"
                                className='text-link dark:text-primary underline pl-1'
                            >
                                Update
                            </Button>
                            <Button
                                variant="link"
                                className='text-link dark:text-primary underline pl-1'
                                onClick={() => logoutUser()}
                            >
                                Logout
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default UserDetails