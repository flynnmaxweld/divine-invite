import React, { useState, useEffect } from 'react';
import { MapPin, Heart, ChevronRight, Calendar } from 'lucide-react';

const content = {
  en: {
    verse: "There is a time for everything, and a season for every activity under the heavens.",
    reference: "Ecclesiastes 3:1",
    title: "House Warming",
    blessing: "A BLESSED DEDICATION",
    welcome: "Join us as we commence the beginning of a new chapter.",
    dateLabel: "The Day",
    dateValue: "May 1, 2026",
    timeLabel: "The Hour",
    timeValue: "9:30 AM - 10:30 AM",
    addressLabel: "The Location",
    addressValue: "M2 House of D2, Plot No 31, Fabnest Nagar, Johnson Nagar Extension, Thyagaraja Nagar, Tirunelveli, TamilNadu - 627011",
    phoneLabel: "Phone",
    phoneValue: "+91 99408 73958",
    familyLabel: "Warmly invited by",
    familyNames: [
      "Mrs CHELLAMMAL",
      "Mr ARTHUR GURUPATHAM",
      "Mr VIMAL (Late)",
      "Mr DHINAKARAN",
      "Mrs MARY THANAPACKIAM",
      "Master FLYNN MAXWEL",
      "Master NOAH MARCUS"
    ],
    mapBtn: "View Location",
    addToCalBtn: "Add to Calendar",
    days: "Days",
    hours: "Hrs",
    mins: "Min",
    secs: "Sec"
  },
  ta: {
    verse: "வானத்தின் கீழ் இருக்கிற ஒவ்வொரு காரியத்துக்கும் ஒரு காலமுண்டு, ஒவ்வொரு நோக்கத்துக்கும் ஒரு சமயமுண்டு.",
    reference: "பிரசங்கி 3:1",
    title: "புதுமனை புகுவிழா",
    blessing: "ஆசீர்வதிக்கப்பட்ட அர்ப்பணிப்பு",
    welcome: "எங்கள் இல்லத்தின் ஆசீர்வாத விழாவிற்கு உங்களை அன்புடன் அழைக்கிறோம்.",
    dateLabel: "திருநாள்",
    dateValue: "மே 1, 2026",
    timeLabel: "நேரம்",
    timeValue: "காலை 9:30 - 10:30 மணி",
    addressLabel: "இடம்",
    addressValue: "M2 House of D2, பிளாட் எண் 31, ஃபேப்நெஸ்ட் நகர், ஜான்சன் நகர் விரிவாக்கம், தியாகராஜ நகர், திருநெல்வேலி, தமிழ்நாடு - 627011",
    phoneLabel: "தொடர்புக்கு",
    phoneValue: "+91 99408 73958",
    familyLabel: "அன்புடன் அழைக்கும்",
    familyNames: [
      "திருமதி செல்லம்மாள்",
      "திரு ஆர்தர் குருபதம்",
      "அமரர் விமல்",
      "திரு தினகரன்",
      "திருமதி மேரி தனபாக்கியம்",
      "செல்வன் ஃபிளின் மேக்ஸ்வெல்",
      "செல்வன் நோவா மார்கஸ்"
    ],
    mapBtn: "வரைபடம்",
    addToCalBtn: "காலண்டரில் சேர்",
    days: "நாட்கள்",
    hours: "மணி",
    mins: "நிமிடம்",
    secs: "நொடி"
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [hasEntered, setHasEntered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown Timer logic (Safely contained)
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date("2026-05-01T09:30:00").getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const t = content[lang];
  
  // Dynamic font and spacing variables based on language selection
  const serifFont = lang === 'en' ? "'Cinzel', serif" : "'Noto Serif Tamil', serif";
  const sansFont = lang === 'en' ? "'Poppins', sans-serif" : "'Noto Sans Tamil', sans-serif";
  const titleTracking = lang === 'en' ? "tracking-tighter" : "tracking-normal";
  const titleLeading = lang === 'en' ? "leading-none" : "leading-snug";
  const verseLeading = lang === 'en' ? "leading-relaxed" : "leading-[2]";
  const addressLeading = lang === 'en' ? "leading-relaxed" : "leading-loose";

  const downloadICS = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//M2 House of D2 House Warming//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "SUMMARY:M2 House of D2 House Warming",
      "DTSTART:20260501T093000",
      "DTEND:20260501T103000",
      "LOCATION:M2 House of D2, Plot No 31, Fabnest Nagar, Johnson Nagar Extension, Thyagaraja Nagar, Tirunelveli, TamilNadu - 627011",
      "DESCRIPTION:Join us as we commence the beginning of a new chapter at M2 House of D2.",
      "STATUS:CONFIRMED",
      "SEQUENCE:1",
      "BEGIN:VALARM",
      "TRIGGER:-P7D",
      "DESCRIPTION:Reminder: M2 House of D2 House Warming is in 1 week!",
      "ACTION:DISPLAY",
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-P3D",
      "DESCRIPTION:Reminder: M2 House of D2 House Warming is in 3 days!",
      "ACTION:DISPLAY",
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "DESCRIPTION:Reminder: M2 House of D2 House Warming is tomorrow!",
      "ACTION:DISPLAY",
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-PT2H",
      "DESCRIPTION:Reminder: M2 House of D2 House Warming is in 2 hours!",
      "ACTION:DISPLAY",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'M2_House_of_D2_House_Warming.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Shared Head Tags (Fonts)
  const FontLinks = () => (
    <link 
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Poppins:wght@200;300;400;500;600&family=Noto+Serif+Tamil:wght@400;700;900&family=Noto+Sans+Tamil:wght@300;400;500;600&display=swap" 
      rel="stylesheet" 
    />
  );

  // Landing Screen
  if (!hasEntered) {
    return (
      <div className="min-h-screen w-full bg-[#FFF8F0] text-[#3E2723] flex flex-col items-center justify-center relative selection:bg-[#C9A227]/20">
        <FontLinks />
        
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#C9A227]/10 blur-[100px] md:blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#C9A227]/10 blur-[100px] md:blur-[160px] rounded-full animate-pulse transition-all duration-1000" />
        </div>
        
        <div className="z-10 flex flex-col items-center animate-fade-in p-8 text-center bg-white/30 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl">
          <Heart size={32} className="text-[#C9A227] mb-6 opacity-80 animate-pulse" />
          <h1 className="text-xl md:text-2xl font-light mb-2 text-[#3E2723] tracking-[0.2em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            Choose Language
          </h1>
          <p className="text-sm text-[#8B5E3C] mb-8" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
            மொழியை தேர்ந்தெடுக்கவும்
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={() => { setLang('en'); setHasEntered(true); }} 
              className="px-10 py-4 bg-[#3E2723] text-[#FFF8F0] rounded-full font-semibold tracking-widest uppercase hover:bg-[#C9A227] hover:text-[#3E2723] transition-all shadow-xl active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              English
            </button>
            <button 
              onClick={() => { setLang('ta'); setHasEntered(true); }} 
              className="px-10 py-4 bg-white text-[#C9A227] border border-[#C9A227]/30 rounded-full font-semibold tracking-widest uppercase hover:bg-[#C9A227] hover:text-[#FFF8F0] transition-all shadow-lg active:scale-95"
              style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}
            >
              தமிழ்
            </button>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          body { margin: 0; background: #FFF8F0; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}} />
      </div>
    );
  }

  // Main Invitation
  return (
    <div className="min-h-screen w-full bg-[#FFF8F0] text-[#3E2723] flex flex-col items-center justify-center relative selection:bg-[#C9A227]/20">
      <FontLinks />
      
      {/* Dynamic Ambient Backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#C9A227]/10 blur-[100px] md:blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-[#C9A227]/10 blur-[100px] md:blur-[160px] rounded-full animate-pulse transition-all duration-1000" />
      </div>

      {/* Language Switcher - Inside Invitation */}
      <div className="absolute top-6 md:top-8 right-6 md:right-10 z-50">
        <button 
          onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
          className="bg-white/40 backdrop-blur-xl border border-white/50 text-[#C9A227] px-5 py-2 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase shadow-lg active:scale-95 hover:bg-white/60 transition-all duration-300"
          style={{ fontFamily: lang === 'en' ? "'Noto Sans Tamil', sans-serif" : "'Poppins', sans-serif" }}
        >
          {lang === 'en' ? 'தமிழ்' : 'English'}
        </button>
      </div>

      {/* Primary Container */}
      <div className="w-full max-w-xl md:max-w-2xl min-h-screen md:min-h-[90vh] md:my-8 bg-transparent md:bg-white/30 md:backdrop-blur-sm md:rounded-[40px] md:shadow-[0_40px_100px_-20px_rgba(201,162,39,0.15)] md:border md:border-white/40 flex flex-col justify-between items-center gap-6 px-8 md:px-16 py-16 md:py-12 relative z-10">
        
        {/* 1. Header Symbol */}
        <div className="flex flex-col items-center flex-shrink-0 animate-fade-in">
          <div className="relative mb-6 md:mb-4">
            <div className="absolute inset-0 bg-[#C9A227]/20 blur-xl rounded-full scale-150 animate-pulse" />
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="relative scale-90 md:scale-100">
              <rect x="10" y="0" width="4" height="40" rx="2" fill="#C9A227" />
              <rect x="0" y="12" width="24" height="4" rx="2" fill="#C9A227" />
            </svg>
          </div>
          <p className="text-[#C9A227] text-[10px] md:text-[11px] tracking-[0.5em] font-medium uppercase text-center" style={{ fontFamily: sansFont }}>
            {t.blessing}
          </p>
        </div>

        {/* 2. Scripture */}
        <div className="flex-shrink-0 animate-fade-in delay-1 text-center max-w-[90%] md:max-w-full">
          <p className={`text-[#3E2723] text-lg md:text-2xl font-light mb-4 italic opacity-80 px-2 ${verseLeading}`} style={{ fontFamily: serifFont }}>
            "{t.verse}"
          </p>
          <div className="h-[1px] w-12 md:w-16 bg-[#C9A227]/40 mx-auto" />
          <p className="text-[#8B5E3C] text-[9px] md:text-[10px] tracking-[0.4em] mt-4 font-semibold uppercase" style={{ fontFamily: sansFont }}>
            {t.reference}
          </p>
        </div>

        {/* 3. Hero Title */}
        <div className="flex-shrink-0 animate-fade-in delay-2 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <div className="h-px w-6 md:w-12 bg-[#C9A227]/50" />
            <span className="text-[#C9A227] text-lg md:text-xl font-black tracking-widest uppercase text-center px-2" style={{ fontFamily: serifFont }}>
              M2 House of D2
            </span>
            <div className="h-px w-6 md:w-12 bg-[#C9A227]/50" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-black glossy-gold mb-3 md:mb-4 uppercase relative py-1 ${titleTracking} ${titleLeading}`} style={{ fontFamily: serifFont }}>
            {t.title}
          </h1>
          <p className={`text-[#8B5E3C] text-[11px] md:text-[13px] font-light tracking-[0.2em] uppercase opacity-70 px-4 ${lang === 'ta' ? 'leading-relaxed' : 'leading-normal'}`} style={{ fontFamily: sansFont }}>
            {t.welcome}
          </p>
        </div>

        {/* 4. Details Section - Adjusted Layout for Long Content */}
        <div className="w-full flex flex-col items-center gap-5 md:gap-6 flex-shrink-0 animate-fade-in delay-3 py-2 md:py-4">
          
          {/* Date & Time Row */}
          <div className="w-full flex flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[8px] md:text-[9px] text-[#C9A227] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: sansFont }}>{t.dateLabel}</p>
              <p className="text-sm md:text-base font-medium tracking-tight text-[#3E2723] whitespace-nowrap" style={{ fontFamily: sansFont }}>{t.dateValue}</p>
            </div>
            
            <div className="h-8 w-px bg-[#C9A227]/30" />
            
            <div className="flex flex-col items-center gap-1">
              <p className="text-[8px] md:text-[9px] text-[#C9A227] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: sansFont }}>{t.timeLabel}</p>
              <p className="text-sm md:text-base font-medium tracking-tight text-[#3E2723] whitespace-nowrap" style={{ fontFamily: sansFont }}>{t.timeValue}</p>
            </div>
          </div>

          {/* Location Row */}
          <div className="flex flex-col items-center gap-1.5 w-full max-w-lg px-2 mt-2">
            <p className="text-[8px] md:text-[9px] text-[#C9A227] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: sansFont }}>{t.addressLabel}</p>
            <p className={`text-[11px] md:text-[13px] font-medium tracking-wide text-[#3E2723] text-center ${addressLeading}`} style={{ fontFamily: sansFont }}>
              {t.addressValue}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[8px] md:text-[9px] text-[#C9A227] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: sansFont }}>{t.phoneLabel}</span>
              <a href="tel:+919940873958" className="text-[11px] md:text-[13px] font-semibold tracking-wider text-[#3E2723] hover:text-[#C9A227] transition-colors" style={{ fontFamily: sansFont }}>
                {t.phoneValue}
              </a>
            </div>
          </div>
          
        </div>

        {/* 5. Countdown */}
        <div className="w-full max-sm:max-w-xs max-w-sm md:max-w-md bg-white/40 md:bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl py-5 md:py-6 flex justify-around px-2 md:px-6 shadow-2xl shadow-[#C9A227]/5 flex-shrink-0 animate-fade-in delay-4">
          {[
            { v: timeLeft.days, l: t.days },
            { v: timeLeft.hours, l: t.hours },
            { v: timeLeft.minutes, l: t.mins },
            { v: timeLeft.seconds, l: t.secs }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center w-1/4">
              <span className="text-xl md:text-3xl font-semibold text-[#3E2723] tabular-nums tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {String(item.v).padStart(2, '0')}
              </span>
              <span className="text-[7px] md:text-[8px] font-bold text-[#C9A227] uppercase tracking-widest mt-1 opacity-60" style={{ fontFamily: sansFont }}>{item.l}</span>
            </div>
          ))}
        </div>

        {/* 6. Action Bar */}
        <div className="w-full flex flex-col items-center gap-6 md:gap-8 flex-shrink-0 animate-fade-in delay-5 mt-4">
           <div className="text-center w-full">
              <p className="text-[#8B5E3C] text-[9px] md:text-[10px] tracking-[0.4em] font-bold uppercase mb-3 opacity-60" style={{ fontFamily: sansFont }}>{t.familyLabel}</p>
              <div className="flex flex-col items-center gap-1.5 md:gap-2">
                {t.familyNames.map((name, index) => (
                  <p key={index} className="text-[13px] md:text-[15px] font-bold text-[#3E2723] uppercase tracking-wider" style={{ fontFamily: serifFont }}>
                    {name}
                  </p>
                ))}
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row w-full gap-3 md:gap-4 max-w-xs md:max-w-md">
            <a 
              href="https://goo.gl/maps/J8iWPyPLmCADpiXG9?g_st=aw" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-[#3E2723] text-white rounded-2xl shadow-xl flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase active:scale-95 hover:bg-[#261714] transition-all duration-300"
              style={{ fontFamily: sansFont }}
            >
              <MapPin size={14} />
              {t.mapBtn}
            </a>
            <button 
              onClick={downloadICS}
              className="flex-1 py-4 bg-white text-[#3E2723] border border-[#C9A227]/30 rounded-2xl shadow-xl flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase active:scale-95 hover:bg-[#FFF8F0] transition-all duration-300"
              style={{ fontFamily: sansFont }}
            >
              <Calendar size={14} />
              {t.addToCalBtn}
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="opacity-30 pt-4 flex flex-col items-center flex-shrink-0 animate-fade-in delay-5">
           <Heart size={14} className="text-[#C9A227] fill-[#C9A227]" />
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        body { 
          margin: 0;
          padding: 0;
          background: #FFF8F0;
          -webkit-tap-highlight-color: transparent;
        }
        
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

        html { -webkit-text-size-adjust: 100%; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glossyShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .glossy-gold {
          background: linear-gradient(
            to right,
            #A67C00 0%,
            #C9A227 22%,
            #FFF3B0 45%,
            #FFF3B0 50%,
            #FFF3B0 55%,
            #C9A227 78%,
            #A67C00 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glossyShimmer 6s infinite linear;
          text-shadow: 0 2px 4px rgba(201, 162, 39, 0.1);
        }
        
        .animate-fade-in { 
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          opacity: 0; 
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        .delay-5 { animation-delay: 1s; }
      `}} />
    </div>
  );
}
