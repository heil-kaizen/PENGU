import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MIGRATION_DATA = [
    { name: 'Adélie', km: 13000, color: '#38bdf8' }, // Sky 400
    { name: 'Emperor', km: 1000, color: '#f6ad55' }, // Orange 400
    { name: 'Chinstrap', km: 3000, color: '#94a3b8' }, // Slate 400
    { name: 'Gentoo', km: 500, color: '#2dd4bf' }, // Teal 400
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100 text-xs">
                <p className="font-bold text-slate-700">{payload[0].payload.name}</p>
                <p className="text-slate-500">Travels up to {payload[0].value.toLocaleString()} km</p>
            </div>
        );
    }
    return null;
};

export const MigrationMap = () => {
    return (
        <section id="migration" className="relative py-24 overflow-hidden">
             {/* Background with Blur Effect */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/Hero%20Assests/penguin%20strategy%20background.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-md scale-105"
                />
                <div className="absolute inset-0 bg-sky-50/70 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-light text-slate-800">The Great Migration</h2>
                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                        Every year, millions of penguins embark on incredible journeys to follow the retreating ice and find food.
                        Unlike birds that fly south, penguins swim thousands of kilometers through treacherous, freezing waters.
                    </p>
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/50">
                        <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                            Scientific Insight
                        </h4>
                        <p className="text-sm text-slate-500">
                            Data shown here is approximated based on tracking studies conducted by the British Antarctic Survey. 
                            Migration distances vary heavily based on sea ice extent during specific years.
                        </p>
                    </div>
                </div>

                {/* Visualization */}
                <div className="relative h-96 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/50">
                    <h3 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6">Annual Round-Trip Distance</h3>
                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart data={MIGRATION_DATA} layout="vertical" margin={{ left: 20 }}>
                            <XAxis type="number" hide />
                            {/* Workaround for generic type in YAxis by not strictly typing it here or accepting library flexibility */}
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="km" radius={[0, 4, 4, 0]} barSize={20}>
                                {MIGRATION_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    
                    {/* Y-Axis Labels manually placed for better control over "Minimal" look */}
                    <div className="absolute top-20 left-4 bottom-12 flex flex-col justify-between text-xs font-bold text-slate-500 text-right w-16 pointer-events-none">
                        {MIGRATION_DATA.map(d => (
                            <div key={d.name} className="h-6 flex items-center justify-end">{d.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};