"use client";

import { useState, useEffect, useRef } from "react";

export default function Problem() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [animatedStats, setAnimatedStats] = useState({
    monthlyWriteOff: 36,
    annualWriteOff: 432,
    costPerDay: 8.5,
    minCost: 255,
    maxCost: 510,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Initialize all cards as visible after a short delay if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      if (visibleCards.length < 4) {
        setVisibleCards([0, 1, 2, 3]);
      }
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardElement = entry.target as HTMLDivElement;
          const indexStr = cardElement.getAttribute('data-card-index');
          const index = indexStr ? parseInt(indexStr, 10) : -1;
          
          if (entry.isIntersecting && index !== -1 && !visibleCards.includes(index)) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }, index * 150);
          }
        });
      },
      { threshold: 0.05, rootMargin: '150px' }
    );

    // Wait a bit for refs to be set
    const setupTimer = setTimeout(() => {
      cardsRef.current.forEach((card) => {
        if (card) observer.observe(card);
      });
    }, 100);

    return () => {
      clearTimeout(fallbackTimer);
      clearTimeout(setupTimer);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [visibleCards]);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Quick animation - start from values close to final
            setAnimatedStats({
              monthlyWriteOff: 36,
              annualWriteOff: 432,
              costPerDay: 8.5,
              minCost: 255,
              maxCost: 510,
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="problem" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-6">
            The Challenge
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Reimbursement Uncertainty Threatens Your Bottom Line
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Behavioral health facilities face a financial crisis: you commit resources without knowing what you'll actually get paid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8">
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            data-card-index="0"
            className={`bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The ${animatedStats.monthlyWriteOff}K+ Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Facilities write off an average of ${animatedStats.monthlyWriteOff},000+ per month due to unexpected reimbursement shortfalls. These aren't coding errors—they're fundamental uncertainty about what payers will actually reimburse.
            </p>
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                <span>Average facility loses <span className="font-semibold text-red-600">${animatedStats.annualWriteOff}K</span> annually to write-offs</span>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            data-card-index="1"
            className={`bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Root Cause</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              You decide whether to admit a patient based on contracted rates or vague benefits summaries. But actual reimbursement depends on hundreds of variables you can't see until weeks or months after discharge.
            </p>
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span>Post-care surprise becomes pre-admission crisis</span>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            data-card-index="2"
            className={`bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
              <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">High Stakes, Long Cycles</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With 30-60 day stays costing <span className="font-semibold text-gray-900">${animatedStats.costPerDay}K</span> per day, a single bad admission decision can cost <span className="font-semibold text-red-600">${animatedStats.minCost}K-${animatedStats.maxCost}K</span> in unrecoverable care. You don't find out until it's too late.
            </p>
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <span>Financial risk compounds over treatment duration</span>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              if (el) cardsRef.current[3] = el;
            }}
            data-card-index="3"
            className={`bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              visibleCards.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Existing Tools Fall Short</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Benefits verification tells you what the plan covers in theory. RCM systems optimize billing after the fact. Nothing helps you predict actual reimbursement before you commit resources.
            </p>
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span>Gap between benefits and actual payments persists</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className={`mt-16 p-10 lg:p-12 bg-white rounded-3xl border-2 border-gray-200 shadow-xl transition-all duration-700 ${
          visibleCards.length === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center transform transition-transform duration-300 hover:scale-110 border-2 border-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-xs font-semibold mb-4">
                  THE CORE ISSUE
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Real Problem</h4>
                <p className="text-xl text-gray-600 leading-relaxed">
                  You're making multi-hundred-thousand-dollar resource commitments with financial visibility that arrives 60-90 days too late. This isn't a revenue cycle problem—it's a <span className="text-gray-900 font-bold">pre-admission decision problem</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
