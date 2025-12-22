import sihuaData from '../src/data/interpretations/stars/sihua.json';

// Standard 10 Stems SiHua (Zhongzhou/Common)
// Format: [Lu, Quan, Ke, Ji]
const RULES: Record<string, string[]> = {
    'Jia': ['廉貞', '破軍', '武曲', '太陽'],
    'Yi': ['天機', '天梁', '紫微', '太陰'],
    'Bing': ['天同', '天機', '文昌', '廉貞'],
    'Ding': ['太陰', '天同', '天機', '巨門'],
    'Wu': ['貪狼', '太陰', '右弼', '天機'],
    'Ji': ['武曲', '貪狼', '天梁', '文曲'],
    'Geng': ['太陽', '武曲', '太陰', '天同'], // Note: Ke/Ji variations exist, checking commonly accepted
    'Xin': ['巨門', '太陽', '文曲', '文昌'],
    'Ren': ['天梁', '紫微', '左輔', '武曲'],
    'Gui': ['破軍', '巨門', '太陰', '貪狼']
};

const TYPE_MAP = ['Lu', 'Quan', 'Ke', 'Ji'];

function checkSiHua() {
    console.log("Checking SiHua Completeness...");
    const data = sihuaData as Record<string, any>;
    let missingCount = 0;

    for (const [stem, stars] of Object.entries(RULES)) {
        // console.log(`Checking ${stem} Stem...`);
        stars.forEach((starName, index) => {
            const type = TYPE_MAP[index];

            // Check if data has this star
            if (!data[starName]) {
                console.log(`[MISSING] ${stem} Stem: ${starName} has no entry at all.`);
                missingCount++;
                return;
            }

            // Check if data has the specific type
            if (!data[starName][type]) {
                console.log(`[MISSING] ${stem} Stem: ${starName} missing ${type} (Found: ${Object.keys(data[starName]).join(',')})`);
                missingCount++;
            }
        });
    }

    if (missingCount === 0) {
        console.log("SUCCESS: All 40 SiHua transformations are present.");
    } else {
        console.log(`FAILURE: Missing ${missingCount} transformations.`);
    }
}

checkSiHua();
