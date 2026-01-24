'use client';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  UserCheck, 
  MessageSquare, 
  MousePointer2,
  Sparkles,
  BarChart3,
  Calendar,
  Rocket
} from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Add Bricolage Grotesque via Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const fadeIn = "transition-all duration-1000 ease-out";
  const sectionSpacing = "py-24 px-6 max-w-7xl mx-auto";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Bricolage_Grotesque',sans-serif] selection:bg-purple-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap size={18} fill="white" />
            </div>
            LINKEDIN<span className="text-purple-500 underline decoration-2 underline-offset-4">FLOW</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#benefits" className="hover:text-white transition-colors">Why Us</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Grab Your Spot 🚀
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`pt-40 pb-20 ${sectionSpacing} text-center`}>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm mb-8 animate-bounce`}>
          <Sparkles size={14} /> 5 Beta Spots Left for Founders
        </div>
        <h1 className={`text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${fadeIn}`}>
          STOP BEING THE <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
            BEST KEPT SECRET
          </span> <br />
          ON LINKEDIN 🚀
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We write high-signal content for founders who want authority, leads, and visibility. <span className="text-white font-semibold">0 Meetings. 0 Hassle. 100% Your Voice.</span> ✨
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/20 flex items-center justify-center gap-3">
            Scale My Voice 📈 <ArrowRight />
          </button>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Founder" />
              </div>
            ))}
            <div className="pl-4 text-sm text-gray-400 flex flex-col items-start justify-center">
              <span className="text-white font-bold">4.9/5 Rating</span>
              <span>from active founders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white/5 border-y border-white/10">
        <div className={`${sectionSpacing}`}>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Clock className="text-red-400" />, title: "The Time Sink", desc: "Spending 4+ hours per week staring at a blank screen instead of building." },
              { icon: <UserCheck className="text-blue-400" />, title: "The Voice Gap", desc: "Generic AI content sounds like a robot. We build your digital twin." },
              { icon: <MessageSquare className="text-purple-400" />, title: "The Sync Headache", desc: "Tired of 1-hour 'strategy calls'? We are 100% async and stress-free." }
            ].map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-purple-500/50 transition-all duration-500">
                <div className="mb-6 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title} ❌</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={`${sectionSpacing}`}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tighter">
          THE ASYNC <span className="text-purple-500 italic">ADVANTAGE</span> ⚙️
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/0 via-purple-500 to-purple-500/0 hidden md:block" />
          {[
            { step: "01", title: "10-Min Onboarding", desc: "Complete a high-signal questionnaire. No zoom calls. No time wasted. 📝", icon: <MousePointer2 /> },
            { step: "02", title: "Voice Profile Setup", desc: "We study your style, history, and goals to build your content engine. 👤", icon: <UserCheck /> },
            { step: "03", title: "Weekly Delivery", desc: "Get your batch of 7-8 posts every Thursday in your private portal. 📬", icon: <Calendar /> },
            { step: "04", title: "Copy, Paste, Profit", desc: "Review in 2 mins, copy-paste to LinkedIn, and get back to scaling. 💰", icon: <Rocket /> }
          ].map((s, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 mb-24 last:mb-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 text-center md:text-left">
                <div className="text-purple-500 font-black text-xl mb-2">{s.step} —</div>
                <h3 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                   {s.title}
                </h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">{s.desc}</p>
              </div>
              <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <div className="text-white">{s.icon}</div>
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`${sectionSpacing} bg-linear-to-b from-transparent via-purple-900/10 to-transparent rounded-[100px]`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 underline decoration-purple-500 decoration-8">
            PRICING 💎
          </h2>
          <p className="text-gray-400 text-xl">The "Beta Founder" Special (5 Spots Only)</p>
        </div>
        
        <div className="max-w-xl mx-auto p-12 rounded-[40px] border-2 border-purple-500 bg-black/60 backdrop-blur-xl relative overflow-hidden group shadow-2xl shadow-purple-500/20">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
          
          <div className="mb-8">
            <h3 className="text-4xl font-black mb-2 flex items-center gap-2">The Authority <Zap className="text-yellow-400 fill-yellow-400" size={32} /></h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-black">$499</span>
              <span className="text-gray-500 line-through text-2xl">$999</span>
              <span className="text-gray-400">/ month</span>
            </div>
          </div>

          <div className="space-y-5 mb-12">
            {[
              "30 Custom LinkedIn Posts (Daily)",
              "Ultra-Precise Voice Matching",
              "100% Async - Zero Calls",
              "Private Notion Delivery Dashboard",
              "Strategy & Hook Library Access",
              "Weekly Revision Round",
              "Cancel Anytime (No Contracts)"
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-lg">
                <CheckCircle2 size={20} className="text-purple-500 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-6 bg-white text-black text-2xl font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform active:scale-95 shadow-xl">
            CLAIM YOUR SPOT 🚀
          </button>
          <p className="text-center mt-6 text-gray-500 text-sm font-medium">3 spots remaining for January cohort.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold tracking-tighter mb-4">
              LINKEDIN<span className="text-purple-500">FLOW</span>
            </div>
            <p className="text-gray-500">Build your empire. One post at a time. 👑</p>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>

    </div>
  );
};

export default App;
