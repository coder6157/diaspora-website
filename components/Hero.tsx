export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Now in beta with behavioral health facilities
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Know What You'll   
            <span className="block mt-2">Get Paid</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Before You Admit</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Pre-admission reimbursement predictions for behavioral health clinics. Turn reimbursement uncertainty from a post-care surprise into a pre-admission decision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl text-base font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-xl text-base font-semibold hover:bg-gray-200 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>

          {/* Stats Grid - Refined */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
            <div className="group">
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">$36K</span>
                <span className="text-2xl md:text-3xl font-semibold text-gray-400">+</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">Monthly write-offs prevented</div>
              <div className="text-xs text-gray-400 mt-1">per facility</div>
            </div>
            
            <div className="group">
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">30</span>
                <span className="text-2xl md:text-3xl font-semibold text-gray-400">-60</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">Days average stay</div>
              <div className="text-xs text-gray-400 mt-1">typical patient length</div>
            </div>
            
            <div className="group">
              <div className="mb-3">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">$8.5K</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">Cost per day of care</div>
              <div className="text-xs text-gray-400 mt-1">behavioral health average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
