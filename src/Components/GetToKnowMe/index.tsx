import { useTranslations } from 'next-intl'
import Card from '../Card'

const GetToKnowMe: React.FC = () => {
  const t = useTranslations('GetToKnowMe')
  return (
    <section className="mt-[200px] w-full">
      <h2 className="color-white mb-5 mt-2">{t('title')}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card
          title={t('aboutMe')}
          subTitle={t('aboutMeSub')}
          imageUrl="/memoji-hello.png"
          href="/about"
        />
        <Card
          title={t('experiences')}
          subTitle={t('experiencesSub')}
          imageUrl="/code.png"
          href="/experiences"
          imageFull
        />
        <Card
          title={t('projects')}
          subTitle={t('projectsSub')}
          imageUrl="/code.png"
          href="/projects"
          imageFull
        />
        <Card
          title={t('techStack')}
          subTitle={t('techStackSub')}
          imageUrl="/techs.png"
          href="/tech-stack"
          imageFull
        />
      </div>
    </section>
  )
}

export default GetToKnowMe
