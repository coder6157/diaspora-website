export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Simple Workflow,   
            <span className="block mt-2">Powerful Predictions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get reimbursement predictions in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="relative bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
            <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-primary-600/30">
              1
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter Patient Details</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At intake, enter basic demographics, insurance information, plan details, and intended level of care into our intuitive interface.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Payer and plan information</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Level of care details</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Geography and facility type</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
            <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-blue-600/30">
              2
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Prediction Engine</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our system instantly matches inputs against historical payment outcomes to generate accurate reimbursement predictions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Match similar historical cases</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Generate reimbursement range</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Calculate confidence score</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
            <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-purple-600/30">
              3
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Results</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Receive immediate, actionable estimates with confidence ranges to make informed admission decisions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Expected payer reimbursement</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Patient responsibility estimate</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Risk assessment & insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 lg:p-16 rounded-3xl text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Behavioral Health
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Purpose-built for the unique reimbursement challenges of behavioral health facilities
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">RTC</div>
                <div className="text-sm text-gray-300">Residential Treatment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">PHP</div>
                <div className="text-sm text-gray-300">Partial Hospitalization</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">IOP</div>
                <div className="text-sm text-gray-300">Intensive Outpatient</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">OP</div>
                <div className="text-sm text-gray-300">Outpatient Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
