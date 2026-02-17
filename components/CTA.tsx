export default function CTA() {
  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Now accepting beta partners
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Ready to Transform Your Reimbursement Process?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Turn reimbursement from a post-care surprise into a pre-admission decision. Protect your margins and give patients clearer expectations from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a
              href="/schedule"
              className="group inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white rounded-xl text-lg font-bold hover:bg-primary-700 transition-all duration-200 shadow-xl hover:-translate-y-1"
            >
              Schedule a Demo
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="mailto:hello@diaspora.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 border-2 border-gray-300 rounded-xl text-lg font-bold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Beta Program</div>
              <div className="text-sm text-gray-600">Join leading facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">HIPAA Compliant</div>
              <div className="text-sm text-gray-600">Enterprise-grade security</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Easy Integration</div>
              <div className="text-sm text-gray-600">Works with your workflow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg rotate-6 opacity-80"></div>
                  <div className="relative w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">diaspora</span>
              </div>
              <p className="text-sm text-gray-600">
                Pre-admission reimbursement predictions for behavioral health clinics.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#problem" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Problem</a></li>
                <li><a href="#solution" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Solution</a></li>
                <li><a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/schedule" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Schedule Demo</a></li>
                <li><a href="mailto:hello@diaspora.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Diaspora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
