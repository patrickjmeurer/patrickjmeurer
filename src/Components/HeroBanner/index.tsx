import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Button from '../Button'

const HeroBanner: React.FC = () => {
  const t = useTranslations('HeroBanner')

  return (
    <div className="mt-[100px] flex items-center">
      <div>
        <h1 className="font-extrabold">
          <span className="text-[rgb(var(--dark-grey-rgb))]">
            <p className="visible md:hidden">{t('hi')}</p>
            {t('im')}
          </span>
          Patrick Jean
        </h1>
        <p className="text-balance text-[rgb(var(--dark-grey-rgb))]">
          {t('description')}
        </p>
        <div className="mt-10 flex flex-col gap-5 md:flex-row">
          <Button href="" variant="primary">
            {t('see-resume')}
          </Button>
          <Button href="" variant="secondary">
            {t('get-in-touch')}
          </Button>
        </div>
      </div>
      <div>
        <Image
          className="hidden lg:block"
          src="/memoji-notebook.png"
          alt="Patrick's Memoji"
          width={350}
          height={350}
          priority
        />
      </div>
    </div>
  )
}

export default HeroBanner
