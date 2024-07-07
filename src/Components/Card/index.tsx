import Image from 'next/image'

type CardProps = {
  title: string
  subTitle: string
  imageUrl: string
  imageFull?: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  imageUrl,
  imageFull = false,
}) => {
  return (
    <div className="card flex flex-col items-center overflow-hidden rounded-3xl pt-8">
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
          />
        </div>
      ) : (
        <Image src={imageUrl} alt={title} width={250} height={250} />
      )}
    </div>
  )
}

export default Card
