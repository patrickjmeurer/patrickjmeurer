import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  title: string
  subTitle: string
  imageUrl: string
  href: string
  imageFull?: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  imageUrl,
  href,
  imageFull = false,
}) => {
  return (
    <Link
      href={href}
      className="card flex flex-col items-center overflow-hidden rounded-3xl pt-8"
    >
      <div className="flex flex-col items-center justify-center p-5 text-center">
        <h3 className="text-[rgb(var(--light-grey-rgb))]">{title}</h3>
        <p className="text-balance text-[rgb(var(--dark-grey-rgb))]">
          {subTitle}
        </p>
      </div>
      {imageFull ? (
        <div className="flex w-full flex-1 items-end">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="w-full"
            priority={false}
          />
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt={title}
          width={250}
          height={250}
          priority={false}
        />
      )}
    </Link>
  )
}

export default Card
