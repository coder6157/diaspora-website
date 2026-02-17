"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [expectedAmount, setExpectedAmount] = useState(0);
  const [actualAmount, setActualAmount] = useState(0);
  const [predictedAmount, setPredictedAmount] = useState(0);
  const [confidenceScore, setConfidenceScore] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animateValue = (
    setter: (value: number) => void,
    start: number,
    end: number,
    duration: number,
    easing: (t: number) => number
  ) => {
    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      const current = Math.floor(start + range * easedProgress);

      setter(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setter(end);
      }
    };

    requestAnimationFrame(animate);
  };

  // Function to animate a specific step
  const animateStep = (step: number) => {
    if (step === 1) {
      setCurrentStep(1);
      setExpectedAmount(0);
      setActualAmount(0);
      setPredictedAmount(0);
      setConfidenceScore(0);
      setTimeout(() => {
        animateValue(setExpectedAmount, 0, 8500, 2000, easeOutCubic);
      }, 100);
    } else if (step === 2) {
      setCurrentStep(2);
      setExpectedAmount(8500);
      setActualAmount(0);
      setPredictedAmount(0);
      setConfidenceScore(0);
      setTimeout(() => {
        animateValue(setActualAmount, 0, 400, 2000, easeOutCubic);
      }, 100);
    } else if (step === 3) {
      setCurrentStep(3);
      setExpectedAmount(8500);
      setActualAmount(400);
      setPredictedAmount(0);
      setConfidenceScore(0);
      setTimeout(() => {
        animateValue(setPredictedAmount, 0, 450, 2000, easeOutCubic);
        animateValue(setConfidenceScore, 0, 94, 2000, easeOutCubic);
      }, 100);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-play through steps
    const step1Timer = setTimeout(() => animateStep(1), 500);
    const step2Timer = setTimeout(() => animateStep(2), 3500);
    const step3Timer = setTimeout(() => animateStep(3), 6500);

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
    };
  }, [isVisible]);

  const expectedTotal = expectedAmount * 45;
  const actualTotal = actualAmount * 45;
  const predictedTotal = predictedAmount * 45;
  const revenueLost = expectedTotal - actualTotal;
  const saved = expectedTotal - predictedTotal;

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
            Real Example
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            The $364K Shortfall
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how a real facility experienced a massive reimbursement surprise—and how Diaspora would have prevented it
          </p>
        </div>

        {/* Interactive Timeline - Better Aligned */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => animateStep(1)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  currentStep >= 1
                    ? 'bg-red-100 text-red-700 border-2 border-red-300 shadow-md'
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                }`}
              >
                1. Expected
              </button>
              <div className={`hidden sm:block h-0.5 w-12 transition-all duration-500 ${currentStep >= 2 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`sm:hidden h-6 w-0.5 transition-all duration-500 ${currentStep >= 2 ? 'bg-red-400' : 'bg-gray-200'}`}></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => animateStep(2)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  currentStep >= 2
                    ? 'bg-red-100 text-red-700 border-2 border-red-300 shadow-md'
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                }`}
              >
                2. Reality
              </button>
              <div className={`hidden sm:block h-0.5 w-12 transition-all duration-500 ${currentStep >= 3 ? 'bg-primary-400' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`sm:hidden h-6 w-0.5 transition-all duration-500 ${currentStep >= 3 ? 'bg-primary-400' : 'bg-gray-200'}`}></div>
            <button
              onClick={() => animateStep(3)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                currentStep >= 3
                  ? 'bg-primary-100 text-primary-700 border-2 border-primary-300 shadow-md'
                  : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
              }`}
            >
              3. Solution
            </button>
          </div>
        </div>

        {/* Step 1: The Expectation */}
        <div className="mb-20 opacity-100 relative">
          {/* Step Number Badge */}
          <div className="absolute -top-4 left-8 z-10 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            1
          </div>
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-12 shadow-xl pt-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6 border border-red-200">
                  BEFORE DIASPORA
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Facility Expects Full Payment</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At admission, the facility reviews the patient's insurance plan and expects reimbursement based on contracted rates for this patient's stay.
                </p>
                
                {/* Visual Dashboard Mockup */}
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-600">PATIENT INTAKE</span>
                    <span className="text-xs text-gray-500">Status: Pending</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">Contracted Rate</div>
                      <div className="text-2xl font-bold text-gray-900">${expectedAmount.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/day</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">Expected Stay</div>
                      <div className="text-2xl font-bold text-gray-900">45 <span className="text-sm text-gray-500 font-normal">days</span></div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="text-xs text-green-600 mb-1 font-semibold">Expected Total</div>
                      <div className="text-3xl font-bold text-green-700">${expectedTotal.toLocaleString()}</div>
                      <div className="text-xs text-gray-500 mt-1">(${expectedAmount.toLocaleString()} × 45 days)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl border-2 border-red-200 shadow-lg transform transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 text-sm font-semibold text-gray-700">
                      Expected Reimbursement
                    </div>
                    <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 transition-all duration-300">
                      ${expectedAmount.toLocaleString()}
                    </div>
                    <div className="text-base text-gray-600 mb-8">per day per patient</div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
                      <div className="text-sm text-gray-600 mb-2 font-medium">Total Expected (45 days)</div>
                      <div className="text-4xl font-bold text-gray-900 transition-all duration-300">
                        ${expectedTotal.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">for this patient's stay</div>
                    </div>
                  </div>
                </div>
                {currentStep === 1 && (
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: The Reality */}
        <div className="mb-20 opacity-100 relative">
          {/* Connector Line */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gradient-to-b from-red-200 to-red-400"></div>
          {/* Step Number Badge */}
          <div className="absolute -top-4 left-8 z-10 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            2
          </div>
          <div className="bg-white rounded-3xl border-2 border-red-200 p-8 lg:p-12 shadow-xl pt-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-block px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6 border border-red-200">
                  WEEKS LATER
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Shocking Reality</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  After discharge, the facility receives payment. The actual reimbursement is dramatically lower than expected.
                </p>

                {/* Visual Payment Notice Mockup */}
                <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-red-700">PAYMENT RECEIVED</span>
                    <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">Shortfall</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="text-xs text-gray-500 mb-1">Actual Payment</div>
                      <div className="text-2xl font-bold text-red-600">${actualAmount.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/day</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <div className="text-xs text-gray-500 mb-1">Stay Completed</div>
                      <div className="text-2xl font-bold text-gray-900">45 <span className="text-sm text-gray-500 font-normal">days</span></div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
                      <div className="text-xs text-red-700 mb-1 font-semibold">Total Received</div>
                      <div className="text-3xl font-bold text-red-700">${actualTotal.toLocaleString()}</div>
                    </div>
                    <div className="bg-red-200 rounded-lg p-4 border-2 border-red-400">
                      <div className="text-xs text-red-900 mb-1 font-bold">REVENUE LOST</div>
                      <div className="text-3xl font-bold text-red-900">-${revenueLost.toLocaleString()}</div>
                      <div className="text-xs text-red-700 mt-1">lost on this one patient</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-10 rounded-3xl border-2 border-red-300 shadow-lg transform transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 text-sm font-semibold text-red-700">
                      Actual Reimbursement
                    </div>
                    <div className="text-6xl md:text-7xl font-bold text-red-600 mb-4 transition-all duration-300">
                      ${actualAmount.toLocaleString()}
                    </div>
                    <div className="text-base text-gray-600 mb-8">per day per patient</div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 mb-4">
                      <div className="text-sm text-gray-600 mb-2 font-medium">Total Received (45 days)</div>
                      <div className="text-4xl font-bold text-red-600 transition-all duration-300">
                        ${actualTotal.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">for this patient's stay</div>
                    </div>
                    <div className="bg-red-200/80 backdrop-blur-sm rounded-xl p-4 border-2 border-red-400">
                      <div className="text-xs text-red-900 font-bold mb-1">SHORTFALL</div>
                      <div className="text-3xl font-bold text-red-900 transition-all duration-300">
                        -${revenueLost.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                {currentStep === 2 && (
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Diaspora Solution */}
        <div className="mb-20 opacity-100 relative">
          {/* Connector Line */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gradient-to-b from-red-400 to-primary-400"></div>
          {/* Step Number Badge */}
          <div className="absolute -top-4 left-8 z-10 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            3
          </div>
          <div className="bg-white rounded-3xl border-2 border-primary-200 p-8 lg:p-12 shadow-xl pt-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-6 border border-primary-200">
                  WITH DIASPORA
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Predict the Right Number Before Admission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Diaspora analyzes historical payment data for similar patients, plans, and procedures to predict actual reimbursement—before you admit.
                </p>

                {/* Visual Prediction Dashboard */}
                <div className="bg-primary-50 rounded-2xl p-6 border-2 border-primary-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-primary-700">DIASPORA PREDICTION</span>
                    <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">94% Confidence</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-primary-200">
                      <div className="text-xs text-gray-500 mb-1">Predicted Rate</div>
                      <div className="text-2xl font-bold text-primary-600">${predictedAmount.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/day</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-primary-200">
                      <div className="text-xs text-gray-500 mb-1">Expected Stay</div>
                      <div className="text-2xl font-bold text-gray-900">45 <span className="text-sm text-gray-500 font-normal">days</span></div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="text-xs text-green-600 mb-1 font-semibold">Predicted Total</div>
                      <div className="text-3xl font-bold text-green-700">${predictedTotal.toLocaleString()}</div>
                      <div className="text-xs text-gray-500 mt-1">vs. Actual: $18,000</div>
                    </div>
                    <div className="bg-primary-100 rounded-lg p-4 border-2 border-primary-300">
                      <div className="text-xs text-primary-900 mb-2 font-bold">SAVED</div>
                      <div className="text-2xl font-bold text-primary-900">${saved.toLocaleString()}</div>
                      <div className="text-xs text-primary-700 mt-1">Avoided bad admission</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary-900">Prediction Confidence</span>
                    <span className="text-xl font-bold text-primary-600 transition-all duration-300">
                      {confidenceScore}%
                    </span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                      style={{ width: `${confidenceScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border-2 border-green-300 shadow-lg transform transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 text-sm font-semibold text-primary-700">
                      Diaspora Prediction
                    </div>
                    <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 transition-all duration-300">
                      ${predictedAmount.toLocaleString()}
                    </div>
                    <div className="text-base text-gray-600 mb-8">per day per patient (predicted)</div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 mb-4">
                      <div className="text-sm text-gray-600 mb-2 font-medium">Predicted Total (45 days)</div>
                      <div className="text-4xl font-bold text-gray-900 transition-all duration-300">
                        ${predictedTotal.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">for this patient's stay</div>
                    </div>
                    <div className="bg-green-100/80 backdrop-blur-sm rounded-xl p-4 border-2 border-green-300 mb-4">
                      <div className="text-xs text-green-700 font-semibold mb-1">vs. ACTUAL</div>
                      <div className="text-2xl font-bold text-green-700">$18,000</div>
                      <div className="text-xs text-gray-600 mt-1">Only $2,250 difference</div>
                    </div>
                    <div className="bg-primary-100/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary-300">
                      <div className="text-xs text-primary-900 font-bold mb-1">SAVED</div>
                      <div className="text-3xl font-bold text-primary-900 transition-all duration-300">
                        ${saved.toLocaleString()}
                      </div>
                      <div className="text-xs text-primary-700 mt-1">Avoided bad admission</div>
                    </div>
                  </div>
                </div>
                {currentStep === 3 && (
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Comparison */}
        {currentStep >= 3 && (
          <div className="mt-16 bg-white rounded-3xl border-2 border-gray-200 p-10 lg:p-14 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
                The Impact
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">One Patient. One Decision. Massive Difference.</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the financial impact of making the right decision at the right time
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-red-600 mb-3">-$364K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Without Diaspora</div>
                <div className="text-sm text-gray-600">Revenue lost on this patient</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-3">$362K</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">With Diaspora</div>
                <div className="text-sm text-gray-600">Revenue protected</div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-8 border-2 border-primary-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-primary-600 mb-3">94%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Prediction Accuracy</div>
                <div className="text-sm text-gray-600">Close to actual outcome</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
