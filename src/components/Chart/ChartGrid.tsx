import React from 'react';
import { ChartData } from '../../logic/models/ChartData';
import { PalaceCard } from './PalaceCard';

interface ChartGridProps {
    chart: ChartData;
}

export const ChartGrid: React.FC<ChartGridProps> = ({ chart }) => {
    // The Grid Layout usually follows:
    // Si   Wu   Wei   Shen
    // Chen            You
    // Mao             Xu
    // Yin  Chou Zi    Hai

    // Indices:
    // Si(5) Wu(6) Wei(7) Shen(8)
    // Chen(4)            You(9)
    // Mao(3)             Xu(10)
    // Yin(2) Chou(1) Zi(0) Hai(11)

    // We can use CSS Grid.
    // 4 columns, 4 rows.
    // Row 1: 5, 6, 7, 8
    // Row 2: 4, Center, Center, 9
    // Row 3: 3, Center, Center, 10
    // Row 4: 2, 1, 0, 11

    const getPalace = (branchIndex: number) => {
        return chart.palaces.find(p => p.branchIndex === branchIndex)!;
    };

    const CenterInfo = () => (
        <div className="col-span-2 row-span-2 bg-slate-900 flex flex-col items-center justify-center border border-slate-700 p-4">
            <h3 className="text-2xl font-bold text-amber-500 mb-2">Zi Wei Dou Shu</h3>
            <div className="text-slate-400 text-sm">
                <p>Bureau: {chart.bureau} (Phase)</p>
                <p>System: Standard</p>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-4 gap-1 w-full max-w-4xl mx-auto aspect-square bg-slate-900 p-1 rounded-lg shadow-2xl">
            {/* Row 1 */}
            <PalaceCard data={getPalace(5)} /> {/* Si */}
            <PalaceCard data={getPalace(6)} /> {/* Wu */}
            <PalaceCard data={getPalace(7)} /> {/* Wei */}
            <PalaceCard data={getPalace(8)} /> {/* Shen */}

            {/* Row 2 */}
            <PalaceCard data={getPalace(4)} /> {/* Chen */}
            <CenterInfo /> {/* Center Block spans 2x2 */}
            <PalaceCard data={getPalace(9)} /> {/* You */}

            {/* Row 3 (Center block continues, so only side cells) */}
            <PalaceCard data={getPalace(3)} /> {/* Mao */}
            {/* Center occupied */}
            <PalaceCard data={getPalace(10)} /> {/* Xu */}

            {/* Row 4 */}
            <PalaceCard data={getPalace(2)} /> {/* Yin */}
            <PalaceCard data={getPalace(1)} /> {/* Chou */}
            <PalaceCard data={getPalace(0)} /> {/* Zi */}
            <PalaceCard data={getPalace(11)} /> {/* Hai */}
        </div>
    );
};
