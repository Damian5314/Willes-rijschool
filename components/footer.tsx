import React from "react";
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-24">
              <Image src="/full-logo.png" alt="Willes-Rijschool Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-1">Voor meer informatie</p>
            <Link href="tel:+31615941215" className="text-blue-800 font-bold text-lg hover:underline block mb-3">
              +31(6)15941215
            </Link>
            <p className="text-gray-600 mb-1">Bericht ons</p>
            <Link
              href="mailto:info@willesrijschool.online"
              className="text-blue-800 font-bold text-lg hover:underline block"
            >
              info@willesrijschool.online
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end space-x-6">
            <Link
              href="https://wa.me/31615941215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="WhatsApp"
            >
              <Phone size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/willesrijschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@willesrijschool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M15 8v8a4 4 0 0 1-4 4" />
                <line x1="15" y1="4" x2="15" y2="12" />
              </svg>
            </Link>
            <Link
              href="mailto:info@willesrijschool.online"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Willes-Rijschool. Created by{" "}
            <Link
              href="https://damian5314.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Damian Willemse
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
