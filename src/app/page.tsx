import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Intro } from "@/components/site/intro";
import { Vision } from "@/components/site/vision";
import { Exhibitors } from "@/components/site/exhibitors";
import { Visitors } from "@/components/site/visitors";
import { Objectives } from "@/components/site/objectives";
import { Benefits } from "@/components/site/benefits";
import { Organizer } from "@/components/site/organizer";
import { Contact } from "@/components/site/contact";
import { StickyCta } from "@/components/site/sticky-cta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-navy-950 pb-16 md:pb-0">
      <SiteHeader />
      <Hero />
      <Intro />
      <Vision />
      <Exhibitors />
      <Visitors />
      <Objectives />
      <Benefits />
      <Organizer />
      <Contact />
      <StickyCta />
    </main>
  );
}
