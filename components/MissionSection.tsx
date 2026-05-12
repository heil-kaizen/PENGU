import React from 'react';
import { Shield, BookOpen, Heart, Users, ExternalLink, Calendar, User } from 'lucide-react';

export const MissionSection = () => {
    const coreObjectives = [
        { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", text: "Educate people about different penguin species and their habitats" },
        { icon: Shield, color: "text-slate-700", bg: "bg-slate-100", text: "Share clear, accurate information in a calm and engaging way" },
        { icon: Heart, color: "text-rose-600", bg: "bg-rose-50", text: "Support symbolic penguin adoption programs that fund real conservation work" },
        { icon: Users, color: "text-indigo-600", bg: "bg-indigo-50", text: "Build a community that cares about wildlife through transparency" }
    ];

    const charityData = [
        {
            name: 'Global Penguin Society',
            founded: '2009',
            founder: 'Dr. Pablo Garcia Borboroglu',
            desc: 'An internationally recognized leader dedicated to protecting all 18 species of penguin and their vital habitats.',
            url: 'https://www.globalpenguinsociety.org/'
        },
        {
            name: 'Oceanites',
            founded: '1987',
            founder: 'Ron Naveen',
            desc: "The world’s only publicly supported non-profit Antarctic Research Program, helping the peninsula’s inhabitants thrive.",
            url: 'https://www.oceanites.org/'
        },
        {
            name: 'Penguin Rescue',
            founded: '2019',
            founder: 'Janice Jones',
            desc: "A New Zealand sanctuary committed to saving indigenous penguins through rescue, rehabilitation, and release programs.",
            url: 'https://www.penguinrescue.nz/'
        },
        {
            name: 'Falklands Conservation',
            founded: '1979',
            founder: 'Peter Scott',
            desc: "The largest organization dedicated to conserving the biodiversity of the Falkland Islands, including 5 native species.",
            url: 'https://falklandsconservation.com/'
        },
        {
            name: 'Penguin Foundation',
            founded: '2006',
            founder: 'Researchers & Experts',
            desc: "Focuses on conserving the endangered Little Penguin and enhancing the natural environment of Phillip Island, Australia.",
            url: 'https://penguinfoundation.org.au/'
        }
    ];

    return (
        <section id="mission" className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30 blur-2xl scale-110"
                />
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">Our Mission</h2>
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
                        Our mission is to help protect the conservation of penguins by acquiring a portfolio of penguins currently in rehabilitation to be released back into the wild. All revenue from penguin acquisitions is donated to the <span className="font-bold text-sky-700 underline decoration-sky-200 underline-offset-4 tracking-tight">SANCCOB</span> seabirds facility in Capetown, South Africa.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-16 border border-white shadow-2xl shadow-sky-900/5">
                    <p className="text-slate-600 leading-relaxed text-lg text-center max-w-2xl mx-auto mb-16">
                        Penguins face growing threats from climate change. We believe that <span className="text-slate-900 font-semibold italic">awareness and education</span> are the foundation of long-term protection.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-16 items-center border-b border-slate-100 pb-16">
                        <div className="space-y-8">
                            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-slate-400 mb-6">Core Objectives</h3>
                            <ul className="space-y-8">
                                {coreObjectives.map((item, index) => (
                                    <li key={index} className="flex items-center gap-6 group">
                                        <div className={`${item.bg} p-4 rounded-2xl ${item.color} transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1`}>
                                            <item.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-slate-700 font-medium text-base leading-snug">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-indigo-50 rounded-[3rem] -z-10 blur-3xl opacity-60"></div>
                            <div className="bg-white/90 rounded-[2rem] p-10 shadow-sm border border-slate-100 text-center">
                                <p className="text-slate-800 font-serif italic text-2xl md:text-3xl leading-snug mb-8">
                                    "We believe that understanding leads to respect, and respect leads to action."
                                </p>
                                <p className="text-slate-900 text-sm font-bold uppercase tracking-widest">Community Protection</p>
                                <p className="text-slate-500 text-sm italic font-medium mt-1">Empowering conservation through knowledge.</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Roadmap Section with Clickable Linked Pills --- */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-sky-100">
                           Strategic Roadmap
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Commitment to Impact</h3>
                        <p className="text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
                            Creator fees are first prioritized for <span className="text-sky-700 font-bold">SANCCOB</span>. Once those needs are met, we expand our support to these world-class organizations:
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            {charityData.map((charity, i) => (
                                <div key={i} className="group relative">
                                    {/* The Clickable Pill Trigger */}
                                    <a 
                                        href={charity.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm text-slate-700 font-semibold text-sm hover:border-sky-400 hover:text-sky-700 hover:shadow-md transition-all cursor-pointer group/pill"
                                    >
                                        <span>{charity.name}</span>
                                        <ExternalLink size={12} className="opacity-0 group-hover/pill:opacity-40 transition-opacity" />
                                    </a>

                                    {/* The Hover Popup Window */}
                                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-72 p-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-sky-600 uppercase tracking-widest">
                                                <Calendar size={12} /> {charity.founded}
                                            </span>
                                            <ExternalLink size={14} className="text-slate-300" />
                                        </div>
                                        <h4 className="text-slate-900 font-bold text-base mb-1 text-left">{charity.name}</h4>
                                        <p className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium mb-3 text-left">
                                            <User size={12} /> {charity.founder}
                                        </p>
                                        <p className="text-slate-600 text-xs leading-relaxed text-left border-t border-slate-100 pt-3 italic">
                                            {charity.desc}
                                        </p>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/95"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <p className="mt-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto">
                    Global Protection Roadmap &bull; 2026
                </p>
            </div>
        </section>
    );
};
