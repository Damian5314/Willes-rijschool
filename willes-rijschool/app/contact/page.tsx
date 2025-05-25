import { ContactHero } from "@/components/contact-hero"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <ContactHero />
      <ContactContent />
    </main>
  )
}
