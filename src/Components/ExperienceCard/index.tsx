import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useTranslations } from 'next-intl'
import ShowMore from '../ShowMore'

type DatesProps = {
  initDate: string
  endDate: string
}

type ExperienceCardProps = {
  title: string
  subtitle: string
  description: string
  dates: DatesProps
  logoUrl: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logoUrl,
  title,
  subtitle,
  description,
  dates,
}) => {
  const t = useTranslations('ExperienceCard')
  const initDate = dates.initDate.split('-').join('/') // Y-M-D
  const endDate = dates.endDate.split('-').join('/') // Y-M-D

  return (
    <div className="items-center justify-center rounded-3xl border-[rgb(var(--card-border))] bg-[rgb(var(--card-bg-color-rgb))] px-5 py-10 dark:bg-[rgb(var(--onyx-rgb))] md:flex md:items-start md:justify-start md:gap-5 md:px-10">
      <div className="flex items-center justify-center md:items-start md:justify-start">
        <Image
          src={logoUrl}
          alt={title}
          width={75}
          height={75}
          className="max-h-[75px]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col md:mt-0">
        <h3 className="font-semibold text-[rgb(var(--card-color))]">{title}</h3>
        <p className="font-medium text-[rgb(var(--dark-grey-rgb))]">
          {subtitle}
        </p>
        <p className="font-thin text-[rgb(var(--dark-grey-rgb))]">
          {`${format(initDate, 'MMM yyyy', { locale: ptBR })} - ${format(endDate, 'MMM yyyy', { locale: ptBR })}`}
        </p>
        <ShowMore
          lines={5}
          more={
            <span className="text-[rgb(var(--card-color))]">
              {t('showMore')}
            </span>
          }
          less=""
          className="mt-5 text-balance text-[rgb(var(--dark-grey-rgb))]"
          anchorClass="show-more-less-clickable"
          expanded={false}
          truncatedEndingComponent={'... '}
        >
          {description}
        </ShowMore>
      </div>
    </div>
  )
}

export default ExperienceCard
