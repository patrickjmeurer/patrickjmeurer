import Image from 'next/image'
import Button from '../Button'

const HeroBanner: React.FC = () => {
  return (
    <div className="mt-[100px] flex items-center">
      <div>
        <h1 className="font-extrabold">
          <span className="text-[rgb(var(--dark-grey-rgb))]">
            <p className="visible md:hidden">Hi 👋🏻</p>
            I&apos;m{' '}
          </span>
          Patrick Jean
        </h1>
        <p className="text-balance text-[rgb(var(--dark-grey-rgb))]">
          A Full Stack Software Engineer helping companies turn their visions
          into a digital reality. I specialize in building modern mobile and
          web-based apps.
        </p>
        <div className="mt-10 flex flex-col gap-5 md:flex-row">
          <Button type="primary">See my resume</Button>
          <Button type="secondary">Get in touch</Button>
        </div>
      </div>
      <div>
        <Image
          className="hidden lg:block"
          src="/memoji-notebook.png"
          alt="Patrick's Memoji"
          width={350}
          height={350}
          priority
        />
      </div>
    </div>
  )
}

export default HeroBanner
