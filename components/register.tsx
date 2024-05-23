'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Spinner from './spinner'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { AddUser } from '@/lib/types'
import useUsers from '@/lib/hooks/useUsers'
import { useRouter } from 'next/navigation'

interface RegisterInputs {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
}

function Register() {
    const router = useRouter()
    const { addUserMutation } = useUsers()

    const {
        mutateAsync: addUserAsync
    } = addUserMutation()

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm<RegisterInputs>({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
    })

    let pwd = watch("password");

    const addUser: SubmitHandler<RegisterInputs> = async (data) => {
        const { firstname, lastname, email, password } = data

        try {
            const addData = { firstname: firstname.trim(), lastname: lastname.trim(), email, password: password.trim() } as AddUser
            
            const res = await addUserAsync(addData)

            if (res && res.success) {
                router.push(`/login?email=${res.data.email}`)
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <div className="sm:flex sm:justify-center">
            <form onSubmit={handleSubmit(addUser)}>
                <Card className='dark:bg-darkMode-card sm:w-[500px]'>
                    <CardHeader>
                        <CardTitle>
                            Add User:
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
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                validate: (value: string) => !!value.trim() || 'Password is required',
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="password" placeholder="Password" {...field} className='focus-visible:ring-1' />
                                    {errors.password && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.password.message}</span>}
                                </div>
                            }
                        />
                        <Controller
                            name="cpassword"
                            control={control}
                            rules={{
                                required: "Confirm password is required",
                                validate: value => value.trim() === pwd.trim() || "The passwords do not match"
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="password" placeholder="Confirm password" {...field} className='focus-visible:ring-1' />
                                    {errors.cpassword && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.cpassword.message}</span>}
                                </div>
                            }
                        />
                    </CardContent>
                    <CardFooter>
                        <div className='flex justify-center w-full'>
                            <Button
                                type="submit"
                                variant="outline"
                                className='text-link dark:text-gray-400 dark:hover:bg-gray-600 w-full xs:w-auto'
                            >
                                Add
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default Register