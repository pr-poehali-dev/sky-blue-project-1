import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { DownloadSection } from "@/components/download-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesSection />
        <ApplicationsTimeline />
        <DownloadSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}