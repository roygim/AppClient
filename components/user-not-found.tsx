import React from 'react'
import Link from 'next/link';

function UserNotFound() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center relative top-[-130px]'>
                <div className='text-xl mb-2'>
                    User not found
                </div>
                <div>
                    <Link href="/" className="text-sm font-semibold">
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserNotFound