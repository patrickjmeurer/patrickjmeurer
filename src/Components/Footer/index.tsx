import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Footer: React.FC = () => {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')
  const tGlobal = useTranslations('Global')
  const { LINKEDIN_URL, GITLAB_URL, GITHUB_URL, EMAIL } = process.env

  return (
    <footer className="mb-[50px] mt-[150px] flex w-full flex-1 flex-col justify-between md:flex-row">
      <div className="order-last mt-10 flex flex-col md:order-first md:mt-0">
        <div className="flex-1">
          <p>logo</p>
          <p className="mt-5 text-sm">{t('Thanks')}</p>
        </div>
        <p className="text-sm">
          {t.rich('Copy', {
            name: () => tGlobal('fullName'),
          })}
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div>
          <h4 className="mb-5 font-bold">Links</h4>
          <div className="flex flex-col gap-2">
            <Link href="/about">{tNav('about')}</Link>
            <Link href="/work">{tNav('work')}</Link>
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
    </footer>
  )
}

export default Footer
