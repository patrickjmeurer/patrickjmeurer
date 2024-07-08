'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Laptop, MoonStars, Sun } from '@phosphor-icons/react/dist/ssr'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  console.log({ theme })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex">
        {theme === 'dark' ? <MoonStars size={25} /> : <Sun size={25} />}
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-[rgb(var(--background-color-rgb))] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              onClick={() => setTheme('system')}
              className={`block px-4 py-2 text-sm text-[rgb(var(--dark-grey-rgb))] data-[focus]:bg-[rgb(var(--onyx-rgb))] data-[selected]:bg-black data-[focus]:text-white ${theme === 'system' ? 'itemSelected' : null}`}
            >
              <Laptop size={25} />
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => setTheme('dark')}
              className={`block px-4 py-2 text-sm text-[rgb(var(--dark-grey-rgb))] data-[focus]:bg-[rgb(var(--onyx-rgb))] data-[selected]:bg-black data-[focus]:text-white ${theme === 'dark' ? 'itemSelected' : null}`}
            >
              <MoonStars size={25} />
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => setTheme('light')}
              className={`block px-4 py-2 text-sm text-[rgb(var(--dark-grey-rgb))] data-[focus]:bg-[rgb(var(--onyx-rgb))] data-[selected]:bg-black data-[focus]:text-white ${theme === 'light' ? 'itemSelected' : null}`}
            >
              <Sun size={25} />
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default ThemeSwitch
