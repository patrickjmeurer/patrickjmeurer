import Image from 'next/image'
import Button from '../Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

type WorkCardProps = {
  title: string
  description: string
  logoUrl: string
  imageUrl: string
  buttonText?: string
  buttonLink?: string
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  logoUrl,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex rounded-3xl border-[rgb(var(--card-border))] bg-[rgb(var(--card-bg-color-rgb))] pl-10 pr-10 pt-10 dark:bg-[rgb(var(--onyx-rgb))] xl:pr-0">
      <div className="flex w-full flex-1 flex-col justify-between">
        <div>
          <Image src={logoUrl} alt={title} width={50} height={50} />
          <h3 className="mt-5">{title}</h3>
          <p className="mt-5 text-balance text-[rgb(var(--dark-grey-rgb))]">
            {description}
          </p>
        </div>
        {buttonText ? (
          <div className="mb-10 mt-5">
            <Button
              type="link"
              variant="link"
              iconEnd={<ArrowRight size={20} />}
              href={buttonLink || ''}
            >
              {buttonText}
            </Button>
          </div>
        ) : null}
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="hidden xl:block"
      />
    </div>
  )
}

export default WorkCard
