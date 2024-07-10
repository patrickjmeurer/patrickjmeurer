import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'
import ThemeSwitch from '../ThemeSwitch'
import LangSwitch from '../LangSwitch'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar')
  const { LINKEDIN_URL, GITLAB_URL, GITHUB_URL } = process.env

  return (
    <nav className="w-full">
      <div className="navbar hidden flex-1 items-center justify-between rounded-lg bg-[rgba(var(--navbar-bg-color-rgba))] bg-opacity-30 p-3 text-[rgb(var(--navbar-text-color-rgb))] md:flex">
        <div className="flex-column flex flex-1 gap-10">
          <a href="/">
            <p>logo</p>
          </a>

          <Link href="/about">{t('about')}</Link>
          <Link href="/work">{t('work')}</Link>
          <Link href="/tech-stack">{t('techStack')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </div>
        <div className="flex-column flex items-center gap-3">
          <Link href={GITHUB_URL} target="_NEW">
            <GithubLogo size="25" />
          </Link>
          <Link href={GITLAB_URL} target="_NEW">
            <GitlabLogo size="25" />
          </Link>
          <Link href={LINKEDIN_URL} target="_NEW">
            <LinkedinLogo size="25" />
          </Link>

          <div className="h-[25px] w-px bg-black/10 dark:bg-white/10" />

          <LangSwitch />
          <ThemeSwitch />
        </div>
      </div>
      <div className="align-center flex justify-center md:hidden">
        <h2>logo</h2>
      </div>
    </nav>
  )
}

export default Navbar
