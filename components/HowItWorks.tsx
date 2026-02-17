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
            Get accurate predictions in three simple steps
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="relative mb-20">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" style={{ top: '96px' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative bg-white p-8 lg:p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-primary-600/30 z-10">
                1
              </div>
              <div className="pt-8">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-4">
                    STEP 1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enter Patient Details</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At intake, enter basic demographics, insurance information, plan details, and intended level of care.
                </p>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Payer and plan information</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Level of care details</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Geography and facility type</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-8 lg:p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-blue-600/30 z-10">
                2
              </div>
              <div className="pt-8">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4">
                    STEP 2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Prediction Engine</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our system instantly matches inputs against historical payment outcomes to generate accurate reimbursement predictions.
                </p>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Match similar historical cases</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Generate reimbursement range</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Calculate confidence score</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-900">Processing Time</span>
                    <span className="text-lg font-bold text-blue-600">2.3s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-8 lg:p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-purple-600/30 z-10">
                3
              </div>
              <div className="pt-8">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full mb-4">
                    STEP 3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Instant Results</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Receive immediate, actionable estimates with confidence ranges to make informed admission decisions.
                </p>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Expected payer reimbursement</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Patient responsibility estimate</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Risk assessment & insights</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-900">Confidence Score</span>
                    <span className="text-lg font-bold text-purple-600">94%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Bar - Enhanced */}
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 lg:p-16 mb-16 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
              Why Diaspora Works
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Speed, Accuracy, and Action</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to make confident pre-admission decisions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 text-center">Instant</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Results in seconds, not days. Get reimbursement predictions at the moment of intake.</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 text-center">Accurate</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Built on real payment outcomes, not theoretical rates. Historical data drives precision.</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 text-center">Actionable</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Clear risk signals and confidence scores help you make informed decisions immediately.</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 text-center">Simple</h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">No training required. Intuitive interface that fits seamlessly into your existing workflow.</p>
            </div>
          </div>
        </div>

        {/* Platform Preview */}
        <div className="bg-white p-12 lg:p-16 rounded-3xl border-2 border-gray-200 shadow-xl text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
              Built for Behavioral Health
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Purpose-Built for Your Facility Type
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Purpose-built for the unique reimbursement challenges of behavioral health facilities
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-primary-600 mb-2">RTC</div>
                <div className="text-sm text-gray-700 font-medium">Residential Treatment</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">PHP</div>
                <div className="text-sm text-gray-700 font-medium">Partial Hospitalization</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-purple-600 mb-2">IOP</div>
                <div className="text-sm text-gray-700 font-medium">Intensive Outpatient</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-green-600 mb-2">OP</div>
                <div className="text-sm text-gray-700 font-medium">Outpatient Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
