import AppCard from '@/Components/AppCard'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { useTranslations } from 'next-intl'

const TechStackPage: React.FC = () => {
  const t = useTranslations('TechStackPage')
  const dev = [
    {
      title: 'NestJS',
      tag: 'Web Framework',
      iconUrl: '/icons/nestjs.svg',
    },
    {
      title: 'NextJS',
      tag: 'Web Framework',
      iconUrl: '/icons/nextjs.svg',
    },
    {
      title: 'TailwindCSS',
      tag: 'CSS',
      iconUrl: '/icons/tailwind.svg',
    },
    {
      title: 'React',
      tag: 'Web Framework',
      iconUrl: '/icons/react.svg',
    },
    {
      title: 'NodeJS',
      tag: 'Web Framework',
      iconUrl: '/icons/nodejs.svg',
    },
    {
      title: 'Github',
      tag: 'Version Control',
      iconUrl: '/icons/github.svg',
    },
    {
      title: 'Gitlab',
      tag: 'Version Control',
      iconUrl: '/icons/gitlab.svg',
    },
    {
      title: 'Vercel',
      tag: 'Deployment',
      iconUrl: '/icons/vercel.svg',
    },
    {
      title: 'AWS',
      tag: 'Deployment',
      iconUrl: '/icons/aws.svg',
    },
    {
      title: 'VSCode',
      tag: 'Editor',
      iconUrl: '/icons/vscode.svg',
    },
    {
      title: 'Figma',
      tag: 'Design',
      iconUrl: '/icons/figma.svg',
    },
    {
      title: 'TypeScript',
      tag: 'Language',
      iconUrl: '/icons/typescript.svg',
    },
    {
      title: 'React Hook Form',
      tag: 'Library',
      iconUrl: '/icons/react-hook-form.svg',
    },
    {
      title: 'Expo',
      tag: 'Mobile Framework',
      iconUrl: '/icons/expo.svg',
    },
    {
      title: 'Laravel',
      tag: 'Web Framework',
      iconUrl: '/icons/laravel.svg',
    },
    {
      title: 'Styled Components',
      tag: 'CSS',
      iconUrl: '/icons/styled-components.svg',
    },
    {
      title: 'Docker',
      tag: 'Software Platform',
      iconUrl: '/icons/docker.svg',
    },
    {
      title: 'Postman',
      tag: 'Tools',
      iconUrl: '/icons/postman.svg',
    },
  ]

  const apps = [
    {
      title: 'Notion',
      tag: 'Notes',
      iconUrl: '/icons/notion.svg',
    },
    {
      title: 'ChatGPT',
      tag: 'Productivity',
      iconUrl: '/icons/chatgpt.svg',
    },
    {
      title: 'Discord',
      tag: 'Communication',
      iconUrl: '/icons/discord.svg',
    },
    {
      title: 'Chrome',
      tag: 'Browser',
      iconUrl: '/icons/chrome.svg',
    },
    {
      title: 'Spark',
      tag: 'Email',
      iconUrl: '/icons/spark.svg',
    },
    {
      title: 'Spotify',
      tag: 'Music',
      iconUrl: '/icons/spotify.svg',
    },
    {
      title: 'Twitch',
      tag: 'Entertainment',
      iconUrl: '/icons/twitch.svg',
    },
  ]

  const hardware = [
    {
      title: 'Apple Macbook Pro M1 2021',
      iconUrl: '/icons/macbook.svg',
    },
    {
      title: 'Logitech G903 Lightspeed',
      iconUrl: '/icons/mouse.svg',
    },
    {
      title: '2x LG UltraGear 34GP63A-B',
      iconUrl: '/icons/monitor.svg',
    },
    {
      title: 'Keychron K5 Max Low',
      iconUrl: '/icons/keychron.svg',
    },
    {
      title: 'Apple Airpods Pro 2',
      iconUrl: '/icons/airpods.svg',
    },
    {
      title: 'Sony Playstation 5',
      iconUrl: '/icons/ps5.svg',
    },
    {
      title: 'Geniodesk Pro',
      iconUrl: '/icons/geniodesk.svg',
    },
    {
      title: 'Comfy Ergofy Top',
      iconUrl: '/icons/cadeira.svg',
    },
  ]

  const games = [
    {
      title: 'Stardew Valley',
      iconUrl: '/icons/stardew.svg',
    },
    {
      title: 'GTA Online',
      iconUrl: '/icons/gta.svg',
    },
    {
      title: 'RDR 2',
      iconUrl: '/icons/rdr2.svg',
    },
  ]

  return (
    <div className="w-full">
      <Navbar />

      <div className="mt-[200px]">
        <h1 className="font-bold">{t('title')}</h1>
        <h2 className="text-base text-[rgba(var(--medium-grey-rgba))]">
          {t('subTitle')}
        </h2>
      </div>

      <section className="mt-[100px]">
        <h3 className="text-[rgb(var(--light-grey-rgb))] dark:text-[rgb(var(--dark-grey-rgb))]">
          Dev & Design
        </h3>
        <div className="mb-10 mt-3 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {dev.map(({ title, tag, iconUrl }) => (
            <AppCard key={title} title={title} tag={tag} iconUrl={iconUrl} />
          ))}
        </div>

        <h3 className="text-[rgb(var(--light-grey-rgb))] dark:text-[rgb(var(--dark-grey-rgb))]">
          Apps
        </h3>
        <div className="mb-10 mt-3 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {apps.map(({ title, tag, iconUrl }) => (
            <AppCard key={title} title={title} tag={tag} iconUrl={iconUrl} />
          ))}
        </div>

        <h3 className="text-[rgb(var(--light-grey-rgb))] dark:text-[rgb(var(--dark-grey-rgb))]">
          Hardware
        </h3>
        <div className="mb-10 mt-3 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {hardware.map(({ title, iconUrl }) => (
            <AppCard key={title} title={title} iconUrl={iconUrl} />
          ))}
        </div>

        <h3 className="text-[rgb(var(--light-grey-rgb))] dark:text-[rgb(var(--dark-grey-rgb))]">
          Games
        </h3>
        <div className="mb-10 mt-3 grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {games.map(({ title, iconUrl }) => (
            <AppCard key={title} title={title} iconUrl={iconUrl} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TechStackPage
