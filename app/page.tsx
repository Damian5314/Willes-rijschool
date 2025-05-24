import React from "react";
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Features } from "../components/features"
import { PlanSection } from "../components/plan-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <PlanSection />
    </main>
  )
}
