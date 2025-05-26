const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        fullscreen: true, // Start in fullscreen
        autoHideMenuBar: true, // Hide the menu bar
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');
    win.setMenuBarVisibility(false); // Ensure menu bar is hidden

    // Listen for closeApp event from renderer
    ipcMain.on('close-app', () => {
        app.quit();
    });
}


app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
