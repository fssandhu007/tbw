import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Target, BookOpen, TrendingUp, CheckCircle, AlertCircle, BarChart, MessageSquare } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      type: 'title',
      title: 'Breaking Silos',
      subtitle: 'Strengthening Interdepartmental Cohesion at NUST',
      detail: 'Through Mixed-Degree Shared Classes'
    },
    {
      type: 'problem',
      title: 'The Isolation Problem',
      items: [
        'Students confined to departmental bubbles',
        'Limited cross-school networking',
        'Missed interdisciplinary opportunities',
        'Fragmented campus identity',
        'Reduced collaborative skills'
      ]
    },
    // --- NEW STATS PAGE ---
    {
      type: 'stats',
      title: 'Survey Insights',
      subtitle: 'Based on 120 Student Responses',
      metrics: [
        { label: 'Want Social Science Electives', value: 65, total: 120, color: 'bg-emerald-400' },
        { label: 'FYP Cross-Dept Ideas Rejected', value: 6, total: 120, color: 'bg-red-400' },
        { label: 'Feel Isolated in Current School', value: 49, total: 120, color: 'bg-cyan-400' }
      ]
    },
    // --- NEW FEEDBACK PAGE ---
    {
      type: 'feedback',
      title: 'Student Voice',
      subtitle: 'The Human Cost of Silos',
      testimonials: [
        {
          role: 'Engineering Student',
          quote: "The cross-departmental FYP idea was rejected because the administration couldn't decide which school gets the credit. A year of innovation lost to paperwork.",
          icon: <AlertCircle className="text-red-400" />
        },
        {
          role: 'ASAB Student',
          quote: "I want to study psychology for fun and personal growth, but there's no easy way to sit in a class at a different school without massive hurdles.",
          icon: <BookOpen className="text-emerald-400" />
        },
        {
          role: 'NBS Student',
          quote: "Everything is segmented. We learn entrepreneurship, but we have no 'engineers' in our classes to actually build the products we pitch",
          icon: <BookOpen className="text-emerald-400" />
        }
      ]
    },
    {
      type: 'solution',
      title: 'The Solution',
      subtitle: 'Mixed-Degree Shared Classes',
      description: 'Create intentional academic spaces where students from 3-6 different schools learn, collaborate, and connect naturally.',
      features: ['Open Electives', 'Cross-Department', 'Skill-Focused', 'Team-Driven']
    },
    {
      type: 'courses',
      title: 'Proposed Course Types',
      categories: [
        {
          name: 'Skill-Based',
          courses: ['Public Speaking', 'Digital Literacy', 'Project Management', 'Creative Thinking', 'Financial Literacy']
        },
        {
          name: 'Activity-Driven',
          courses: ['Photography', 'Debate', 'Music & Art', 'Entrepreneurship', 'Wellness']
        },
        {
          name: 'Interdisciplinary',
          courses: ['Tech for Non-Engineers', 'Psychology Basics', 'Economics', 'Ethics & Leadership']
        }
      ]
    },
    {
      type: 'impact',
      title: 'Expected Impact',
      areas: [
        { label: 'Academic', impact: 'Enhanced interdisciplinary awareness & collaboration' },
        { label: 'Social', impact: 'Stronger cross-department friendships & campus culture' },
        { label: 'Institutional', impact: 'Improved satisfaction scores & accreditation narrative' }
      ]
    },
    {
      type: 'implementation',
      title: 'Implementation Roadmap',
      phases: [
        { phase: '1', name: 'Planning', duration: '1-2 months', actions: 'Identify courses, standardize credits, survey students' },
        { phase: '2', name: 'Pilot Launch', duration: 'Next semester', actions: '2-3 shared classes, 40-60 students each' },
        { phase: '3', name: 'Review', duration: 'End of semester', actions: 'Collect feedback, measure diversity, optimize' },
        { phase: '4', name: 'Expansion', duration: 'Following year', actions: '8-12 courses, co-teaching, new proposals' }
      ]
    },
    {
      type: 'feasibility',
      title: 'Why This Works',
      points: [
        { icon: '💰', label: 'Low Cost', desc: 'Uses existing resources & faculty' },
        { icon: '📈', label: 'High Impact', desc: 'Multiplier effect on cohesion' },
        { icon: '✅', label: 'Ready Now', desc: 'Builds on current elective system' },
        { icon: '🎯', label: 'Scalable', desc: 'Expandable across all campuses' }
      ]
    },
    {
      type: 'conclusion',
      title: 'One Simple Change',
      subtitle: 'Transform Campus Culture',
      message: 'Shared classes provide a simple, low-cost, high-impact method for building a unified, diverse, and interconnected NUST community.'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating]);

  const slide = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 overflow-hidden relative text-slate-200">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-12">
          <div 
            className={`w-full max-w-6xl transition-all duration-600 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            style={{ transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            {/* Title Slide */}
            {slide.type === 'title' && (
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 tracking-tight leading-none" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                    {slide.title}
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
                </div>
                <h2 className="text-4xl font-light tracking-wide">{slide.subtitle}</h2>
                <p className="text-2xl text-emerald-300 font-medium">{slide.detail}</p>
              </div>
            )}

            {/* Problem Slide */}
            {slide.type === 'problem' && (
              <div className="space-y-8">
                <h2 className="text-6xl font-black text-red-400 mb-12" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="space-y-6">
                  {slide.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
                      <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                      <p className="text-2xl font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW: Stats Slide */}
            {slide.type === 'stats' && (
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-6xl font-black text-emerald-400" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                  <p className="text-2xl text-cyan-300">{slide.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                  {slide.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-xl font-bold">
                        <span>{m.label}</span>
                        <span className="text-emerald-400">{m.value} / {m.total}</span>
                      </div>
                      <div className="w-full h-6 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                        <div 
                          className={`h-full ${m.color} transition-all duration-1000 delay-300`}
                          style={{ width: `${(m.value/m.total)*100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEW: Feedback Slide */}
            {slide.type === 'feedback' && (
              <div className="space-y-10">
                <h2 className="text-6xl font-black text-emerald-400 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="grid grid-cols-3 gap-8">
                  {slide.testimonials.map((t, idx) => (
                    <div key={idx} className="bg-slate-800/60 backdrop-blur-md p-10 rounded-3xl border border-emerald-500/20 relative">
                      <div className="absolute -top-6 -left-4 bg-emerald-500 p-4 rounded-2xl shadow-xl">
                        <MessageSquare className="text-white w-8 h-8" />
                      </div>
                      <div className="mt-4 space-y-4">
                        <p className="text-2xl italic font-light leading-relaxed">"{t.quote}"</p>
                        <div className="pt-4 border-t border-slate-700 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                            <Users className="w-5 h-5 text-emerald-400" />
                          </div>
                          <span className="text-lg font-bold text-cyan-300">— {t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solution Slide */}
            {slide.type === 'solution' && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-6xl font-black text-emerald-400" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                  <h3 className="text-4xl text-cyan-300 font-semibold">{slide.subtitle}</h3>
                </div>
                <p className="text-2xl text-center max-w-4xl mx-auto font-light leading-relaxed">{slide.description}</p>
                <div className="grid grid-cols-4 gap-6">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400/30 text-center">
                      <p className="text-2xl font-bold text-white">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses Slide */}
            {slide.type === 'courses' && (
              <div className="space-y-8">
                <h2 className="text-6xl font-black text-emerald-400 text-center mb-12" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="grid grid-cols-3 gap-8">
                  {slide.categories.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-3xl font-bold text-cyan-300 mb-4">{cat.name}</h3>
                      <div className="space-y-3">
                        {cat.courses.map((course, cIdx) => (
                          <div key={cIdx} className="bg-slate-800/40 p-4 rounded-xl border border-emerald-500/20">
                            <p className="text-lg font-medium">{course}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Slide */}
            {slide.type === 'impact' && (
              <div className="space-y-12">
                <h2 className="text-6xl font-black text-emerald-400 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="space-y-8">
                  {slide.areas.map((area, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-emerald-400">
                      <h3 className="text-3xl font-bold text-cyan-300 mb-3">{area.label} Impact</h3>
                      <p className="text-2xl font-light">{area.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Slide */}
            {slide.type === 'implementation' && (
              <div className="space-y-8">
                <h2 className="text-6xl font-black text-emerald-400 text-center mb-12" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="grid grid-cols-2 gap-6">
                  {slide.phases.map((phase, idx) => (
                    <div key={idx} className="bg-slate-800/40 p-8 rounded-2xl border border-emerald-500/30">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-black text-white" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{phase.phase}</span>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-emerald-300">{phase.name}</h3>
                          <p className="text-sm text-cyan-400 font-semibold">{phase.duration}</p>
                          <p className="text-lg font-light text-slate-300">{phase.actions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Feasibility Slide */}
            {slide.type === 'feasibility' && (
              <div className="space-y-12">
                <h2 className="text-6xl font-black text-emerald-400 text-center" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                <div className="grid grid-cols-2 gap-8">
                  {slide.points.map((point, idx) => (
                    <div key={idx} className="bg-slate-800/60 p-10 rounded-3xl border border-emerald-500/30 hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl mb-6">{point.icon}</div>
                      <h3 className="text-3xl font-bold text-emerald-300 mb-3">{point.label}</h3>
                      <p className="text-xl text-slate-300 font-light">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion Slide */}
            {slide.type === 'conclusion' && (
              <div className="text-center space-y-12">
                <div className="space-y-6">
                  <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{slide.title}</h2>
                  <h3 className="text-5xl text-emerald-300 font-bold">{slide.subtitle}</h3>
                </div>
                <p className="text-3xl max-w-4xl mx-auto font-light leading-relaxed">{slide.message}</p>
                <div className="pt-8">
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 p-1 rounded-2xl">
                    <div className="bg-slate-900 px-12 py-6 rounded-xl">
                      <p className="text-2xl font-bold text-white">Let's Build a Connected NUST</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 px-12 pb-8 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
              currentSlide === 0 ? 'bg-slate-800/20 text-slate-600 cursor-not-allowed' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrentSlide(idx); setTimeout(() => setIsAnimating(false), 600); }}}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-gradient-to-r from-emerald-500 to-cyan-500' : 'w-3 bg-slate-600'}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
              currentSlide === slides.length - 1 ? 'bg-slate-800/20 text-slate-600 cursor-not-allowed' : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:scale-110'
            }`}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-sm font-mono">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Quicksand:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Quicksand', sans-serif; }
      `}</style>
    </div>
  );
};

export default Presentation;