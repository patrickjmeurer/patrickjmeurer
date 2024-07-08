import Footer from '@/Components/Footer'
import GetToKnowMe from '@/Components/GetToKnowMe'
import HeroBanner from '@/Components/HeroBanner'
import LetsWorkCta from '@/Components/LetsWorkCTA'
import Navbar from '@/Components/Navbar'
import SelectedWork from '@/Components/SelectedWork'

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />

      <HeroBanner />

      <SelectedWork />

      <GetToKnowMe />

      <LetsWorkCta />

      <Footer />
    </div>
  )
}
