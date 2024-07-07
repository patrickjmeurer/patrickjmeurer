import Image from 'next/image'
import Button from '../Button'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

type SelectedWorkCardProps = {
  title: string
  description: string
  logoUrl: string
  imageUrl: string
  buttonText: string
  buttonLink?: string
}

const SelectedWorkCard: React.FC<SelectedWorkCardProps> = ({
  title,
  description,
  logoUrl,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="selectedWork flex rounded-3xl pl-10 pt-10">
      <div className="flex w-full flex-1 flex-col justify-between">
        <div>
          <Image src={logoUrl} alt={title} width={50} height={50} />
          <h3 className="mt-5">{title}</h3>
          <p className="mt-5 text-balance text-[rgb(var(--dark-grey-rgb))]">
            {description}
          </p>
        </div>
        <div className="mb-10 mt-5">
          <Button
            type="link"
            iconEnd={<ArrowRight size={20} />}
            link={buttonLink}
          >
            {buttonText}
          </Button>
        </div>
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

export default SelectedWorkCard
