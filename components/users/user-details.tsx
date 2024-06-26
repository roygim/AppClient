'use client'

import React, { useContext } from 'react'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '../spinner'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useUsers from '@/lib/hooks/useUsers'
import { useRouter } from 'next/navigation'
import { UpdateUser, User } from '@/lib/types'
import DeleteAlert from '../alerts/delete-alert'

interface UpdateInputs {
    firstname: string
    lastname: string
    email: string
}

function UserDetails({ currentUser }: { currentUser: User | null }) {
    const router = useRouter()
    const { saveUser, removeUser } = useContext(UserContext) as UserContextValue
    const { logoutUserMutation, updateUserMutation } = useUsers()

    const {
        mutateAsync: logoutUserAsync
    } = logoutUserMutation()

    const {
        mutateAsync: updateUserAsync
    } = updateUserMutation()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<UpdateInputs>({
        defaultValues: {
            firstname: currentUser?.firstname ?? '',
            lastname: currentUser?.lastname ?? '',
            email: currentUser?.email ?? '',
        },
    })

    const updateUser: SubmitHandler<UpdateInputs> = async (data) => {
        const { firstname, lastname, email } = data

        try {
            const updateData = { firstname: firstname.trim(), lastname: lastname.trim(), email } as UpdateUser
            
            const res = await updateUserAsync(updateData)

            if (res && res.success) {
                saveUser(res.data)
            }
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
                                required: "First name is required",
                                validate: (value: string) => !!value.trim() || 'First name is required',
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
                                required: "Last name is required",
                                validate: (value: string) => !!value.trim() || 'Last name is required',
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
                        <div className='flex justify-between items-center w-full px-2'>
                            <Button
                                type="submit"
                                variant="link"
                                className='text-link dark:text-primary underline pl-0'
                            >
                                Update
                            </Button>
                            <Button
                                variant="link"
                                className='text-link dark:text-primary underline p-0'
                                onClick={() => logoutUser()}
                            >
                                Logout
                            </Button>
                            <DeleteAlert />
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default UserDetails