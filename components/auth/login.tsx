'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '../ui/input'
import { Button } from "@/components/ui/button"
import { useSearchParams } from 'next/navigation'
import { useForm, Controller, SubmitHandler } from "react-hook-form"

interface LoginInputs {
    email: string
    password: string
}


function Login() {
    const searchParams = useSearchParams()

    const currentEmail = searchParams.get('email') ?? ''

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<LoginInputs>({
        defaultValues: {
            email: currentEmail ?? '',
            password: ''
        },
    })

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className='w-[500px] dark:bg-darkMode-card'>
                    <CardHeader>
                        <CardTitle>
                            Sign In
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='pb-[12px]'>
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
                                    {errors.email && <span className="inline-block pt-[4px] pl-[8px] text-sm text-red-700">{errors.email.message}</span>}
                                </div>
                            }
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 4,
                                    message: "Password min length is 4",
                                }
                            }}
                            render={({ field }) =>
                                <div className='mb-[18px]'>
                                    <Input type="password" placeholder="Password" {...field} />
                                    {errors.password && <span className="inline-block pt-[4px] pl-[8px] text-sm text-red-700">{errors.password.message}</span>}
                                </div>
                            }
                        />
                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button
                            type="submit"
                            variant="link"
                            className='text-link dark:text-primary underline pl-1'
                        >
                            Login
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default Login