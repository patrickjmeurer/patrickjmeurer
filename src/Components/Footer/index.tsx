import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import LangSwitch from '../LangSwitch'
import ThemeSwitch from '../ThemeSwitch'

const Footer: React.FC = () => {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')
  const tGlobal = useTranslations('Global')
  const { LINKEDIN_URL, GITLAB_URL, GITHUB_URL, EMAIL } = process.env

  return (
    <footer className="mb-24 mt-[150px] flex w-full flex-1 flex-col justify-between md:mb-14 md:flex-row">
      <div className="order-2 mt-10 flex flex-col md:order-first md:mt-0">
        <div className="flex flex-1 flex-col items-center md:items-start">
          <Link href="/">
            <Image
              src="/logo-meurer.svg"
              alt="Meurer"
              width={100}
              height={20}
              className="dark:invert"
            />
          </Link>
          <p className="mb-10 mt-5 text-sm md:mb-0 md:mt-5">{t('Thanks')}</p>
        </div>
        <p className="text-sm">
          {t.rich('Copy', {
            name: () => tGlobal('fullName'),
          })}
        </p>

        <div className="md:hidden"></div>
      </div>
      <div className="flex flex-col gap-5 md:order-2 md:flex-row">
        <div>
          <h4 className="mb-5 font-bold">Links</h4>
          <div className="flex flex-col gap-2">
            <Link href="/about">{tNav('about')}</Link>
            <Link href="/projects">{tNav('projects')}</Link>
            <Link href="/experiences">{tNav('experiences')}</Link>
            <Link href="/tech-stack">{tNav('techStack')}</Link>
            <Link href="/contact">{tNav('contact')}</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-5 font-bold">{t('Elsewhere')}</h4>
          <div className="flex flex-col gap-2">
            <Link href={`mailto:${EMAIL}`} target="_NEW">
              Email
            </Link>
            <Link href={LINKEDIN_URL} target="_NEW">
              Linkedin
            </Link>
            <Link href={GITHUB_URL} target="_NEW">
              Github
            </Link>
            <Link href={GITLAB_URL} target="_NEW">
              Gitlab
            </Link>
          </div>
        </div>
      </div>
      <div className="order-last mt-5 flex flex-col gap-2 md:hidden">
        <LangSwitch />
        <ThemeSwitch />
      </div>
    </footer>
  )
}

export default Footer
