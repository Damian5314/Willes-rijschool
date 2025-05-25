import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AboutHero />
      <AboutContent />
    </main>
  )
}
