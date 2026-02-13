export default function Progress() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Current Progress
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We're in active pilot with our first customer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Pilot Customer</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Working with a behavioral health outpatient operator with three locations in California and one in Illinois. They're actively sharing historical reimbursement data and integrating predictions into their intake workflow.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Validated Model</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Early results show that historical patterns can be used to estimate expected reimbursement ranges before admission. Reimbursement variance is not random—within defined cohorts, outcomes cluster in predictable ranges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">v1 Launch in ~2 Weeks</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  First version will allow intake teams to enter patient and insurance details and receive immediate estimates of expected payer reimbursement and patient responsibility, along with confidence/risk signals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Pilot Pipeline</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Current Pilot</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Active</span>
                </div>
                <p className="text-sm text-gray-600">3 locations in CA, 1 in IL</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Committed Introductions</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">5-10</span>
                </div>
                <p className="text-sm text-gray-600">Similar dual-diagnosis operators</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Target by Demo Day</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs font-semibold">5-7</span>
                </div>
                <p className="text-sm text-gray-600">Active facilities using Diaspora</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 rounded-xl p-10 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Next Steps</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Complete Pilot</h4>
                <p className="text-sm text-primary-100">Validate model accuracy and workflow fit</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">Expand Facilities</h4>
                <p className="text-sm text-primary-100">Onboard 3-5 additional behavioral health facilities</p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="font-semibold mb-2">Convert to Revenue</h4>
                <p className="text-sm text-primary-100">Move from pilots to paid contracts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
