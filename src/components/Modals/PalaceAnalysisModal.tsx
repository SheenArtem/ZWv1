
import { PalaceData, Star } from '../../logic/models/ChartData';

interface PalaceAnalysisModalProps {
    isOpen: boolean;
    onClose: () => void;
    palace: PalaceData | null;
}

export const PalaceAnalysisModal: React.FC<PalaceAnalysisModalProps> = ({ isOpen, onClose, palace }) => {
    if (!isOpen || !palace) return null;

    // Helper for Mutagen translation
    const getMutagenLabel = (m: string) => {
        const map: Record<string, string> = { 'Lu': '祿', 'Quan': '權', 'Ke': '科', 'Ji': '忌' };
        return map[m] || m;
    };

    // Helper to render stars with brightness
    const renderStar = (star: Star, isMajor: boolean) => (
        <span key={star.name} className={`inline-flex items-center mr-3 mb-1 ${isMajor ? 'text-lg font-bold text-purple-300' : 'text-sm text-slate-400'}`}>
            {star.name}
            {star.brightness && <span className="ml-1 text-xs text-amber-500 opacity-80">[{star.brightness}]</span>}
            {star.mutagen && <span className="ml-1 text-xs bg-red-900 text-red-100 px-1 rounded">{getMutagenLabel(star.mutagen)}</span>}
        </span>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div
                className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                    <div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-500">
                            {palace.palaceName} 解析
                        </h2>
                        <p className="text-sm text-slate-500 font-mono mt-1">
                            {palace.stemName}{palace.branchName}位 • {palace.daXian} • 小限{palace.xiaoXian}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

                    {/* Stars Section */}
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                        <h3 className="text-sm font-bold text-indigo-400 mb-3 uppercase tracking-wider border-b border-indigo-500/20 pb-1">宮內星曜</h3>
                        <div className="mb-4">
                            <p className="text-xs text-slate-500 mb-2">主星</p>
                            <div className="flex flex-wrap">
                                {palace.majorStars.length > 0
                                    ? palace.majorStars.map(s => renderStar(s, true))
                                    : <span className="text-slate-500 italic">無主星 (借對宮)</span>
                                }
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 mb-2">副星/雜曜</p>
                            <div className="flex flex-wrap">
                                {palace.minorStars.map(s => renderStar(s, false))}
                            </div>
                        </div>
                    </div>

                    {/* Analysis Text Section - Detailed Logic will go here */}
                    <div className="space-y-4">
                        {/* We will populate this from the Interpreter logic later. 
                             For now, we use the basic description if available, or placeholders. 
                             The user wants "More Detail", so we need to fetch that. 
                         */}
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">星曜解讀</h3>
                            {/* Currently PalaceData lacks a specific 'deepAnalysis' field. 
                                We might need to generate it on the fly or add it to the model.
                                For the UI draft, we'll try to use existing stars description or a placeholder.
                            */}
                            {/* Combine Major and Minor stars, filtering only those with descriptions */
                                palace.majorStars.concat(palace.minorStars)
                                    .filter(s => s.description)
                                    .map(star => (
                                        <div key={star.name} className="mb-4 bg-slate-800/20 p-3 rounded">
                                            <h4 className="font-bold text-slate-200 mb-1 flex items-center">
                                                {star.name}
                                                <span className="text-xs font-normal text-slate-500 ml-2 bg-slate-800 px-1.5 rounded">
                                                    {star.brightness || '平'}
                                                </span>
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                                                {star.description}
                                            </p>
                                        </div>
                                    ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800 bg-slate-950/50 text-right">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors text-sm font-bold"
                    >
                        關閉
                    </button>
                </div>
            </div>
        </div>
    );
};
