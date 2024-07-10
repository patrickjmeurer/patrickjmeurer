import WorkCard from '../WorkCard'
import { getLocale } from 'next-intl/server'
import works from '@/json/works.json'

export const revalidate = 86400 // revalidate the data at most every 1 day

const AllWork: React.FC = async () => {
  const locale = await getLocale()

  return (
    <>
      {works.map(
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
