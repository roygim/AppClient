'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default Providers