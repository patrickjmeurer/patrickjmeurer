import ExperienceCard from '@/Components/ExperienceCard'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { use } from 'react'
import experiences from '@/json/experiences.json'

export const revalidate = 86400 // revalidate the data at most every 1 day
const ExperiencesPage: React.FC = () => {
  const t = useTranslations('ExperiencesPage')
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

      <section className="mt-[100px] flex flex-col gap-5">
        {experiences.map(
          ({
            id,
            title,
            titlePt,
            subTitle,
            subTitlePt,
            logo,
            description,
            descriptionPt,
            initDate,
            endDate,
          }) => (
            <ExperienceCard
              key={id}
              logoUrl={logo}
              title={locale === 'en' ? title : titlePt}
              subtitle={locale === 'en' ? subTitle : subTitlePt}
              dates={{
                initDate,
                endDate,
              }}
              description={locale === 'en' ? description : descriptionPt}
            />
          ),
        )}
      </section>

      <Footer />
    </div>
  )
}

export default ExperiencesPage
