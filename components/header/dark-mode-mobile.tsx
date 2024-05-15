'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Switch } from '../ui/switch';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function DarkModeMobile() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isChecked, setChecked] = useState<boolean>(currentTheme === "dark")

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  console.log('currentTheme ' + currentTheme);
  console.log('isChecked ' + isChecked);

  const toggleMode = () => {
    console.log('toggleMode' + isChecked);
    if (isChecked) {
      setTheme('light')
      setChecked(false)
    } else {
      setTheme('dark')
      setChecked(true)
    }
  }

  return (
    <div className='relative'>
      <Switch
        checked={isChecked}
        onCheckedChange={toggleMode}
        className='border-amber-500 p-[2px] data-[state=checked]:bg-black data-[state=unchecked]:bg-white'
        thumbClass='bg-amber-500 h-4 w-4'
      />
      <MdOutlineLightMode
        className='absolute top-[4px] left-[4px] text-amber-500 z-0'
        onClick={toggleMode}
      />
      <MdOutlineDarkMode
        className='absolute top-[4px] right-[4px] text-amber-500 z-0'
        onClick={toggleMode}
      />
    </div>
  )
}

export default DarkModeMobile