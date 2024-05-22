'use client'

import React, { useContext } from 'react'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '../spinner'
import { Input } from '../ui/input'

interface UpdateInputs {
    firstname: string
    lastname: string
    email: string
}

function UserDetails() {
    const { user } = useContext(UserContext) as UserContextValue

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

    const onSubmit: SubmitHandler<UpdateInputs> = async (data) => {
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

    return (
        <div className="sm:flex sm:justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className='dark:bg-darkMode-card sm:w-[500px]'>
                    <CardHeader>
                        <CardTitle>
                            User Details:
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='pb-[12px]'>
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
                    {/* <CardFooter className='flex justify-center'>
                        {
                            isLoginLoading ?
                                <Spinner />
                                :
                                <div className='flex flex-col gap-1'>
                                    <Button
                                        type="submit"
                                        variant="link"
                                        className='text-link dark:text-primary underline pl-1'
                                    >
                                        Login
                                    </Button>
                                    {
                                        isLoginError &&
                                        <span className='text-sm text-alert-error first-letter:uppercase'>
                                            {getError()}
                                        </span>
                                    }
                                </div>
                        }
                    </CardFooter> */}
                </Card>
            </form>
        </div>
    )
}

export default UserDetails