import { Hero } from './sections/Hero'
import { TruthBlock } from './sections/TruthBlock'
import { Manifesto } from './sections/Manifesto'
import { Method } from './sections/Method'
import { SharedResponsibility } from './sections/SharedResponsibility'
import { PartnershipModel } from './sections/PartnershipModel'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <TruthBlock />
      <Manifesto />
      <Method />
      <SharedResponsibility />
      <PartnershipModel />
      <Footer />
    </main>
  )
}
