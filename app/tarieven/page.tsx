import { Header } from "../../components/header"
import { PricingHero } from "../../components/pricing-hero"
import { PricingPackages } from "../../components/pricing-packages"

export default function TarievenPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <PricingHero />
      <PricingPackages />
    </main>
  )
}
