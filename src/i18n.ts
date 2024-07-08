import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const lang = cookies().get('lang')?.value || 'pt-br'

  const locale = lang

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
