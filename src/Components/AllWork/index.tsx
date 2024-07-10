import WorkCard from '../WorkCard'
import prisma from '@/lib/prisma'
import { Projects } from '@prisma/client'
import { getLocale } from 'next-intl/server'
import { cache } from 'react'

export const revalidate = 86400 // revalidate the data at most every 1 day

const getProjects = cache(async () => {
  const projects: Projects[] = await prisma.projects.findMany()

  return projects
})

const AllWork: React.FC = async () => {
  const projects = await getProjects()
  const locale = await getLocale()

  return (
    <>
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
    </>
  )
}

export default AllWork
