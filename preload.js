// Preload script for context isolation
// No direct Node.js access in renderer

const { contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  // You can expose safe APIs here if needed
  contextBridge.exposeInMainWorld('closeApp', () => {
    ipcRenderer.send('close-app');
  });
});
