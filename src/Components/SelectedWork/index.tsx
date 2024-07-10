import { useTranslations } from 'next-intl'
import WorkCard from '../WorkCard'
import { cache, use } from 'react'
import { Projects } from '@prisma/client'
import { getLocale } from 'next-intl/server'
import prisma from '@/lib/prisma'

export const revalidate = 86400 // revalidate the data at most every 1 day

const getProjects = cache(async () => {
  const projects: Projects[] = await prisma.projects.findMany({
    where: { featured: true },
  })

  return projects
})

const SelectedWork: React.FC = () => {
  const t = useTranslations('SelectedWork')
  const projects = use(getProjects())
  const locale = use(getLocale())

  if (projects.length === 0) {
    return
  }

  return (
    <section className="mt-[200px] w-full">
      <h2 className="color-white mb-5 mt-2">{t('title')}</h2>

      <div className="grid grid-cols-1 gap-5">
        {projects.map(
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
