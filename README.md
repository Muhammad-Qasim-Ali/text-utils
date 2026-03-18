# TextUtils

A **React-based text utility web app** that provides a collection of handy tools to analyze and manipulate text. Built as a single-page application using React and React Router, TextUtils lets users quickly transform and inspect any text right in the browser.

---

## 🚀 Features

- Convert text to **UPPERCASE** or **lowercase**
- **Clear** text with one click
- **Copy** text to clipboard
- Count **words** and **characters**
- Estimated **reading time** display
- Remove extra **whitespace**
- **Dark / Light mode** toggle
- Client-side routing with React Router
- Deployed via GitHub Pages

---

## 🛠️ Tech Stack

| Technology                | Purpose                |
| ------------------------- | ---------------------- |
| React 18                  | UI framework           |
| React Router DOM v6       | Client-side navigation |
| Create React App          | Project bootstrapping  |
| GitHub Pages (`gh-pages`) | Deployment             |
| JavaScript (ES Modules)   | App logic              |
| HTML / CSS                | Structure & styling    |

---

## 📁 Project Structure

```
text-utils/
├── public/               # Static HTML template & assets
├── src/                  # React source code
│   ├── components/       # Reusable components (Navbar, TextForm, Alert, etc.)
│   ├── App.js            # Root component with routing
│   └── index.js          # App entry point
├── module1.mjs           # Utility ES module
├── module2.mjs           # Utility ES module
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Muhammad-Qasim-Ali/text-utils.git
   cd text-utils
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🏗️ Build & Deploy

**Build for production:**

```bash
npm run build
```

**Deploy to GitHub Pages:**

```bash
npm run deploy
```

---

## 📦 Dependencies

| Package            | Purpose                 |
| ------------------ | ----------------------- |
| `react`            | Core UI library         |
| `react-dom`        | DOM rendering           |
| `react-router-dom` | Page routing            |
| `react-scripts`    | CRA build tooling       |
| `web-vitals`       | Performance metrics     |
| `gh-pages`         | GitHub Pages deployment |

---

## 🤝 Contributing

Contributions and suggestions are welcome! Feel free to open an issue or submit a pull request.
