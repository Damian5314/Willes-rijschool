"use client"

import React from "react";
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-800">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-6 mt-12">
        <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium text-xl" onClick={onClose}>
          HOME
        </Link>
        <Link href="/over-ons" className="text-gray-800 hover:text-blue-600 font-medium text-xl" onClick={onClose}>
          OVER ONS
        </Link>
        <Link href="/tarieven" className="text-gray-800 hover:text-blue-600 font-medium text-xl" onClick={onClose}>
          TARIEVEN
        </Link>
        <Link href="/faq" className="text-gray-800 hover:text-blue-600 font-medium text-xl" onClick={onClose}>
          FAQ
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium text-xl" onClick={onClose}>
          CONTACT
        </Link>
      </nav>
    </div>
  )
}
