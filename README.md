<div align="center">

# 📸 PicGallery_TS

**A sleek, responsive, strongly-typed photo gallery web application built with TypeScript, modern HTML5 semantic markup, and vanilla CSS3.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Picsum API](https://img.shields.io/badge/API-Picsum%20Photos-0284c7?style=for-the-badge)](https://picsum.photos/)

</div>

---

## 🌟 Overview

**PicGallery_TS** dynamically fetches curated photography metadata from the [Picsum Photos API](https://picsum.photos/) and renders modern, responsive photo cards. Built with clean vanilla TypeScript and native Web APIs, this project emphasizes end-to-end type safety, elegant UI micro-interactions, robust network error handling, and zero external runtime dependencies.

---

## ✨ Key Features

- 🛡️ **Strict TypeScript Architecture**: Strict compiler settings (`strict: true`) with strongly-typed API models and null-safe DOM element querying.
- 🎨 **Modern Design & Micro-Interactions**: Clean card layouts with glassmorphic accents, soft drop shadows, image scale transitions on hover, and custom badge elements.
- 📱 **Fluid Responsive Grid**: Mobile-first CSS Grid that gracefully scales across all viewport sizes (smartphones, tablets, laptops, and ultra-wide displays).
- ⚡ **Native Performance**: Zero runtime framework overhead — purely vanilla JavaScript compiled from TypeScript.
- 🔗 **Direct Unsplash Integration**: Each card includes the photo author, image ID, and a direct outbound link to the high-resolution photo on Unsplash.
- 🚦 **Accessible & Resilient**: Proper ARIA landmark roles (`aria-live`, `aria-label`), lazy-loaded images (`loading="lazy"`), and informative loading/error state notifications.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[TypeScript](https://www.typescriptlang.org/)** | Strongly-typed client-side logic, API interfaces, and compile-time safety |
| **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)** | Semantic document structure and accessibility attributes |
| **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** | Modern CSS Grid, Flexbox, CSS Custom Properties, and micro-animations |
| **[Picsum Photos API](https://picsum.photos/)** | Free and open API providing high-quality placeholder photo metadata |

---

## 📂 Project Structure

```plaintext
PicGallery_TS/
├── index.html       # Main HTML entry point with semantic layout
├── styles.css       # Design system, CSS variables, grid, and animations
├── app.ts           # Core application logic, TypeScript interfaces & DOM rendering
├── app.js           # Compiled JavaScript output
├── app.js.map       # Source map for in-browser debugging
├── tsconfig.json    # TypeScript compiler configuration (strict mode)
├── package.json     # Project scripts and developer metadata
├── .gitignore       # Git ignore rules for node_modules, logs, and OS files
├── LICENSE          # MIT Open Source License
└── README.md        # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari).
- [Node.js](https://nodejs.org/) (optional, required if compiling TypeScript locally).

### 1. Clone the Repository

```bash
git clone https://github.com/akshxttadi/PicGallery_TS.git
cd PicGallery_TS
```

### 2. Run the Application

Because `app.js` is already pre-compiled, you can run the application immediately without installing dependencies:

- **Option A (VS Code Live Server)**: Right-click `index.html` and select **"Open with Live Server"**.
- **Option B (Python HTTP Server)**:
  ```bash
  python -m http.server 3000
  ```
  Then visit `http://localhost:3000` in your browser.
- **Option C (Node `npx serve`)**:
  ```bash
  npx serve .
  ```

---

## ⚙️ TypeScript Compilation

To compile or modify the TypeScript source code (`app.ts`):

### One-Time Build
```bash
npx -p typescript tsc
```

### Watch Mode (Auto-Recompile on Save)
```bash
npx -p typescript tsc --watch
```

---

## 🧩 TypeScript Architecture

The application defines a strict interface matching the Picsum API response schema:

```typescript
interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
```

DOM elements are cast safely and guarded against null references:
- Strict return types (`Promise<PicsumPhoto[]>`, `HTMLElement`, `Promise<void>`)
- Safe type-narrowing on caught errors (`error instanceof Error`)

---

## 🌐 API Reference

- **Endpoint**: `https://picsum.photos/v2/list?page=1&limit=8`
- **Dynamic Image Sizing**: `https://picsum.photos/id/{id}/400/250`
- **Docs**: [Picsum Photos Documentation](https://picsum.photos/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

## 👤 Author

**Akshat Aditya**
- GitHub: [@akshxttadi](https://github.com/akshxttadi)
