"use client"
import React from "react";

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Building2, Building, CreditCard, MessageSquare } from "lucide-react"

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData)
    alert("Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
            <p className="text-gray-600 mb-8">
              Wil je weten wat wij voor je kunnen betekenen? Neem dan geheel vrijblijvend contact met ons op via het
              onderstaand nummer of mail:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Telefoon:</p>
                  <Link href="tel:+31615941215" className="text-blue-600 hover:underline">
                    +31(6)15941215
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Emailadres:</p>
                  <Link href="mailto:info@willesrijschool.online" className="text-blue-600 hover:underline">
                    info@willesrijschool.online
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <Building2 className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Rijschool nummer (CBR nummer):</p>
                  <p>154523</p>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">K.V.K. nummer:</p>
                  <p>81692471</p>
                </div>
              </div>

              <div className="flex items-start">
                <CreditCard className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Bank:</p>
                  <p>-</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">TikTok:</p>
                  <Link
                    href="https://www.tiktok.com/@willesrijschool"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.tiktok.com/@willesrijschool
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Instagram:</p>
                  <Link
                    href="https://www.instagram.com/willesrijschool/"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.instagram.com/willesrijschool/
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Heb je een vraag?</h2>
            <p className="text-gray-600 mb-8">
              Vul dan het onderstaande contactformulier in. Wij nemen zo snel mogelijk contact met je op!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Voornaam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Bijv. John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mailadres <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Bijv. john@doe.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Onderwerp"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Voer je bericht in..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors"
                >
                  VERSTUREN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
