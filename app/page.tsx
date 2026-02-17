import Hero from "@/components/Hero";
import AnimatedStory from "@/components/AnimatedStory";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AnimatedStory />
      <Problem />
      <Solution />
      <HowItWorks />
      <CTA />
    </main>
  );
}
