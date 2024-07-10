import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Button from '@/Components/Button'
import './reset.css'

export default function NotFoundPage() {
  const t = useTranslations('NotFound')

  return (
    <div className="mt-[-3rem] flex h-screen w-full flex-col items-center justify-center">
      <Image
        src="/memoji-shrug.png"
        width={200}
        height={200}
        alt="¯\_(ツ)_/¯"
        priority
        quality={100}
      />
      <h1 className="dark:text-white">Ooops...</h1>
      <h3 className="text-[rgba(var(--medium-grey-rgba))]">{t('subtitle')}</h3>
      <div className="mt-10 flex flex-row gap-5">
        <Button variant="secondary" href="/">
          {t('button')}
        </Button>
      </div>
    </div>
  )
}
