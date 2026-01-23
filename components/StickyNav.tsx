import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const StickyNav = () => {
    const [copied, setCopied] = useState(false);
    
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!! PUT COIN ADDRESS (CA) HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const CA = "SOON"; 

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Logo positioned top-left */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
                className="fixed top-4 left-4 md:top-6 md:left-6 z-50 transition-transform hover:scale-105 active:scale-95"
                aria-label="Return to top"
            >
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/penguin%20strategy.png" 
                    alt="Pengu Logo" 
                    className="w-16 md:w-20 h-auto drop-shadow-md"
                />
            </button>

            {/* Navigation Bar - Centered */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
                <div className="bg-white/90 backdrop-blur-md px-4 md:px-8 py-2 md:py-3 rounded-full shadow-sm border border-slate-200 flex gap-4 md:gap-8">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="text-slate-500 hover:text-sky-600 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">
                        Home
                    </button>
                    <button onClick={() => scrollTo('mission')} className="text-slate-500 hover:text-sky-600 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">
                        Mission
                    </button>
                    <button onClick={() => scrollTo('adoption')} className="text-slate-500 hover:text-sky-600 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">
                        Adopt
                    </button>
                </div>

                <a 
                    href="https://adopt.sanccob.co.za/get-involved/adopt-a-penguin/adopt-and-name-a-penguin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden lg:block bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                >
                    Donate
                </a>
            </div>

            {/* Right Side Actions: CA & Twitter */}
            <div className="fixed top-6 right-4 md:right-6 z-50 flex items-center gap-3">
                
                {/* CA Bar - Compact Version for Nav */}
                <div className="relative hidden md:block">
                    <button 
                        onClick={handleCopy}
                        className="relative overflow-hidden flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-slate-200 hover:border-sky-200 hover:bg-white transition-all duration-300 group cursor-pointer"
                    >
                        {/* Liquid Fill Animation */}
                        <div className={`absolute inset-0 bg-sky-100/50 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left ${copied ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        
                        <span className="relative z-10 font-bold text-sky-600 text-xs tracking-wide">CA:</span>
                        <span className="relative z-10 font-mono text-slate-600 text-xs tracking-wide truncate max-w-[100px] lg:max-w-[140px]">{CA}</span>
                        
                        <div className="relative z-10 ml-1">
                             {copied ? (
                                <div className="bg-green-100 p-1 rounded-md">
                                    <Check size={12} className="text-green-600" />
                                </div>
                            ) : (
                                <div className="group-hover:bg-slate-100 p-1 rounded-md transition-colors">
                                    <Copy size={12} className="text-slate-400 group-hover:text-sky-500 transition-colors" />
                                </div>
                            )}
                        </div>
                    </button>
                    
                     {/* Copied Popup */}
                     <div className={`absolute top-full right-0 mt-2 pointer-events-none transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                        <div className="bg-slate-800 text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                            Copied!
                        </div>
                    </div>
                </div>

                {/* Twitter (X) Logo */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!! PUT TWITTER LINK HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm border border-slate-200 text-slate-800 hover:text-black hover:scale-110 transition-all duration-300 group"
                    aria-label="Follow on X (Twitter)"
                >
                   {/* X Logo SVG */}
                   <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                   </svg>
                </a>
            </div>
        </>
    );
};
