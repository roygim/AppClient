'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function DarkMode() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  if (currentTheme === "dark") {
    return (
      <MdLightMode 
        className='text-xl cursor-pointer hover:text-amber-500'
        onClick={() => setTheme('light')}
      />
    )
  }

  else {
    return (
      <MdDarkMode 
        className='text-xl cursor-pointer hover:text-amber-500'
        onClick={() => setTheme('dark')}
      />
    )
  }
}

export default DarkMode