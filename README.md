# 紫微斗數排盤系統 (Zi Wei Dou Shu Chart Generator)

這是一個基於現代 Web 技術構建的專業紫微斗數排盤系統。提供精確的命盤計算、靈活的顯示模式（本命、大限、流年、流月），以及專為 AI 分析設計的資料匯出功能。

## ✨ 主要功能

- **專業排盤**：
  - 支援 **本命盤**、**大限盤**、**流年盤**、**流月盤** 四種顯示模式。
  - 精確計算十二宮位、主星、副星、神煞（長生十二神、博士十二神等）。
  - 自動判斷特殊格局（如：日月同宮、七殺朝斗等）。

- **多層次顯示 (Context-Aware)**：
  - 在切換至大限、流年或流月盤時，系統會自動疊加對應的宮位資訊（例如：[流年命宮]）。
  - 對應顯示該層級的四化星變化（本命、大限、流年、流月四化）。

- **AI 輔助分析匯出**：
  - 內建 **「複製 Markdown」** 功能。
  - **智慧匯出**：根據當前選中的顯示模式（如流年盤），自動生成包含對應宮位疊加與四化資訊的結構化 Markdown 文字。
  - 完美適配 Google Gemini、ChatGPT 等大型語言模型，方便進行深度論命分析。

- **現代化介面**：
  - 深色模式設計（Dark Mode），視覺舒適專業。
  - 響應式佈局，支援桌面與行動裝置。

## 🛠️ 技術棧

- **核心框架**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **語言**: [TypeScript](https://www.typescriptlang.org/)
- **樣式**: [TailwindCSS](https://tailwindcss.com/)
- **曆法計算**: `lunar-javascript`

## 🚀 快速開始

### 前置需求
請確保您的環境已安裝 [Node.js](https://nodejs.org/) (建議 v18+)。

### 安裝專案

```bash
# Clone 儲存庫
git clone https://github.com/SheenArtem/ZWv1.git

# 進入目錄
cd ZWv1

# 安裝依賴
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```
啟動後，請瀏覽器訪問終端機顯示的網址 (通常是 `http://localhost:5173`)。

### 建置生產版本

```bash
npm run build
```
建置後的檔案將位於 `dist` 目錄中。

## 📄 授權

此專案僅供學習與研究使用。
