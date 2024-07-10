import Image from 'next/image'

type AppCardProps = {
  title: string
  tag?: string
  iconUrl: string
}

const AppCard: React.FC<AppCardProps> = ({ title, tag, iconUrl }) => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-xl border-[1px] border-[rgb(var(--card-border-color-rgb))] bg-[rgb(var(--card-bg-color-rgb))] p-3 dark:bg-[rgb(var(--onyx-rgb))] md:flex-col md:items-center md:gap-0">
      <div className="md:py-5 lg:pt-16">
        <Image src={iconUrl} alt={title} width={70} height={70} />
      </div>
      <div className="flex w-full justify-between lg:px-3 lg:pb-3 lg:pt-10">
        <p className="font-semibold">{title}</p>
        {tag ? (
          <p className="rounded-xl border-[1px] border-[rgba(var(--white-rgb),70%)] bg-[rgba(var(--white-rgb),70%)] p-1 text-xs text-[rgb(var(--dark-grey-rgb))] dark:border-[rgb(var(--app-card-border-rgb))] dark:bg-[rgb(var(--onyx-rgb))]">
            {tag}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default AppCard
