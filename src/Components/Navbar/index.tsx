import {
  Briefcase,
  Envelope,
  Gear,
  GithubLogo,
  GitlabLogo,
  HouseLine,
  Laptop,
  LinkedinLogo,
  User,
} from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'
import ThemeSwitch from '../ThemeSwitch'
import LangSwitch from '../LangSwitch'
import Link from 'next/link'
import Image from 'next/image'

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar')
  const { LINKEDIN_URL, GITLAB_URL, GITHUB_URL } = process.env

  return (
    <nav className="w-full">
      <nav className="navbar hidden flex-1 items-center justify-between rounded-lg bg-[rgb(var(--navbar-bg-color-rgb))] bg-opacity-30 px-5 py-3 text-[rgb(var(--navbar-text-color-rgb))] md:flex">
        <div className="flex-column flex flex-1 items-center gap-10">
          <a href="/">
            <Image
              src="/logo-meurer.svg"
              alt="Meurer"
              width={40}
              height={20}
              className="dark:invert"
            />
          </a>

          <Link href="/about">{t('about')}</Link>
          <Link href="/projects">{t('projects')}</Link>
          <Link href="/experiences">{t('experiences')}</Link>
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
      </nav>

      <nav className="align-center flex flex-col items-center justify-center md:hidden">
        <a href="/">
          <Image
            src="/logo-meurer.svg"
            alt="Meurer"
            width={100}
            height={100}
            className="dark:invert"
          />
        </a>
        <div className="fixed bottom-5 flex w-11/12 flex-1 items-center justify-between gap-3 rounded-lg border border-[rgba(var(--mobile-navbar-border-color-rgba))] bg-[rgba(var(--mobile-navbar-bg-color-rgba))] p-3 text-[rgb(var(--faint-white-rgb))]">
          <Link href="/">
            <HouseLine size={30} />
          </Link>
          <Link href="/about">
            <User size={30} />
          </Link>
          <Link href="/projects">
            <Laptop size={30} />
          </Link>
          <Link href="/experiences">
            <Briefcase size={30} />
          </Link>
          <Link href="/tech-stack">
            <Gear size={30} />
          </Link>
          <Link href="/contact">
            <Envelope size={30} />
          </Link>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
