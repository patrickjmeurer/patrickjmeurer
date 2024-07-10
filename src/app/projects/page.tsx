import AllWork from '@/Components/AllWork'
import EmptyWorkCard from '@/Components/EmptyWorkCard'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { useTranslations } from 'next-intl'

const ProjectsPage: React.FC = () => {
  const t = useTranslations('ProjectsPage')

  return (
    <div className="w-full">
      <Navbar />

      <div className="mt-[200px]">
        <h1 className="font-bold">{t('title')}</h1>
        <h2 className="text-base text-[rgba(var(--medium-grey-rgba))]">
          {t('subTitle')}
        </h2>
      </div>

      <section className="mt-[100px] grid grid-cols-1 gap-5">
        <AllWork />

        <EmptyWorkCard />
      </section>

      <Footer />
    </div>
  )
}

export default ProjectsPage
