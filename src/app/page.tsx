import Button from '@/Components/Button'
import Footer from '@/Components/Footer'
import GetToKnowMe from '@/Components/GetToKnowMe'
import HeroBanner from '@/Components/HeroBanner'
import Navbar from '@/Components/Navbar'
import SelectedWorkCard from '@/Components/SelectedWorkCard'
import { PaperPlaneRight } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  const selectedWorks = [
    {
      title: 'ViteRC',
      description:
        'This modern template uses Vite 5, React 18, and TypeScript, providing a fast and efficient development environment. It includes ESLint with Airbnb rules for clean code, Prettier for consistent formatting, Vitest for quick testing, and Git hooks with Husky for automated pre-commit checks. Ideal for developers seeking productivity.',
      logoUrl: '/projects/logo-p2.svg',
      imageUrl: '/projects/p2.png',
      buttonText: 'Access now',
      buttonLink: 'https://github.com/patrickjmeurer/viterc',
    },
    {
      title: 'Unraid Translations',
      description:
        'I worked closely with the vibrant Unraid community to translate the platform into Portuguese, enriching my knowledge of its functionalities while contributing significant improvements. My Pull Requests reflect this collaboration, ensuring a more comprehensive and accessible experience for all users using Unraid in Portuguese.',
      logoUrl: '/unraid-logo.png',
      imageUrl: '/projects/unraid-translations.png',
      buttonText: 'Access now',
      buttonLink: 'https://github.com/unraid/lang-pt_BR',
    },
  ]
  return (
    <>
      <Navbar />

      <HeroBanner />

      <section className="mt-[200px] w-full">
        <h2 className="color-white mb-5 mt-2">Selected Work</h2>

        <div className="grid grid-cols-1 gap-5">
          {selectedWorks.map(
            ({
              title,
              description,
              logoUrl,
              imageUrl,
              buttonText,
              buttonLink,
            }) => (
              <SelectedWorkCard
                key={title}
                title={title}
                description={description}
                logoUrl={logoUrl}
                imageUrl={imageUrl}
                buttonText={buttonText}
                buttonLink={buttonLink}
              />
            ),
          )}
        </div>
      </section>

      <GetToKnowMe />

      <section className="lets-work mt-[100px] flex w-full flex-col items-center md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-bold">Let’s work together</h2>
          <p>
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <div className="mt-10 flex flex-1 justify-center md:mt-0 md:justify-end">
          <Button type="primary" iconStart={<PaperPlaneRight size={20} />}>
            Get in touch
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
