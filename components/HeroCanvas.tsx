import React from 'react';
import { PENGUIN_SPECIES } from '../constants';

interface PenguinHotspotProps {
    speciesId: string;
    top: string;
    left: string;
    width: string;
    height: string;
    alignTooltip?: 'left' | 'center' | 'right';
}

const PenguinHotspot: React.FC<PenguinHotspotProps> = ({ speciesId, top, left, width, height, alignTooltip = 'center' }) => {
    const species = PENGUIN_SPECIES.find(p => p.id === speciesId);
    if (!species) return null;

    // Determine tooltip position classes based on alignment prop
    let positionClass = 'left-1/2 -translate-x-1/2'; // Default center
    let arrowClass = 'left-1/2 -translate-x-1/2';
    
    if (alignTooltip === 'left') {
        positionClass = 'left-0';
        arrowClass = 'left-8';
    } else if (alignTooltip === 'right') {
        positionClass = 'right-0';
        arrowClass = 'right-8';
    }

    return (
        <div 
            className="absolute z-20 group"
            style={{ top, left, width, height }}
        >
            {/* Penguin Sprite - Visible on Canvas */}
            {species.imageUrl ? (
                 <img 
                    src={species.imageUrl} 
                    alt={species.name}
                    className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:drop-shadow-2xl cursor-pointer"
                />
            ) : (
                /* Fallback for species without images (invisible hitbox, e.g. Macaroni if no image provided) */
                <div className="w-full h-full cursor-help"></div>
            )}

            {/* Info Card - Appears on Hover */}
            <div 
                className={`absolute bottom-full mb-4 w-72 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none z-30 ${positionClass}`}
            >
                <h3 className="font-bold text-slate-800 text-xl mb-1">{species.name}</h3>
                <p className="text-xs text-slate-400 font-serif italic mb-3">{species.scientificName}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{species.description}</p>
                
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                    <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded-md border border-sky-100">{species.height}</span>
                    <span className="bg-slate-50 text-slate-700 px-2 py-1 rounded-md border border-slate-100">{species.habitat}</span>
                </div>
                
                {/* Connector Triangle */}
                <div className={`absolute -bottom-2 w-4 h-4 bg-white/95 rotate-45 border-b border-r border-slate-100 ${arrowClass}`}></div>
            </div>
        </div>
    );
};

export const HeroCanvas = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-slate-50">
            {/* Main Background Image */}
            <img 
                src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                alt="Antarctic landscape" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Gradient Shadow for Depth */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-slate-900/15 to-transparent pointer-events-none"></div>

            {/* Interactive Overlay Layer */}
            <div className="absolute inset-0 w-full h-full z-10">
                
                {/* 1. Adélie Pair (Far Left) */}
                <PenguinHotspot 
                    speciesId="adelie"
                    top="50%" 
                    left="7%" 
                    width="8%" 
                    height="12%" 
                    alignTooltip="left"
                />

                {/* 2. Emperor Penguin (Left, Large) */}
                <PenguinHotspot 
                    speciesId="emperor"
                    top="42%" 
                    left="23%" 
                    width="9%" 
                    height="42%" 
                />

                {/* 3. Gentoo Penguin (Left Center, Small looking up) */}
                <PenguinHotspot 
                    speciesId="gentoo"
                    top="61%" 
                    left="33%" 
                    width="6%" 
                    height="28%" 
                />

                {/* 4. Chinstrap Penguin (Center Right, looking left) */}
                <PenguinHotspot 
                    speciesId="chinstrap"
                    top="63%" 
                    left="62%" 
                    width="6%" 
                    height="25%" 
                />

                {/* 5. King Penguin (Right, Large standing) */}
                <PenguinHotspot 
                    speciesId="king"
                    top="47%" 
                    left="77%" 
                    width="8%" 
                    height="35%" 
                />

            </div>
            
            {/* Hint for interaction */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400/80 text-sm font-medium tracking-widest uppercase animate-pulse pointer-events-none select-none">
                Explore the flock
            </div>
        </section>
    );
};