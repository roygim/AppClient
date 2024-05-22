'use client'

import React, { useContext } from 'react'
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
import useUsers from '@/lib/hooks/useUsers'
import Spinner from '../spinner'
import { UserContext } from '@/lib/state/user/user.context'
import { UserContextValue } from '@/lib/state/user/user.type'
import { useRouter } from 'next/navigation'

interface LoginInputs {
    email: string
    password: string
}

function Login() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentEmail = searchParams.get('email') ?? ''
    const { saveUser } = useContext(UserContext) as UserContextValue

    const { loginUserMutation } = useUsers()

    const {
        mutateAsync: loginUserAsync,
        isLoading: isLoginLoading,
        isError: isLoginError,
        error: loginError,
        isSuccess: isLoginSuccess } = loginUserMutation()

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

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        const { email, password } = data

        try {
            const res = await loginUserAsync({ email, password })
            if(res && res.user) {
                saveUser(res.user)
                router.push(`/user`)
            }
        } catch (error: any) {
            console.log(loginError)
        }
    }

    const getError = () => {
        const currentError = loginError as any
        if (currentError && currentError.response && currentError.response.data) {
            return currentError.response.data
        }
        return 'error'
    }

    return (
        <div className="sm:flex sm:justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className='dark:bg-darkMode-card sm:w-[500px]'>
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
                                    {errors.email && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.email.message}</span>}
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
                                    {errors.password && <span className="inline-block pt-[4px] pl-[8px] text-sm text-alert-error">{errors.password.message}</span>}
                                </div>
                            }
                        />
                    </CardContent>
                    <CardFooter className='flex justify-center'>
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
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default Login