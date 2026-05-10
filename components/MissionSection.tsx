import React from 'react';
import { Shield, BookOpen, Heart, Users, ArrowRight } from 'lucide-react';

export const MissionSection = () => {
    return (
        <section id="mission" className="relative py-32 overflow-hidden bg-white">
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-20 blur-xl scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    {/* Professional Header: Tight tracking, sophisticated slate color */}
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                        Our Mission
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                        Our mission is to help protect the conservation of penguins by acquiring a portfolio of penguins currently in rehabilitation to be released back into the wild. All revenue from penguin acquisitions is donated to the <span className="font-semibold text-slate-800">SANCCOB</span> seabirds facility in Capetown, South Africa.
                    </p>
                </div>

                {/* Main Content Card: Using subtle glassmorphism and soft shadows */}
                <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 md:p-16 border border-slate-200/60 shadow-2xl shadow-slate-200/50">
                    
                    <p className="text-slate-500 leading-relaxed text-lg text-center max-w-2xl mx-auto mb-12">
                        Penguins face growing threats from climate change and habitat loss. We believe that <span className="text-slate-800 font-medium italic">awareness and education</span> are the foundation of long-term protection.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">Core Objectives</h3>
                            <ul className="space-y-8">
                                {[
                                    { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", text: "Educate people about different penguin species and their habitats" },
                                    { icon: Shield, color: "text-slate-700", bg: "bg-slate-100", text: "Share clear, accurate information in a calm and engaging way" },
                                    { icon: Heart, color: "text-rose-600", bg: "bg-rose-50", text: "Support symbolic penguin adoption programs that fund real conservation work" },
                                    { icon: Users, color: "text-indigo-600", bg: "bg-indigo-50", text: "Build a community that cares about wildlife through transparency" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-6 group">
                                        <div className={`${item.bg} p-4 rounded-2xl ${item.color} transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
                                            <item.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-slate-700 font-medium text-base leading-snug">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Professional Quote Card: Editorial Style */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[2.5rem] -z-10 blur-2xl opacity-50"></div>
                            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-center text-center">
                                <p className="text-slate-800 font-serif italic text-2xl md:text-3xl leading-snug mb-8">
                                    "We believe that understanding leads to respect, and respect leads to action."
                                </p>
                                <div className="space-y-1">
                                    <p className="text-slate-900 text-sm font-bold uppercase tracking-widest">
                                        Community Protection
                                    </p>
                                    <p className="text-slate-500 text-sm italic">
                                        Empowering conservation through knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
