export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6">
            The Challenge
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Reimbursement Uncertainty Threatens Your Bottom Line
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Behavioral health facilities face a financial crisis: you commit clinical capacity without knowing what you'll actually get paid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The $36K+ Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Facilities write off an average of $36,000+ per month due to unexpected reimbursement shortfalls. These aren't coding errors—they're fundamental uncertainty about what payers will actually reimburse.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                <span>Average facility loses $432K annually to write-offs</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Root Cause</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              You decide whether to admit a patient based on contracted rates or vague benefits summaries. But actual reimbursement depends on hundreds of variables you can't see until weeks or months after discharge.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span>Post-care surprise becomes pre-admission crisis</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">High Stakes, Long Cycles</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With 30-60 day stays costing $8,500 per day, a single bad admission decision can cost $255K-$510K in unrecoverable care. You don't find out until it's too late.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Financial risk compounds over treatment duration</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Existing Tools Fall Short</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Benefits verification tells you what the plan covers in theory. RCM systems optimize billing after the fact. Nothing helps you predict actual reimbursement before you commit capacity.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Gap between benefits and actual payments persists</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-12 p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">The Core Issue</h4>
                <p className="text-lg text-gray-300 leading-relaxed">
                  You're making multi-hundred-thousand-dollar capacity commitments with financial visibility that arrives 60-90 days too late. This isn't a revenue cycle problem—it's a <span className="text-white font-semibold">pre-admission decision problem</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
