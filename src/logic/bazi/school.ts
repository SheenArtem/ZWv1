// 八字分析所採用的流派 — 單一事實來源。
// UI 頂部標註與 AI 論命 markdown 匯出共用此處,避免兩邊各寫一份而漂移。
// 目前 enrich 層寫死為單一流派(尚無流派切換);若日後支援切換,改由 conventions 決定。

export interface BaziSchoolItem {
    k: string; // 面向(旺衰/格局/調候/曆法)
    v: string; // 該面向採用的方法
}

export interface BaziSchool {
    name: string;
    items: BaziSchoolItem[];
}

export const BAZI_SCHOOL: BaziSchool = {
    name: '子平．扶抑派',
    items: [
        { k: '旺衰', v: '扶抑法（得令／長生／得地／得勢 量化評分）' },
        { k: '格局', v: '月令八格（現代十神命名，建祿／羊刃以傳統名註記）' },
        { k: '調候', v: '窮通寶鑑查表（輔助用神）' },
        { k: '曆法', v: '節氣建月、立春換年（lunar-javascript 6tail）' },
    ],
};
