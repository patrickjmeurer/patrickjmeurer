'use client'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import {
  ArrowsClockwise,
  PaperPlaneRight,
} from '@phosphor-icons/react/dist/ssr'
import { Bounce, toast } from 'react-toastify'
import { useTranslations } from 'next-intl'
import { useReCaptcha } from 'next-recaptcha-v3'

type FormData = {
  email: string
  name: string
  subject: string
  text: string
}
const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    subject: yup.string().required(),
    text: yup.string().required(),
  })
  .required()

const ContactForm: React.FC = () => {
  const t = useTranslations('ContactPage')
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const { executeRecaptcha } = useReCaptcha()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    const token = await executeRecaptcha('form_submit')

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
        token,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('error while sending message')
        }
      })
      .then(() => {
        reset()
        toast.success(t('successSend'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      })
      .catch(() => {
        toast.error(t('errorSend'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b-[rgba(0,0,0, 1%)] flex border-b-[1px] p-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border-[1px] border-[#D62929] bg-[#F63636]"></div>
          <div className="h-3 w-3 rounded-full border-[1px] border-[#CEA435] bg-[#F6C136]"></div>
          <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#68F636]"></div>
        </div>
        <h4 className="flex-1 text-center">{t('mailTitle')}</h4>
      </div>

      <div className="px-5">
        <div className="flex w-full gap-2 p-2">
          <label className="font-medium">{t('email')}:</label>
          <input
            className={`flex-1 rounded-lg bg-inherit px-2 font-light placeholder-[rgb(var(--dark-grey-rgb))] ${errors.email ? 'bg-red-300' : null}`}
            placeholder={t('emailPlaceholder')}
            {...register('email')}
            disabled={isLoading}
          />
        </div>
        <div className="border-t-[rgba(0,0,0, 1%)] flex gap-2 border-t-[1px] p-2">
          <label className="font-medium">{t('name')}:</label>
          <input
            className={`flex-1 rounded-lg bg-inherit px-2 font-light placeholder-[rgb(var(--dark-grey-rgb))] ${errors.name ? 'bg-red-300' : null}`}
            placeholder={t('namePlaceholder')}
            {...register('name')}
            disabled={isLoading}
          />
        </div>
        <div className="border-t-[rgba(0,0,0, 1%)] flex gap-2 border-t-[1px] p-2">
          <label className="font-medium">{t('subject')}:</label>
          <input
            className={`flex-1 rounded-lg bg-inherit px-2 font-light placeholder-[rgb(var(--dark-grey-rgb))] ${errors.subject ? 'bg-red-300' : null}`}
            placeholder={t('subjectPlaceholder')}
            {...register('subject')}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="border-t-[rgba(0,0,0, 1%)] mb-5 mt-[20px] flex border-t-[1px] px-7">
        <textarea
          rows={10}
          className={`mt-5 flex-1 rounded-xl bg-[rgb(var(--faint-white-rgb))] p-5 dark:bg-[rgb(var(--black-rgb))] ${errors.text ? 'bg-red-300' : null}`}
          placeholder={t('textPlaceholder')}
          {...register('text')}
          disabled={isLoading}
        ></textarea>
      </div>

      <div className="flex justify-end px-7">
        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          iconEnd={!isLoading ? <PaperPlaneRight size={20} /> : null}
        >
          {isLoading ? (
            <ArrowsClockwise className="animate-spin" size={20} />
          ) : (
            t('sendButton')
          )}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
