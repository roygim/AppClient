'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from "@/components/ui/slider"

function page() {
    const [value, setValue] = useState(0)

    const handleValueChange = (newValues) => {
        setLocalValues(newValues);
        if (onValueChange) {
            onValueChange(newValues);
        }
    }

    return (
        <div className='flex flex-col sm:flex-row'>
            products
            {/* <div className='w-full p-4 sm:w-[280px] divide-y-2'>
                <div className='flex flex-row justify-between items-center px-4 pb-2'>
                    <h2 className='font-bold'>Filters</h2>
                    <Button
                        variant="link"
                        className='p-0 h-auto hover:no-underline dark:text-darkMode-dark'
                    >
                        reset
                    </Button>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold'>Price range:</h3>
                    <div>
                        <Slider
                            defaultValue={[33]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={handleValueChange}
                            onChange={setValue}
                        />
                    </div>
                </div>
            </div>
            <div>
                items
            </div> */}
        </div>
    )
}

export default page