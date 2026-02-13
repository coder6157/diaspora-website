export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Now accepting beta partners
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          Ready to Transform Your Reimbursement Process?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Turn reimbursement from a post-care surprise into a pre-admission decision. Protect your margins and give patients clearer expectations from day one.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <a
            href="mailto:tklane@usc.edu"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:-translate-y-1"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:tklane@usc.edu"
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-xl text-lg font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Schedule a Demo
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Beta Program</div>
            <div className="text-sm text-gray-400">Join leading facilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">HIPAA Compliant</div>
            <div className="text-sm text-gray-400">Enterprise-grade security</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Easy Integration</div>
            <div className="text-sm text-gray-400">Works with your workflow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
