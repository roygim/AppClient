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

function Login() {
    const searchParams = useSearchParams()

    const currentEmail = searchParams.get('email') ?? ''

    return (
        <div className="flex justify-center">
            <Card className='w-[500px] dark:bg-darkMode-card'>
                <CardHeader>
                    <CardTitle>
                        Sign In
                    </CardTitle>
                </CardHeader>
                <CardContent className='pb-[12px]'>
                    <Input type="email" placeholder="Email" className='mb-[18px]' value={currentEmail}/>
                    <Input type="password" placeholder="Password" />
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button
                        variant="link"
                        className='text-link dark:text-primary underline pl-1'
                        onClick={() => alert(1)}
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login