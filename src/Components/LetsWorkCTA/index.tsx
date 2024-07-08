import { PaperPlaneRight } from '@phosphor-icons/react/dist/ssr'
import Button from '../Button'
import { useTranslations } from 'next-intl'

const LetsWorkCta: React.FC = () => {
  const t = useTranslations('LetsWork')
  return (
    <section className="lets-work mt-[100px] flex w-full flex-col items-center md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <h2 className="font-bold">{t('title')}</h2>
        <p>{t('subTitle')}</p>
      </div>
      <div className="mt-10 flex flex-1 justify-center md:mt-0 md:justify-end">
        <Button
          href=""
          variant="primary"
          iconStart={<PaperPlaneRight size={20} />}
        >
          {t('buttonCta')}
        </Button>
      </div>
    </section>
  )
}

export default LetsWorkCta
