import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Willes-Rijschool | Waar jij je rijbewijs haalt",
  description: "Willes-Rijschool - De rijschool waar jij je rijbewijs haalt",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
