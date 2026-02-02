import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AudienceSplit from "@/components/sections/AudienceSplit";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyDrivers from "@/components/sections/WhyDrivers";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero
        headline="Quickstar Transportation Moving America Forward"
        subheadline="Trusted logistics partner for shippers. Career home for drivers. We deliver reliability, integrity, and results—every mile, every time."
        primaryCta={{ label: "I Need to Ship Freight", href: "/ship" }}
        secondaryCta={{ label: "I Want to Drive", href: "/drivers" }}
        videoSrc="/videos/hero.mp4"
        overlay="gradient"
        height="full"
      />

      <StatsBar />

      <AudienceSplit />

      <ServicesOverview />

      <WhyDrivers />

      <CTABanner
        headline="Ready to Move Forward?"
        description="Whether you're shipping freight or starting a driving career, Quickstar is here to help you succeed."
        primaryCta={{ label: "Get a Shipping Quote", href: "/ship/quote" }}
        secondaryCta={{ label: "Apply to Drive", href: "/drivers/apply" }}
        variant="split"
      />
    </>
  );
}
