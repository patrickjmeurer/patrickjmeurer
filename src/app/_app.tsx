import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
