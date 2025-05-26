# 🔒 Electron Fullscreen Web Viewer

A minimal, secure, fullscreen desktop app built with [Electron](https://www.electronjs.org/) that displays a specific website inside a Chromium-based iframe. Designed for kiosk environments, digital signage, or locked-down access to web portals.

![screenshot](assets/screenshot.png) <!-- Optional: Add screenshot path -->

---

## 🚀 Features

- Fullscreen Chromium-based web view
- Frameless window with no title bar or menus
- Loads a specified website inside an iframe
- Floating close button with glassmorphism effect
- Authentication modal (default: `admin` / `admin`) to exit app
- Secure communication via Electron's `contextBridge` and IPC
- Built-in support for Windows installer via `electron-builder`

---

## 🛠 Technologies Used

- [Electron](https://www.electronjs.org/)
- HTML5 + CSS3 + Vanilla JavaScript
- Node.js (main process)
- Fluent UI-inspired glassmorphism
- Google Fonts (Open Sans)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/electron-web-viewer.git
cd electron-web-viewer
npm install
npm start
