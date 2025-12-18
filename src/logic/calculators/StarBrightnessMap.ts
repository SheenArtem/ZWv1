// Simplified brightness map (Miaowang)
// Map: Star -> Branch -> Brightness
// B(0-11)
// M=Miao, W=Wang, D=De, L=Li, P=Ping, B=Bu, X=Xian

export const BRIGHTNESS_TABLE: Record<string, string[]> = {
    // Zi (0) ... Hai (11)
    'Zi Wei': ['Ping', 'Miao', 'Miao', 'Wang', 'Xian', 'Wang', 'Miao', 'Ping', 'Wang', 'Ping', 'Ping', 'Wang'],
    'Tian Ji': ['Miao', 'Xian', 'Wang', 'Wang', 'Miao', 'Ping', 'Miao', 'Xian', 'De', 'Wang', 'Ping', 'Ping'],
    'Tai Yang': ['Xian', 'Xian', 'Wang', 'Miao', 'Miao', 'Wang', 'Wang', 'De', 'De', 'Ping', 'Xian', 'Xian'],
    'Wu Qu': ['Wang', 'Miao', 'Ping', 'Wang', 'Miao', 'Ping', 'Wang', 'Miao', 'Ping', 'Wang', 'Miao', 'Ping'],
    'Tian Tong': ['Wang', 'Xian', 'Ping', 'Miao', 'Ping', 'Xian', 'Wang', 'Xian', 'Wang', 'Ping', 'Ping', 'Miao'],
    'Lian Zhen': ['Ping', 'Li', 'Miao', 'Ping', 'Li', 'Xian', 'Ping', 'Li', 'Miao', 'Ping', 'Li', 'Xian'],

    'Tian Fu': ['Miao', 'Miao', 'Miao', 'Ping', 'Miao', 'De', 'Wang', 'Miao', 'De', 'Ping', 'Miao', 'Wang'],
    'Tai Yin': ['Miao', 'Miao', 'Xian', 'Xian', 'Xian', 'Xian', 'Xian', 'Ping', 'Li', 'Wang', 'Wang', 'Miao'],
    'Tan Lang': ['Wang', 'Miao', 'Ping', 'Ping', 'Wang', 'Miao', 'Ping', 'Ping', 'Wang', 'Miao', 'Ping', 'Xian'],
    'Ju Men': ['Wang', 'Xian', 'Miao', 'Miao', 'Ping', 'Ping', 'Wang', 'Xian', 'Miao', 'Miao', 'Ping', 'Wang'],
    'Tian Xiang': ['Wang', 'Miao', 'Miao', 'Xian', 'Miao', 'Ping', 'Wang', 'De', 'Miao', 'Xian', 'Miao', 'Ping'],
    'Tian Liang': ['Wang', 'Wang', 'Miao', 'Miao', 'Wang', 'Xian', 'Miao', 'Wang', 'Xian', 'Ping', 'Miao', 'Xian'],
    'Qi Sha': ['Wang', 'Wang', 'Miao', 'Wang', 'Wang', 'Ping', 'Wang', 'Wang', 'Miao', 'Wang', 'Wang', 'Ping'],
    'Po Jun': ['Miao', 'Wang', 'Ping', 'Xian', 'Wang', 'Miao', 'Miao', 'Wang', 'Ping', 'Xian', 'Wang', 'Miao'],
};

export const getBrightness = (starName: string, branchIndex: number): string => {
    const row = BRIGHTNESS_TABLE[starName];
    if (!row) return '';
    const val = row[branchIndex];

    // Map simplified codes to Chinese
    const map: Record<string, string> = {
        'Miao': '廟', 'Wang': '旺', 'De': '得', 'Li': '利',
        'Ping': '平', 'Bu': '不', 'Xian': '陷'
    };

    return map[val] || '';
};
