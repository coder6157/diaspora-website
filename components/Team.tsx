export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-sm font-medium mb-6">
            The Team
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Built by Healthcare Veterans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise in behavioral health operations and predictive analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/40 to-transparent rounded-bl-[100px] pointer-events-none"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg shadow-primary-600/20">
                AK
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ayub Khan</h3>
              <div className="text-primary-600 font-semibold mb-4">Co-Founder & CEO</div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Former healthcare consultant with deep experience in RCM optimization and behavioral health operations. Led revenue cycle transformation projects across multiple facilities.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">Healthcare Operations</span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">RCM</span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">Strategy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-bl-[100px] pointer-events-none"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg shadow-blue-600/20">
                TY
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tyler Young</h3>
              <div className="text-blue-600 font-semibold mb-4">Co-Founder & CTO</div>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI/ML engineer and data scientist specializing in healthcare predictive analytics. Built production ML systems processing millions of claims and payment records.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Machine Learning</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Data Science</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Mission-Driven</h4>
            <p className="text-sm text-gray-600">Committed to solving real problems in behavioral health</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Data-Driven</h4>
            <p className="text-sm text-gray-600">Built on real payment outcomes, not theoretical models</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Customer-First</h4>
            <p className="text-sm text-gray-600">Built in partnership with behavioral health providers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
