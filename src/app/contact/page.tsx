import ContactForm from '@/Components/ContactForm'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import { useTranslations } from 'next-intl'
import { ReCaptchaProvider } from 'next-recaptcha-v3'

const ContactPage: React.FC = () => {
  const t = useTranslations('ContactPage')
  const { RECAPTCHA_FRONT_KEY } = process.env

  return (
    <ReCaptchaProvider reCaptchaKey={RECAPTCHA_FRONT_KEY}>
      <div className="w-full">
        <Navbar />

        <div className="mt-[200px]">
          <h1 className="font-bold">{t('title')}</h1>
          <h2 className="text-base text-[rgba(var(--medium-grey-rgba))]">
            {t('subTitle')}
          </h2>
        </div>

        <section className="mt-[100px] gap-5 rounded-lg border-[1px] border-[rgb(var(--card-border-color-rgb))] bg-[rgb(var(--card-bg-color-rgb))] pb-5 dark:bg-[rgb(var(--onyx-rgb))]">
          <ContactForm />
        </section>

        <Footer />
      </div>
    </ReCaptchaProvider>
  )
}

export default ContactPage
