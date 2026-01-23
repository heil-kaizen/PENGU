import React, { useState, useRef } from 'react';
import { Heart, ExternalLink, Calendar, MapPin, Activity } from 'lucide-react';
import { MOCK_ADOPTIONS } from '../constants';

export const AdoptionCenter = () => {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (previewRef.current) {
            // Offset the preview slightly from the cursor to avoid blocking view
            const x = e.clientX + 20;
            const y = e.clientY + 20;
            previewRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    return (
        <section id="adoption" className="relative py-24 overflow-hidden bg-slate-50">
            {/* Background with Blur Effect */}
             <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-md scale-105"
                />
                <div className="absolute inset-0 bg-white/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow-sm">Adoption Center</h2>
                     <p className="text-slate-700 font-medium max-w-2xl mx-auto drop-shadow-sm">
                        These penguins are currently being rehabilitated. Your adoption helps fund their food, medication, and care until they can be released back into the wild.
                     </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MOCK_ADOPTIONS.map((penguin) => (
                        <div key={penguin.id} className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                            {/* Image Header with Hover Preview Event */}
                            <div 
                                className="relative h-48 w-full overflow-hidden bg-slate-100 cursor-zoom-in"
                                onMouseEnter={(e) => {
                                    setPreviewSrc(penguin.img_link);
                                    handleMouseMove(e);
                                }}
                                onMouseLeave={() => setPreviewSrc(null)}
                                onMouseMove={handleMouseMove}
                            >
                                <img 
                                    src={penguin.img_link} 
                                    alt={`Penguin ${penguin.id}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-white/50">
                                    {penguin.age}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">{penguin.id}</h3>
                                </div>

                                <div className="space-y-3 mt-2 flex-grow">
                                    <div className="flex items-start gap-2 text-sm text-slate-600">
                                        <Activity size={16} className="text-rose-400 mt-0.5 shrink-0" />
                                        <span className="line-clamp-2 leading-tight">{penguin.reason_for_admission}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Calendar size={14} className="text-sky-400 shrink-0" />
                                        <span>Admitted: {penguin.date_admitted}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <MapPin size={14} className="text-emerald-400 shrink-0" />
                                        <span className="truncate">{penguin.area_found}</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
                                    {/* Adopt Button - External Link */}
                                    <a 
                                        href="https://adopt.sanccob.co.za/get-involved/adopt-a-penguin/adopt-and-name-a-penguin/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg"
                                    >
                                        <Heart size={14} className="fill-current" />
                                        Adopt
                                    </a>

                                    {/* Proof Button - External Link to Twitter */}
                                    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                    {/* !!!!!!!!!!!!!!!!!!!!!!!! PUT TWITTER LINK HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                    <a 
                                        href="https://x.com/home" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-sky-600 hover:border-sky-200 transition-all"
                                    >
                                        Proof
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-500 font-medium italic drop-shadow-sm">
                        * All adoption proceeds go directly to conservation efforts.
                    </p>
                </div>
            </div>

            {/* Floating Image Preview */}
            <div 
                ref={previewRef}
                className="fixed top-0 left-0 z-[100] pointer-events-none"
                style={{ opacity: previewSrc ? 1 : 0 }}
            >
                {previewSrc && (
                    <div className="bg-white/90 backdrop-blur-xl p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 animate-fade-in">
                        <img 
                            src={previewSrc} 
                            alt="Preview" 
                            className="w-auto h-auto max-w-[400px] max-h-[600px] rounded-xl shadow-sm"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
