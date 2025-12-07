'use client'

import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import UserProvider from './state/user/user.provider';

const queryClient = new QueryClient()

function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <UserProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </UserProvider>
        </ThemeProvider>
    )
}

export default Providers