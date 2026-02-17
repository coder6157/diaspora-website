"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function SchedulePage() {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Schedule a Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a time to see how Diaspora can transform your reimbursement process
            </p>
          </div>
          
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget min-h-[700px] rounded-2xl shadow-xl border border-gray-200"
            data-url="https://calendly.com/tklane/diaspora-demo"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>
    </main>
  );
}
