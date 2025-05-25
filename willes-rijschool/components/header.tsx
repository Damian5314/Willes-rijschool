"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-16">
              <Image src="/logo.png" alt="Willes-Rijschool Logo" fill className="object-contain" />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">
              HOME
            </Link>
            <Link href="/over-ons" className="text-gray-800 hover:text-blue-600 font-medium">
              OVER ONS
            </Link>
            <Link href="/tarieven" className="text-gray-800 hover:text-blue-600 font-medium">
              TARIEVEN
            </Link>
            <Link href="/faq" className="text-gray-800 hover:text-blue-600 font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
              CONTACT
            </Link>
          </nav>
          <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
