import { PaperPlaneRight, Sparkle } from '@phosphor-icons/react/dist/ssr'
import Button from '../Button'
import { useTranslations } from 'next-intl'

const EmptyWorkCard: React.FC = () => {
  const t = useTranslations('EmptyWorkCard')
  const tHero = useTranslations('HeroBanner')

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[rgba(var(--medium-grey-rgba))] bg-[rgb(var(--card-bg-color-rgb))] py-10 text-center dark:bg-[rgba(var(--card-bg-color-rgb),50%)] md:py-[80px]">
      <Sparkle size={70} />

      <h2 className="mt-5 text-2xl font-extrabold">{t('title')}</h2>

      <p className="mb-[100px] mt-2 text-base text-[rgba(var(--dark-grey-rgb),50%)]">
        {t('subTitle')}
      </p>

      <Button
        variant="primary"
        href="/contact"
        iconStart={<PaperPlaneRight size={20} />}
      >
        {tHero('get-in-touch')}
      </Button>
    </div>
  )
}

export default EmptyWorkCard
