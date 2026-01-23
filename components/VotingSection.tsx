import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { INITIAL_VOTE_OPTIONS } from '../constants';
import { VoteOption } from '../types';

export const VotingSection = () => {
    const [votes, setVotes] = useState<VoteOption[]>(INITIAL_VOTE_OPTIONS);
    const [hasVoted, setHasVoted] = useState(false);
    const [selectedVoteId, setSelectedVoteId] = useState<string | null>(null);

    useEffect(() => {
        const storedVote = localStorage.getItem('pengu_has_voted');
        if (storedVote) setHasVoted(true);
    }, []);

    const handleVote = () => {
        if (!selectedVoteId || hasVoted) return;

        const newVotes = votes.map(v => 
            v.id === selectedVoteId ? { ...v, votes: v.votes + 1 } : v
        );
        
        setVotes(newVotes);
        setHasVoted(true);
        localStorage.setItem('pengu_has_voted', 'true');
    };

    const totalVotes = votes.reduce((acc, curr) => acc + curr.votes, 0);

    return (
        <section id="voting" className="relative py-32 overflow-hidden">
            {/* Background with Blur Effect - slightly darkened for better card contrast */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://raw.githubusercontent.com/heil-kaizen/PENGU/main/background.png" 
                    alt="Background" 
                    className="w-full h-full object-cover blur-md scale-105"
                />
                <div className="absolute inset-0 bg-sky-900/10 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow-sm">
                        Vote for the name you like for the adopted penguin
                    </h2>
                    <p className="text-slate-700 font-medium opacity-90 text-lg">
                        Help us choose the perfect name for our newest rescue.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {votes.map((option) => {
                        const percent = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
                        const isSelected = selectedVoteId === option.id;

                        return (
                            <div 
                                key={option.id}
                                onClick={() => !hasVoted && setSelectedVoteId(option.id)}
                                className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 border shadow-sm ${
                                    hasVoted 
                                        ? 'cursor-default bg-white/95 border-slate-200' 
                                        : isSelected 
                                            ? 'bg-white border-sky-500 shadow-sky-100 shadow-lg scale-[1.02] ring-1 ring-sky-200' 
                                            : 'bg-white/85 backdrop-blur-md border-white/60 hover:bg-white hover:border-sky-300 hover:shadow-md'
                                }`}
                            >
                                {/* Progress Bar */}
                                {hasVoted && (
                                    <div 
                                        className="absolute top-0 left-0 h-full bg-sky-100 rounded-2xl transition-all duration-1000 ease-out z-0"
                                        style={{ width: `${percent}%` }}
                                    />
                                )}
                                
                                <div className="relative z-10 flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        {!hasVoted && (
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                                isSelected ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-400 group-hover:border-sky-400'
                                            }`}>
                                                {isSelected && <Check size={14} strokeWidth={3} />}
                                            </div>
                                        )}
                                        <span className={`text-lg font-bold tracking-wide ${isSelected ? 'text-sky-900' : 'text-slate-700'}`}>
                                            {option.name}
                                        </span>
                                    </div>
                                    {hasVoted && (
                                        <span className="text-sm font-bold text-slate-600 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-100 shadow-sm">
                                            {percent}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    {!hasVoted ? (
                        <button
                            onClick={handleVote}
                            disabled={!selectedVoteId}
                            className="bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-sky-600 hover:shadow-sky-200/50 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Submit Vote
                        </button>
                    ) : (
                        <div className="inline-block bg-white px-8 py-3 rounded-full text-green-700 font-bold border border-green-100 shadow-md">
                            Thanks for voting!
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};