import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'
import { use } from 'react'

const AboutPage: React.FC = () => {
  const tGlobal = useTranslations('Global')
  const t = useTranslations('AboutPage')
  const { LINKEDIN_URL } = process.env
  const locale = use(getLocale())

  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-[200px]">
        <h1 className="font-bold">{t('title')}</h1>
        <h2 className="text-base text-[rgba(var(--medium-grey-rgba))]">
          {t('subTitle')}
        </h2>
      </div>

      <section className="mt-[100px]">
        <h3 className="text-[rgb(var(--onyx-rgb))]] text-sm font-semibold uppercase dark:text-[rgba(var(--medium-grey-rgba))]">
          {t('whoIAm')}
        </h3>
        <p className="text-[rgb(var(--dark-grey-rgb))]">
          {t.rich('whoIAmText', {
            name: () => {
              return (
                <span className="text-black dark:text-white">
                  {tGlobal('fullName')}
                </span>
              )
            },
          })}
        </p>
        <h3 className="dark:text-[rgba(var(--medium-grey-rgba)) mt-[30px] text-sm font-semibold uppercase dark:text-[rgba(var(--medium-grey-rgba))]">
          {t('whatIDo')}
        </h3>
        <p className="text-[rgb(var(--dark-grey-rgb))]">{t('whatIDoText')}</p>
        <h3 className="dark:text-[rgba(var(--medium-grey-rgba)) mt-[30px] text-sm font-semibold uppercase dark:text-[rgba(var(--medium-grey-rgba))]">
          {t('whatIDid')}
        </h3>
        <p className="text-[rgb(var(--dark-grey-rgb))]">
          {t.rich('whatIDidText', {
            break: () => {
              return (
                <>
                  <br /> <br />
                </>
              )
            },
          })}
        </p>
      </section>

      <section className="mt-[100px]">
        <p className="text-[rgb(var(--dark-grey-rgb))]">
          {t.rich('bottomText', {
            mail: () => {
              return (
                <Link
                  className="text-[rgb(var(--onyx-rgb))] underline dark:text-white"
                  href="mailto:patrickjmeurer@gmail.com"
                >
                  e-mail
                </Link>
              )
            },
            resume: () => {
              return (
                <Link
                  className="text-[rgb(var(--onyx-rgb))] underline dark:text-white"
                  target="_new"
                  href={
                    locale === 'en' ? '/cv/English.pdf' : '/cv/Portuguese.pdf'
                  }
                >
                  {tGlobal('resume')}
                </Link>
              )
            },
            linkedin: () => {
              return (
                <Link
                  className="text-[rgb(var(--onyx-rgb))] underline dark:text-white"
                  target="_new"
                  href={LINKEDIN_URL}
                >
                  Linkedin
                </Link>
              )
            },
          })}
        </p>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
