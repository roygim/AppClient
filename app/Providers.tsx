'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme='system' attribute='class'>
            <div className=''>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers