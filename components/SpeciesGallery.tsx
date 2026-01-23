import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Snowflake, MapPin, Ruler, Weight } from 'lucide-react';
import { PENGUIN_SPECIES } from '../constants';
import { PenguinSpecies } from '../types';

interface SpeciesCardProps {
    species: PenguinSpecies;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300 flex flex-col h-fit relative z-10 group">
            <div className="flex items-start justify-between mb-4 gap-4">
                 {/* Penguin Image pop-out effect */}
                 {species.imageUrl ? (
                    <div className="relative w-28 h-28 -mt-10 -ml-2 bg-white rounded-2xl p-2 shadow-lg border border-slate-100 flex-shrink-0 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <img 
                            src={species.imageUrl} 
                            alt={species.name} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                ) : (
                    <div className={`w-16 h-16 rounded-2xl ${species.imagePlaceholderColor} flex items-center justify-center text-slate-400 flex-shrink-0`}>
                        <Snowflake size={24} className="opacity-50" />
                    </div>
                )}
                
                <div className="text-right pt-1 flex-1">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{species.name}</h3>
                    <p className="text-xs text-slate-400 italic mt-1">{species.scientificName}</p>
                </div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {species.description}
            </p>

            {expanded && (
                <div className="mt-2 mb-4 pt-4 border-t border-slate-100 animate-fade-in space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <Ruler size={14} className="text-sky-400" />
                            <span>{species.height}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Weight size={14} className="text-sky-400" />
                            <span>{species.weight}</span>
                        </div>
                         <div className="flex items-center gap-2 col-span-2">
                            <MapPin size={14} className="text-sky-400" />
                            <span>{species.habitat}</span>
                        </div>
                    </div>
                    
                    <div className="bg-sky-50/80 p-3 rounded-xl mt-3">
                        <p className="text-xs text-sky-800 font-medium">Fun Fact:</p>
                        <p className="text-xs text-sky-700 italic mt-1">{species.funFact}</p>
                    </div>
                </div>
            )}

            <button 
                onClick={() => setExpanded(!expanded)}
                className="mt-auto w-full py-2 flex items-center justify-center gap-1 text-xs font-bold text-slate-400 hover:text-sky-500 transition-colors uppercase tracking-wider"
            >
                {expanded ? (
                    <>Show Less <ChevronUp size={14} /></>
                ) : (
                    <>Learn More <ChevronDown size={14} /></>
                )}
            </button>
        </div>
    );
};

export const SpeciesGallery = () => {
    const [filter, setFilter] = useState<'All' | 'Antarctic' | 'Sub-Antarctic'>('All');

    const filteredSpecies = useMemo(() => {
        if (filter === 'All') return PENGUIN_SPECIES;
        return PENGUIN_SPECIES.filter(p => p.region === filter);
    }, [filter]);

    return (
        <section id="gallery" className="relative py-24 overflow-hidden">
             {/* Background with Blur Effect */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-md scale-105"
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-light text-slate-800 mb-4">Meet the Species</h2>
                    <div className="flex justify-center gap-2">
                        {['All', 'Antarctic', 'Sub-Antarctic'].map((region) => (
                            <button
                                key={region}
                                onClick={() => setFilter(region as any)}
                                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                                    filter === region 
                                    ? 'bg-slate-800 text-white shadow-lg' 
                                    : 'bg-white/80 backdrop-blur-sm text-slate-500 hover:bg-white'
                                }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                    {filteredSpecies.map(species => (
                        <SpeciesCard key={species.id} species={species} />
                    ))}
                </div>
            </div>
        </section>
    );
};