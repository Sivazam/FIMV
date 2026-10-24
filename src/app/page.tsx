import { Preloader } from "@/components/fim/preloader";
import { Navbar } from "@/components/fim/navbar";
import { Hero } from "@/components/fim/hero";
import { Ticker } from "@/components/fim/ticker";
import { Manifesto } from "@/components/fim/manifesto";
import { Pillars } from "@/components/fim/pillars";
import { Services } from "@/components/fim/services";
import { Founder } from "@/components/fim/founder";
import { Process, Parties } from "@/components/fim/process";
import { Cta } from "@/components/fim/cta";
import { Contact } from "@/components/fim/contact";
import { Footer } from "@/components/fim/footer";
import { WhatsAppFab } from "@/components/fim/whatsapp";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Ticker />
        <Manifesto />
        <Pillars />
        <Services />
        <Ticker variant="cream" slow />
        <Founder />
        <Process />
        <Parties />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
