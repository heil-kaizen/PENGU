import React from 'react';
import { Shield, BookOpen, Heart, Users } from 'lucide-react';

export const MissionSection = () => {
    return (
        <section id="mission" className="relative py-32 overflow-hidden bg-slate-50">
             {/* Background with Blur Effect */}
             <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-md scale-105"
                />
                <div className="absolute inset-0 bg-white/40"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight drop-shadow-sm">Our Mission</h2>
                    <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
                        Our mission is to help protect the conservation of penguins by acquiring a portfolio of penguins currently in rehabilitation to be released back into the wild. All revenue from penguin acquisitions is donated to the SANCCOB seabirds facility in Capetown, South Africa to cover the cost of fish, medication, water and other essentials needed for rehabilitation. Creator fees will be used to invest in the rehabilitation of as many penguins as possible.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 space-y-8 animate-fade-in">
                    
                    <p className="text-slate-600 leading-loose text-lg text-center max-w-3xl mx-auto">
                        Penguins face growing threats from climate change, habitat loss, and environmental disruption. While many conservation efforts work behind the scenes, we believe awareness and education are essential to long-term protection.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-b border-slate-100 my-8">
                        <div className="space-y-6">
                            <h3 className="font-bold text-slate-800 text-lg pb-2">Through this platform, we aim to:</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-sky-100 p-3 rounded-xl text-sky-600 shrink-0 group-hover:scale-110 transition-transform">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="text-slate-600 leading-relaxed pt-1">Educate people about different penguin species and their habitats</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                                        <Shield size={20} />
                                    </div>
                                    <span className="text-slate-600 leading-relaxed pt-1">Share clear, accurate information in a calm and engaging way</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-rose-100 p-3 rounded-xl text-rose-500 shrink-0 group-hover:scale-110 transition-transform">
                                        <Heart size={20} />
                                    </div>
                                    <span className="text-slate-600 leading-relaxed pt-1">Support symbolic penguin adoption programs that fund real conservation work</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-indigo-100 p-3 rounded-xl text-indigo-500 shrink-0 group-hover:scale-110 transition-transform">
                                        <Users size={20} />
                                    </div>
                                    <span className="text-slate-600 leading-relaxed pt-1">Build a community that cares about wildlife through learning and transparency</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-center">
                             <div className="bg-sky-50/80 rounded-2xl p-8 text-center border border-sky-100 w-full h-full flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5">
                                    <Shield size={100} />
                                </div>
                                <p className="text-sky-800 font-serif italic text-xl md:text-2xl mb-6 relative z-10">
                                    "We believe that understanding leads to respect, and respect leads to action."
                                </p>
                                <p className="text-sky-600 text-sm font-bold uppercase tracking-wide relative z-10">
                                    Community Protection
                                </p>
                                <p className="text-sky-600/80 text-sm mt-2 relative z-10">
                                    By learning about penguins and the environments they depend on, you become part of their story.
                                </p>
                             </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row gap-5 items-center text-center md:text-left">
                        <div className="bg-slate-200 p-3 rounded-full text-slate-500 shrink-0">
                            <Shield size={24} />
                        </div>
                        <p className="text-sm text-slate-500 italic leading-relaxed">
                            This platform does not promote ownership of animals. Symbolic adoptions support conservation organizations and ongoing protection efforts.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
