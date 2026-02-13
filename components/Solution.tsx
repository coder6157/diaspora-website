export default function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
            Our Solution
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Pre-Admission Reimbursement Intelligence
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Move financial clarity to the moment it matters—before you admit
          </p>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
              INSTANT
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-600/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Immediate Estimates</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Enter patient plan details at intake. Receive instant estimates of expected payer reimbursement and patient responsibility—before you commit clinical capacity.
            </p>
            <div className="pt-4 border-t border-gray-200 mt-6">
              <span className="text-sm font-semibold text-primary-600">Real-time prediction engine</span>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
              ACCURATE
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Real Payment Data</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Built on what payers have actually reimbursed for similar patients, plans, procedures, and geographies—not theoretical rates or benefit summaries.
            </p>
            <div className="pt-4 border-t border-gray-200 mt-6">
              <span className="text-sm font-semibold text-blue-600">Historical outcomes database</span>
            </div>
          </div>

          <div className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
              ACTIONABLE
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/20">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk Assessment</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understand financial risk before committing clinical capacity. Have honest financial conversations with patients from day one.
            </p>
            <div className="pt-4 border-t border-gray-200 mt-6">
              <span className="text-sm font-semibold text-purple-600">Pre-admission risk scoring</span>
            </div>
          </div>
        </div>

        {/* Benefits with Stats */}
        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-4">
                Revenue Impact
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Increase Net Collections
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Avoid reimbursement surprises and unlock revenue with predictions built on real payment outcomes. Proactively prevent revenue shortfalls with financial clarity at intake.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Reduce write-offs by identifying high-risk cases upfront</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Make informed admission decisions the first time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Optimize payer mix based on actual reimbursement patterns</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl border border-green-200">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20 mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-gray-900">$36K</span>
                  <span className="text-3xl font-semibold text-gray-400">+</span>
                </div>
                <div className="text-lg text-gray-700 font-semibold mb-1">Monthly write-offs prevented</div>
                <div className="text-sm text-gray-500">per facility on average</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-200">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Pre-Admission</div>
                <div className="text-lg text-gray-700 font-semibold mb-1">Financial clarity</div>
                <div className="text-sm text-gray-500">before care begins</div>
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
                Risk Management
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Decrease Financial Risk
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Dramatically reduce uncertainty at the moment of admission. Know your financial risk before committing clinical capacity to high-cost, long-duration care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Understand true financial exposure before day one</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Set accurate patient expectations from intake</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Protect margins on $250K-$500K treatment episodes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-4">
                Operational Efficiency
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Accelerate Cash Flow
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Gain real-time visibility into expected reimbursement at intake. Quickly go from insights to action on high-impact, revenue-driving decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Individual patient estimates to facility-level patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Streamline pre-authorization and intake workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">Improve collection rates with upfront patient discussions</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl border border-purple-200">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/20 mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Real-Time</div>
                <div className="text-lg text-gray-700 font-semibold mb-1">Predictions at intake</div>
                <div className="text-sm text-gray-500">instant financial clarity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
