'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import UserProvider from './state/user/user.provider';

const queryClient = new QueryClient()

function Providers({ children }: { children: React.ReactNode }) {
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