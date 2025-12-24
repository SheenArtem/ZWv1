import React, { useMemo, useState } from 'react';
import { ChartData } from '../logic/models/ChartData';
import { buildAIPrompt } from '../logic/promptBuilder';

interface AnalysisViewProps {
    chart: ChartData;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ chart }) => {
    // We assume the prompt was likely copied by App.tsx when entering this view,
    // but we still provide a manual copy button just in case.
    const [copied, setCopied] = useState(false);

    const promptText = useMemo(() => {
        try {
            return buildAIPrompt(chart);
        } catch (e) {
            console.error("Prompt Generation Error", e);
            return "無法產生提示詞資料";
        }
    }, [chart]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(promptText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = promptText;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Fallback copy failed', err);
            }
            document.body.removeChild(textArea);
        }
    };

    const handleOpenGemini = () => {
        window.open('https://gemini.google.com/app', '_blank');
    };

    return (
        <div className="p-4 md:p-8 bg-slate-950 text-slate-100 h-full overflow-y-auto w-full flex flex-col items-center">
            <div className="max-w-3xl w-full space-y-6">

                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        ✨ AI 大師解盤功能
                    </h2>
                    <p className="text-slate-400">
                        提示詞已自動複製！請直接前往 AI 工具貼上即可。
                    </p>
                </div>

                {/* Instructions Card */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                        <span className="mr-2">🚀</span> 使用步驟
                    </h3>
                    <ol className="list-decimal list-inside space-y-3 text-slate-300 ml-1">
                        <li>
                            <span className="text-emerald-400 font-bold">提示詞已自動複製</span> 到您的剪貼簿。
                        </li>
                        <li>
                            點擊下方 <span className="text-white font-bold bg-slate-700 px-2 py-0.5 rounded">前往 Google Gemini</span>。
                        </li>
                        <li>
                            在對話框中 <span className="text-white font-bold bg-slate-700 px-2 py-0.5 rounded">貼上 (Ctrl+V)</span> 並送出，即可獲得詳細解盤。
                        </li>
                    </ol>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                    <button
                        onClick={handleCopy}
                        className={`flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all transform active:scale-95 ${copied
                                ? 'bg-green-600 text-white shadow-green-900/50 shadow-lg'
                                : 'bg-slate-700 hover:bg-slate-600 text-slate-200 shadow-lg'
                            }`}
                    >
                        {copied ? '✓ 已再次複製' : '📋 手動複製提示詞'}
                    </button>

                    <button
                        onClick={handleOpenGemini}
                        className="flex items-center justify-center px-6 py-3 rounded-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/50 shadow-lg transition-all"
                    >
                        <span className="mr-2">🤖</span> 前往 Google Gemini
                    </button>
                </div>

                {/* Preview Area */}
                <div className="space-y-2">
                    <label className="text-sm text-slate-500 font-bold ml-1">
                        提示詞預覽 (Prompt Preview):
                    </label>
                    <div className="relative">
                        <textarea
                            readOnly
                            value={promptText}
                            className="w-full h-64 bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs font-mono text-slate-400 focus:outline-none focus:border-purple-500/50 resize-y selection:bg-purple-900/50"
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-slate-600 pointer-events-none bg-slate-950/80 px-2 rounded">
                            {promptText.length} characters
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
