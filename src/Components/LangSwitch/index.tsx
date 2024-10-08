'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Globe } from '@phosphor-icons/react/dist/ssr'
import { getCookie, setCookie } from 'cookies-next'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Select from '../Select'

type Lang = 'pt-br' | 'en'

const LangSwitch: React.FC = () => {
  const t = useTranslations('LangSwitch')
  const [lang, setLang] = useState<Lang>('pt-br')

  useEffect(() => {
    const cookie = getCookie('lang') as Lang

    setLang(cookie)
  }, [])

  const handleChangeLang = (lng: Lang) => {
    setLang(lng)
    location.reload()
    setCookie('lang', lng)
  }

  return (
    <>
      <Menu as="div" className="relative hidden md:block">
        <MenuButton className="flex">
          <Globe size="25" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[rgb(var(--background-color-rgb))] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                onClick={() => handleChangeLang('pt-br')}
                className={`block px-4 py-2 text-sm text-[rgb(var(--dark-grey-rgb))] data-[focus]:bg-[rgb(var(--onyx-rgb))] data-[selected]:bg-black data-[focus]:text-white ${lang === 'pt-br' ? 'itemSelected' : null}`}
              >
                {t('portuguese')}
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => handleChangeLang('en')}
                className={`block px-4 py-2 text-sm text-[rgb(var(--dark-grey-rgb))] data-[focus]:bg-[rgb(var(--onyx-rgb))] data-[selected]:bg-black data-[focus]:text-white ${lang === 'en' ? 'itemSelected' : null}`}
              >
                {t('english')}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <div className="flex w-full md:hidden">
        <Select
          className="flex-1"
          value={lang}
          onChange={({ target: { value } }) => {
            handleChangeLang(value as Lang)
          }}
        >
          <option value="pt-br">{t('portuguese')}</option>
          <option value="en">{t('english')}</option>
        </Select>
      </div>
    </>
  )
}

export default LangSwitch
