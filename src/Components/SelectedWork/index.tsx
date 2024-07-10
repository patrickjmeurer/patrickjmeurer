import { useTranslations } from 'next-intl'
import WorkCard from '../WorkCard'
import { use } from 'react'
import { getLocale } from 'next-intl/server'
import works from '@/json/works.json'

export const revalidate = 86400 // revalidate the data at most every 1 day

const SelectedWork: React.FC = () => {
  const t = useTranslations('SelectedWork')
  const locale = use(getLocale())
  const featuredWorks = works.filter((w) => w.featured)

  if (featuredWorks.length === 0) {
    return
  }

  return (
    <section className="mt-[200px] w-full">
      <h2 className="color-white mb-5 mt-2">{t('title')}</h2>

      <div className="grid grid-cols-1 gap-5">
        {featuredWorks.map(
          ({
            id,
            title,
            titlePt,
            description,
            descriptionPt,
            buttonText,
            buttonTextPt,
            buttonLink,
            icon,
            image,
          }) => (
            <WorkCard
              key={id}
              title={locale === 'en' ? title : titlePt}
              description={locale === 'en' ? description : descriptionPt}
              logoUrl={icon}
              imageUrl={image}
              buttonText={locale === 'en' ? buttonText : buttonTextPt}
              buttonLink={buttonLink}
            />
          ),
        )}
      </div>
    </section>
  )
}

export default SelectedWork
