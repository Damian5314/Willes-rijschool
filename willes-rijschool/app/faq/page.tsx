import { FaqHero } from "@/components/faq-hero"
import { FaqContent } from "@/components/faq-content"

export default function FaqPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <FaqHero />
      <FaqContent />
    </main>
  )
}
