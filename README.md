# Daytech Gem - 寶石收藏網站

寶石電商展示平台，採用 React 19 + TypeScript 開發，具備產品瀏覽、篩選、詳情查看等功能。

## 網站功能

**寶石列表頁** (`/`)
- 響應式產品網格（行動版 2 欄，桌面版 4 欄）
- 切工篩選（Round、Oval、Emerald、Cushion 等）
- 分頁控制、每頁數量選擇（25/50/100）

**寶石詳情頁** (`/gem/:id`)
- 產品圖片放大鏡
- 完整產品資訊（SKU、價格、重量、切工）
- WhatsApp 快速聯絡

## 啟動方式

### 環境需求
- Node.js v18+
- npm

### 安裝與執行

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 開啟瀏覽器
http://localhost:5173
```

### 其他指令

```bash
npm run lint          # 程式碼檢查
npm run lint:fix      # 自動修正
npm test              # 執行測試
npm run test:ui       # 測試 UI 模式
npm run build         # 建置
```

## 技術棧

- **React 19.2.0** - UI 框架
- **TypeScript** - 型別安全
- **React Router DOM** - 前端路由
- **Vite** - 建置工具
- **Tailwind CSS** - CSS 框架
- **Vitest** + **React Testing Library** - 測試
- **Biome** - Linting & Formatting

## 設計考量

### 響應式設計

Mobile First 設計，Tailwind CSS 斷點：

| 斷點 | 寬度 | 說明 |
|------|------|------|
| `sm:` | ≥640px | 小平板 |
| `md:` | ≥768px | 平板 |
| `lg:` | ≥1024px | 桌面 |
| `xl:` | ≥1280px | 大螢幕 |

### 專案結構

功能導向架構（Feature-Based Directory），依業務功能組織程式碼：

```
src/
├── components/      # 共用元件（layout、navigation、ui）
├── features/        # 功能模組
│   └── gems/        # 寶石功能（components、detail、list）
├── data/            # 資料層
├── layouts/         # 版面配置
├── pages/           # 頁面
└── types/           # TypeScript 型別
```

## 程式碼品質

### 測試

13 個元件測試，涵蓋主要功能：ProductInfo、ProductDataTable、PromotionBanner、Accordion、Pagination、GemCard

```bash
npm test
```

### Biome

取代 Prettier + ESLint：
- Rust 編寫，速度快 25 倍以上（0.3 秒 vs 8-10 秒）
- 整合格式化與 Linting，單一工具
- 零配置，開箱即用

### Git Hooks

Husky + lint-staged：
- pre-commit 自動執行程式碼檢查與修正
- 確保程式碼品質標準
