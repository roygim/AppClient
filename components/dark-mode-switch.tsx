'use client'

import { useTheme } from 'next-themes';
import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;

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

export default DarkModeSwitch